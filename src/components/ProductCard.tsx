"use client";

import { Heart, ShoppingCart, Check, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    categorySlug?: string;
    price: number;
    priceMax?: number;
    priceSuffix?: string;
    image: string;
    hoverImage?: string;
    isReadyToShip?: boolean;
    isLimited?: boolean;
}

export function ProductCard({
                                id,
                                name,
                                category,
                                categorySlug,
                                price,
                                priceMax,
                                priceSuffix = "без НДС",
                                image,
                                hoverImage,
                                isReadyToShip = false,
                                isLimited = false,
                            }: ProductCardProps) {

    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart, items } = useCart();

    const isFavorite = isInWishlist(id);
    const [isInCart, setIsInCart] = useState(false);
    const [showAddedAnimation, setShowAddedAnimation] = useState(false);

    // Проверяем, есть ли товар в корзине
    useEffect(() => {
        const cartItem = items.find(item => item.product_id === id);
        setIsInCart(!!cartItem);
    }, [items, id]);

    // Форматирование цены с разделителями тысяч
    const formatPrice = (price: number): string => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    // Состояние для hover-изображения
    const [isHovered, setIsHovered] = useState(false);

    // Обработчик добавления в избранное
    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(id);
    };

    // Обработчик добавления в корзину
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isInCart) {
            addToCart({
                product_id: id,
                name,
                price,
                image,
                quantity: 1
            });

            // Показываем анимацию добавления
            setShowAddedAnimation(true);
            setTimeout(() => setShowAddedAnimation(false), 1000);
        }
    };

    return (
        <div
            className="product-card group relative bg-white hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* ССЫЛКА НА СТРАНИЦУ ТОВАРА */}
            <Link href={`/product/${id}`} className="block">
                <div className="product-card-image relative overflow-hidden bg-gray-50 aspect-square">
                    {/* Лейблы */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                        {isReadyToShip && (
                            <span className="bg-[#c5b151] text-white text-[10px] uppercase tracking-wider px-2 py-1">
                                Готов к отправке
                            </span>
                        )}
                        {isLimited && (
                            <span className="bg-[#aea062] text-white text-[10px] uppercase tracking-wider px-2 py-1">
                                Лимитированная серия
                            </span>
                        )}
                    </div>

                    {/* Кнопка "В избранное" */}
                    <button
                        className={`absolute top-3 right-3 z-20 transition-all duration-300 bg-white rounded-full p-2 shadow-md hover:bg-[#aea062] group/btn ${
                            isFavorite ? 'opacity-100 bg-[#aea062]' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        onClick={handleWishlistClick}
                        aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                    >
                        <Heart
                            size={16}
                            className={`transition-colors ${
                                isFavorite
                                    ? 'text-white fill-[#aea062]'
                                    : 'text-[#6e6b67] group-hover/btn:text-white'
                            }`}
                        />
                    </button>

                    {/* Изображение с эффектом hover */}
                    <div className="relative w-full h-full">
                        <Image
                            src={isHovered && hoverImage ? hoverImage : image}
                            alt={name}
                            fill
                            className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 280px, 320px"
                        />
                    </div>

                    {/* Кнопка "В корзину" - появляется снизу при наведении */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                            className={`w-full text-white text-[11px] uppercase tracking-[2px] py-3 transition-colors flex items-center justify-center gap-2 ${
                                isInCart
                                    ? 'bg-green-600 hover:bg-green-700 cursor-default'
                                    : 'bg-[#3c3937] hover:bg-[#aea062]'
                            } ${showAddedAnimation ? 'animate-pulse' : ''}`}
                            onClick={handleAddToCart}
                            disabled={isInCart}
                        >
                            {isInCart ? (
                                <>
                                    <Check size={14} />
                                    В корзине
                                </>
                            ) : (
                                <>
                                    <ShoppingCart size={14} />
                                    В корзину
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Link>

            {/* Информация о товаре */}
            <div className="text-center mt-4 px-2 pb-4">
                <Link href={`/product/${id}`} className="hover:text-[#aea062] transition-colors">
                    <h3 className="product-name text-gray-800 font-medium text-sm md:text-base line-clamp-2 min-h-[40px]">
                        {name}
                    </h3>
                </Link>

                <Link
                    href={`/category/${categorySlug || id.split('-')[0]}`}
                    className="product-category text-xs text-gray-500 hover:text-[#aea062] transition-colors block mt-1"
                >
                    {category}
                </Link>

                <p className="product-price mt-2 text-sm md:text-base font-semibold text-gray-800">
                    €{formatPrice(price)}
                    <span className="text-[#a09d98] font-normal text-[10px] ml-1">
                        {priceSuffix}
                    </span>
                    {priceMax && (
                        <>
                            <span className="text-[#a09d98] mx-1">–</span>
                            €{formatPrice(priceMax)}
                            <span className="text-[#a09d98] font-normal text-[10px] ml-1">
                                {priceSuffix}
                            </span>
                        </>
                    )}
                </p>

                {/* Кнопка "В корзину" для мобильных */}
                <button
                    className={`lg:hidden w-full mt-3 text-[10px] uppercase tracking-[2px] py-2.5 transition-colors font-medium flex items-center justify-center gap-2 ${
                        isInCart
                            ? 'bg-green-600 text-white cursor-default'
                            : 'bg-[#f5f5f5] text-[#3c3937] hover:bg-[#aea062] hover:text-white'
                    }`}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                >
                    {isInCart ? (
                        <>
                            <Check size={14} />
                            В корзине
                        </>
                    ) : (
                        <>
                            <ShoppingCart size={14} />
                            В корзину
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}