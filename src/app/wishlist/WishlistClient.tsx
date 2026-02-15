// app/wishlist/WishlistClient.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { getProductById, Product, formatPrice } from "@/data/categories";

export function WishlistClient() {
    const { items, removeFromWishlist, clearWishlist, getItemCount } = useWishlist();
    const { addToCart } = useCart();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Загрузка товаров по ID из избранного
    useEffect(() => {
        if (items.length > 0) {
            const loadedProducts = items
                .map(item => getProductById(item.product_id))
                .filter((p): p is Product => p !== undefined);
            setProducts(loadedProducts);
        } else {
            setProducts([]);
        }
        setIsLoading(false);
    }, [items]);

    const handleRemove = (productId: string) => {
        removeFromWishlist(productId);
    };

    const handleAddToCart = (product: Product) => {
        addToCart({
            product_id: product.id,
            name: product.name,
            sku: product.sku,
            price: product.price,
            quantity: 1,
            currency: '€',
            image: product.image
        });
    };

    const handleClearAll = () => {
        if (window.confirm("Очистить весь список избранного?")) {
            clearWishlist();
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#aea062]"></div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
                <Heart size={64} className="mx-auto text-gray-300 mb-6" />
                <h2 className="text-2xl font-serif text-gray-700 mb-4">Ваш список избранного пуст</h2>
                <p className="text-gray-500 mb-8">Добавляйте товары в избранное, чтобы не потерять их</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#3c3937] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#aea062] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Перейти к покупкам
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Заголовок с количеством */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <p className="text-gray-600">
                    В избранном <span className="font-semibold text-[#aea062]">{products.length}</span> товаров
                </p>
                <button
                    onClick={handleClearAll}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
                >
                    <Trash2 size={16} />
                    Очистить все
                </button>
            </div>

            {/* Сетка товаров */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
                    >
                        {/* Кнопка удаления */}
                        <button
                            onClick={() => handleRemove(product.id)}
                            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                            aria-label="Удалить из избранного"
                        >
                            <Trash2 size={16} />
                        </button>

                        {/* Изображение */}
                        <Link href={`/product/${product.id}`} className="block relative aspect-square bg-gray-50">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                            />
                            {product.isReadyToShip && (
                                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider bg-[#c5b151] text-white px-2 py-1 rounded-sm">
                                    Готов к отправке
                                </span>
                            )}
                        </Link>

                        {/* Информация */}
                        <div className="p-5">
                            <Link href={`/product/${product.id}`} className="block mb-2">
                                <h3 className="text-sm font-medium text-gray-800 hover:text-[#aea062] transition-colors line-clamp-2">
                                    {product.name}
                                </h3>
                            </Link>

                            <p className="text-xs text-gray-500 mb-3">
                                {product.category}
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-lg font-semibold text-gray-800">
                                        €{formatPrice(product.price)}
                                    </span>
                                    {product.priceSuffix && (
                                        <span className="text-[10px] text-gray-500 ml-1 uppercase">
                                            {product.priceSuffix}
                                        </span>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#aea062] hover:text-white transition-colors"
                                    aria-label="Добавить в корзину"
                                >
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Кнопка "Продолжить покупки" */}
            <div className="text-center mt-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#aea062] transition-colors text-sm uppercase tracking-wider"
                >
                    <ArrowLeft size={16} />
                    Продолжить покупки
                </Link>
            </div>
        </div>
    );
}