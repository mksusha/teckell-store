"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { Trash2, X } from 'lucide-react';

interface CartWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartWidget({ isOpen, onClose }: CartWidgetProps) {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

    // Форматирование цены
    const formatPrice = (price: number | undefined | null) => {
        if (!price || isNaN(price)) return "0";
        return price.toLocaleString('de-DE');
    };

    // Проверяем, что у каждого элемента есть уникальный ключ
    const itemsWithValidKeys = items.map((item, index) => ({
        ...item,
        safeKey: item.key || `item-${item.product_id}-${index}-${Date.now()}`
    }));

    if (!isOpen) return null;

    return (
        <>
            {/* Оверлей (затемнение фона) */}
            <div
                className="fixed inset-0 bg-black/40 z-50 transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Виджет корзины */}
            <div
                className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col"
                role="complementary"
                aria-label="Боковая панель корзины"
            >
                {/* Шапка корзины */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <span className="text-lg font-medium">Корзина</span>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-[#aea062] transition-colors"
                        aria-label="Закрыть"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Содержимое корзины с прокруткой (без видимого скролла) */}
                <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
                    {itemsWithValidKeys.length > 0 ? (
                        <ul className="space-y-6">
                            {itemsWithValidKeys.map((item) => (
                                <li key={item.safeKey} className="relative group border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                    <div className="flex gap-4">
                                        {/* Кнопка удаления */}
                                        <button
                                            onClick={() => removeFromCart(item.key)}
                                            className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100"
                                            aria-label={`Удалить ${item.name} из корзины`}
                                        >
                                            <Trash2 size={14} />
                                        </button>

                                        {/* Изображение товара */}
                                        <Link
                                            href={`/product/${item.product_id}`}
                                            className="flex-shrink-0 w-20 h-20 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                                            onClick={onClose}
                                        >
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                        </Link>

                                        {/* Информация о товаре */}
                                        <div className="flex-1 min-w-0">
                                            <Link
                                                href={`/product/${item.product_id}`}
                                                className="block text-sm font-medium text-gray-800 hover:text-[#aea062] transition-colors mb-2"
                                                onClick={onClose}
                                            >
                                                {item.name}
                                            </Link>

                                            {/* Вариации товара */}
                                            {item.variations && item.variations.length > 0 && (
                                                <ul className="text-xs text-gray-600 mb-2">
                                                    {item.variations.map((variation, index) => (
                                                        <li key={`${item.key}-var-${index}`} className="flex gap-1">
                                                            <span className="text-gray-500">{variation.name}:</span>
                                                            <span>{variation.value}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Количество и цена */}
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center border border-gray-300 rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.key, Math.max(1, item.quantity - 1))}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors rounded-l-md"
                                                        aria-label="Уменьшить количество"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-10 text-center text-sm font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors rounded-r-md"
                                                        aria-label="Увеличить количество"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-sm text-gray-500">Цена:</span>
                                                    <span className="ml-1 text-sm font-semibold text-[#aea062]">
                                                        {formatPrice(item.price)} €
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Подытог */}
                                            <div className="text-right mt-2 pt-2 border-t border-gray-100">
                                                <span className="text-xs text-gray-500">Подытог:</span>
                                                <span className="ml-1 text-sm font-bold text-[#aea062]">
                                                    {formatPrice(item.total)} €
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                            <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-sm">В корзине нет товаров</p>
                        </div>
                    )}
                </div>

                {/* Футер корзины (итого и кнопки) */}
                {itemsWithValidKeys.length > 0 && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        {/* Итоговая сумма */}
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-base font-medium text-gray-700">Итого:</span>
                            <span className="text-2xl font-bold text-[#aea062]">
                                {formatPrice(cartTotal || 0)} €
                            </span>
                        </div>

                        {/* Кнопки */}
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/cart"
                                onClick={onClose}
                                className="w-full text-center bg-[#3c3937] text-white text-sm uppercase tracking-wider py-3 px-4 rounded-md hover:bg-[#aea062] transition-colors duration-300"
                            >
                                Перейти в корзину
                            </Link>
                            <Link
                                href="/checkout"
                                onClick={onClose}
                                className="w-full text-center border-2 border-[#aea062] bg-[#aea062] text-white text-sm uppercase tracking-wider py-3 px-4 rounded-md hover:bg-[#8b7a3e] hover:border-[#8b7a3e] transition-colors duration-300"
                            >
                                Оформить заказ
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}