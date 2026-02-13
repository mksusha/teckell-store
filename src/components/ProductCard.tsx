"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // ← ВАЖНО: добавьте этот импорт!

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    categorySlug?: string;
    price: number;
    priceMax?: number;
    priceSuffix?: string;
    image: string;
    hoverImage?: string; // ← Добавляем hoverImage в пропсы
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
                                hoverImage, // ← Добавляем hoverImage
                                isReadyToShip = false,
                                isLimited = false,
                            }: ProductCardProps) {

    // Форматирование цены с разделителями тысяч
    const formatPrice = (price: number): string => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    // Состояние для hover-изображения
    const [isHovered, setIsHovered] = useState(false); // ← Теперь работает!

    return (
        <div
            className="product-card group relative bg-white hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* ССЫЛКА НА СТРАНИЦУ ТОВАРА */}
            <Link href={`/product/${id}`} className="block">
                <div className="product-card-image relative overflow-hidden bg-gray-50">
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
                        className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full p-2 shadow-md hover:bg-[#aea062] group/btn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log(`Добавлено в избранное: ${id}`);
                        }}
                        aria-label="Добавить в избранное"
                    >
                        <Heart size={16} className="text-[#6e6b67] group-hover/btn:text-white transition-colors" />
                    </button>

                    {/* Изображение с эффектом hover - меняется при наведении */}
                    <Image
                        src={isHovered && hoverImage ? hoverImage : image}
                        alt={name}
                        fill
                        className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 280px, 320px"
                    />

                    {/* Кнопка "Быстрый просмотр" - появляется снизу при наведении */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                            className="w-full bg-[#3c3937] text-white text-[11px] uppercase tracking-[2px] py-3 hover:bg-[#aea062] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(`Быстрый просмотр: ${id}`);
                            }}
                        >
                            Быстрый просмотр
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
                    className="lg:hidden w-full mt-3 bg-[#f5f5f5] text-[#3c3937] text-[10px] uppercase tracking-[2px] py-2.5 hover:bg-[#aea062] hover:text-white transition-colors font-medium"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Добавлено в корзину: ${id}, количество: 1`);
                    }}
                >
                    В корзину
                </button>
            </div>
        </div>
    );
}