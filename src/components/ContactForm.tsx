// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacyAccepted: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Имитация отправки формы
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            // Сброс формы после успешной отправки
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                privacyAccepted: false
            });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#DEC560] outline-none transition-colors"
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
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#DEC560] outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Номер телефона *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#DEC560] outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Компания *
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#DEC560] outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше сообщение *
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#DEC560] outline-none transition-colors resize-y"
                />
            </div>

            <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1"
                    />
                    <span className="text-sm text-gray-600">
                        Принимаю условия{' '}
                        <a href="/privacy-policy" className="text-[#DEC560] hover:underline">
                            Политики конфиденциальности
                        </a>
                        .
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !formData.privacyAccepted}
                className="w-full bg-[#3c3937] text-white py-4 px-6 text-sm uppercase tracking-wider hover:bg-[#DEC560] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'ОТПРАВКА...' : 'ЗАДАТЬ ВОПРОС'}
            </button>

            {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 text-center">
                    Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 text-center">
                    Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.
                </div>
            )}
        </form>
    );
}