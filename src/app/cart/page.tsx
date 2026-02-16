"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Trash2, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Данные формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        privacyAccepted: false
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customer: formData,
                    order: {
                        items: items.map(item => ({
                            name: item.name,
                            quantity: item.quantity,
                            price: item.price,
                            total: item.total
                        })),
                        subtotal: subtotal,
                        vat: vat,
                        total: total
                    }
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Показываем модальное окно
                setShowSuccessModal(true);
                // Сброс формы
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    privacyAccepted: false
                });
                setShowCheckoutForm(false);
                // Здесь можно добавить очистку корзины если нужно
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending order:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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

            {/* Модальное окно успешной отправки */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Затемнение фона */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setShowSuccessModal(false)}
                    />

                    {/* Модальное окно */}
                    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fadeIn">
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center">
                            {/* Иконка успеха */}
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                                <svg
                                    className="h-8 w-8 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-serif text-gray-900 mb-2">
                                Заявка отправлена!
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Спасибо за ваш заказ. Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей.
                            </p>

                            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-medium">Детали заказа:</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Сумма заказа: <span className="font-semibold text-[#c9b037]">{formatPrice(total)} €</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Способ связи: мы позвоним вам в ближайшее время
                                </p>
                            </div>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full bg-[#c9b037] text-white py-3 px-4 rounded-lg hover:bg-[#b89f30] transition-colors"
                            >
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <div className="relative w-full h-[200px] md:h-[310px] overflow-hidden">
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

                            {!showCheckoutForm ? (
                                <button
                                    onClick={() => setShowCheckoutForm(true)}
                                    className="block w-full text-center mt-6 bg-[#3c3937] text-white py-4 px-4 uppercase tracking-wider bg-[rgb(207,181,59)] hover:bg-[rgb(193,168,56)] text-sm sm:text-base"
                                >
                                    Оформить заказ
                                </button>
                            ) : (
                                <form onSubmit={handleSubmitOrder} className="mt-6 space-y-4">
                                    <h3 className="text-lg font-serif mb-4">Контактные данные</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Ваше имя *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:border-[#c9b037] outline-none transition-colors"
                                            placeholder="Иван Иванов"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Ваш Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:border-[#c9b037] outline-none transition-colors"
                                            placeholder="ivan@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Номер телефона *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:border-[#c9b037] outline-none transition-colors"
                                            placeholder="+7 (999) 123-45-67"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="flex items-start gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="privacyAccepted"
                                                checked={formData.privacyAccepted}
                                                onChange={handleFormChange}
                                                required
                                                className="mt-1"
                                            />
                                            <span className="text-sm text-gray-600">
                                                Принимаю условия{' '}
                                                <a href="/privacy-policy" className="text-[#c9b037] hover:underline">
                                                    Политики конфиденциальности
                                                </a>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !formData.privacyAccepted}
                                            className="flex-1 bg-[#c9b037] text-white py-3 px-4 uppercase tracking-wider hover:bg-[#b89f30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'ОТПРАВКА...' : 'ПОДТВЕРДИТЬ ЗАКАЗ'}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setShowCheckoutForm(false)}
                                            className="px-4 py-3 border border-gray-300 hover:bg-gray-50 transition-colors"
                                        >
                                            Отмена
                                        </button>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 text-center">
                                            Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по email.
                                        </div>
                                    )}
                                </form>
                            )}
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

            {/* Добавляем стили для анимации */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}