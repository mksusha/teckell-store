"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [couponCode, setCouponCode] = useState("");

    const formatPrice = (price: number | undefined | null) => {
        if (!price || isNaN(price)) return "0";
        return price.toLocaleString("de-DE");
    };

    const vatRate = 0.22;
    const subtotal = cartTotal || 0;
    const vat = subtotal * vatRate;
    const total = subtotal + vat;

    return (
        <div>
            <Header />

            {/* HERO SECTION */}
            <div className="relative w-full  h-[200px] md:h-[310px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cart.webp"
                        alt="Корзина покупок"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl mt-10 md:text-5xl text-white font-serif tracking-wider">
                        Корзина
                    </h1>
                </div>
            </div>

            <main className="container m-auto px-4 py-8 md:py-12">
                {items?.length ? (
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
                        {/* TABLE - Mobile version */}
                        <div className="lg:hidden space-y-4">
                            {items.map((item) => (
                                <div key={item.key} className="border border-gray-200 p-4 rounded-lg">
                                    <div className="flex gap-4">
                                        {/* Product image and delete button */}
                                        <div className="relative w-24 h-24 border rounded-lg flex-shrink-0">
                                            {item.image && (
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            {/* Product name and delete */}
                                            <div className="flex justify-between items-start">
                                                <Link
                                                    href={`/product/${item.product_id}`}
                                                    className="font-medium hover:text-[#c9b037] text-sm sm:text-base"
                                                >
                                                    {item.name}
                                                </Link>
                                                <button
                                                    onClick={() => removeFromCart(item.key)}
                                                    className="text-gray-400 hover:text-red-500 ml-2"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="mt-2 text-sm">
                                                <span className="text-gray-600">Цена: </span>
                                                <span className="font-medium">{formatPrice(item.price)} €</span>
                                            </div>

                                            {/* Quantity and subtotal */}
                                            <div className="mt-3 flex items-center justify-between">
                                                <div className="flex border w-28">
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                                                        className="w-8 h-8 border-r hover:bg-gray-50"
                                                    >
                                                        −
                                                    </button>
                                                    <input
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            updateQuantity(item.key, +e.target.value || 1)
                                                        }
                                                        className="w-full text-center text-sm"
                                                        type="number"
                                                        min="1"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                                                        className="w-8 h-8 border-l hover:bg-gray-50"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <span className="text-xs text-gray-600">Подытог: </span>
                                                    <span className="font-semibold text-[#c9b037]">
                                                        {formatPrice(item.total)} €
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TABLE - Desktop version */}
                        <form className="woocommerce-cart-form hidden lg:block">
                            <table className="w-full border border-gray-200">
                                <thead>
                                <tr className="border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500">
                                    <th className="p-4 w-10"></th>
                                    <th className="p-4 w-24"></th>
                                    <th className="p-4 text-left">Товар</th>
                                    <th className="p-4 text-left">Цена</th>
                                    <th className="p-4 text-left">Количество</th>
                                    <th className="p-4 text-left">Подытог</th>
                                </tr>
                                </thead>

                                <tbody>
                                {items.map((item) => (
                                    <tr key={item.key} className="border-b border-gray-100">
                                        <td className="p-4">
                                            <button
                                                onClick={() => removeFromCart(item.key)}
                                                className="text-gray-400 hover:text-red-500"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>

                                        <td className="p-4">
                                            <div className="relative w-20 h-20 border">
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                )}
                                            </div>
                                        </td>

                                        <td className="p-4">
                                            <Link
                                                href={`/product/${item.product_id}`}
                                                className="font-medium hover:text-[#c9b037]"
                                            >
                                                {item.name}
                                            </Link>
                                        </td>

                                        <td className="p-4">{formatPrice(item.price)} €</td>

                                        <td className="p-4">
                                            <div className="flex border w-28">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.key, item.quantity - 1)}
                                                    className="w-8 h-8 border-r"
                                                >
                                                    −
                                                </button>
                                                <input
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        updateQuantity(item.key, +e.target.value || 1)
                                                    }
                                                    className="w-full text-center"
                                                    type="number"
                                                    min="1"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.key, item.quantity + 1)}
                                                    className="w-8 h-8 border-l"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>

                                        <td className="p-4 font-semibold text-[#c9b037]">
                                            {formatPrice(item.total)} €
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {/* ACTIONS */}
                            <div className="flex flex-wrap justify-between gap-4 mt-6">
                                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                    <input
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="Промокод"
                                        className="border px-4 py-2 w-full sm:w-auto"
                                    />
                                    <button className="px-6 py-2 border text-white bg-[rgb(207,181,59)] hover:bg-[rgb(193,168,56)] w-full sm:w-auto">
                                        Применить купон
                                    </button>
                                </div>

                                <button className="px-6 py-2 border hover:bg-[#c9b037] hover:text-white w-full sm:w-auto">
                                    Обновить корзину
                                </button>
                            </div>
                        </form>

                        {/* ACTIONS - Mobile version */}
                        <div className="lg:hidden flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-2">
                                <input
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Промокод"
                                    className="border px-4 py-3"
                                />
                                <button className="px-6 py-3 borderbg-accent-btn hover:bg-accent-btn-hover">
                                    Применить купон
                                </button>
                            </div>

                            <button className="px-6 py-3 border hover:bg-[#c9b037] hover:text-white">
                                Обновить корзину
                            </button>
                        </div>

                        {/* TOTALS */}
                        <div className="border border-gray-200 p-6 sm:p-8 h-fit">
                            <h2 className="text-xl sm:text-2xl font-serif mb-6">Итого корзины</h2>

                            <table className="w-full">
                                <tbody>
                                <tr className="border-b">
                                    <th className="py-3 text-left text-sm sm:text-base">Подытог</th>
                                    <td className="py-3 text-right text-sm sm:text-base">{formatPrice(subtotal)} €</td>
                                </tr>

                                <tr className="border-b">
                                    <th className="py-3 text-left text-sm sm:text-base">Доставка</th>
                                    <td className="py-3 text-right">
                                        <button className="text-[#c9b037] hover:underline flex items-center gap-1 justify-end w-full text-sm sm:text-base">
                                            Рассчитать доставку <ArrowRight size={14} />
                                        </button>
                                    </td>
                                </tr>

                                <tr className="border-b">
                                    <th className="py-3 text-left text-sm sm:text-base">НДС</th>
                                    <td className="py-3 text-right text-[#c9b037] text-sm sm:text-base">
                                        {formatPrice(vat)} €
                                    </td>
                                </tr>

                                <tr>
                                    <th className="py-6 text-left text-base sm:text-lg">Всего</th>
                                    <td className="py-6 text-right text-2xl sm:text-3xl text-[#c9b037] font-semibold">
                                        {formatPrice(total)} €
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <Link
                                href="/checkout"
                                className="block text-center mt-6 bg-[#3c3937] text-white py-4 px-4 uppercase tracking-wider text-white bg-[rgb(207,181,59)] hover:bg-[rgb(193,168,56)] text-sm sm:text-base"
                            >
                                Оформить заказ
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16 sm:py-24 px-4">
                        <h2 className="text-xl sm:text-2xl mb-6">Ваша корзина пуста</h2>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-[#3c3937] text-white px-6 py-3 hover:bg-[#c9b037] text-sm sm:text-base"
                        >
                            <ArrowLeft size={16} />
                            Вернуться в магазин
                        </Link>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}