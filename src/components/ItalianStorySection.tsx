"use client";

import Link from "next/link";

export function ItalianStorySection() {
    return (
        <section className="py-16 md:py-10 bg-white relative">
            {/* Правая колонка с изображением на всю высоту */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
                <div className="relative w-full h-full">
                    {/* Фоновое изображение */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/8.webp')",
                        }}
                    />
                    {/* Затемнение для читаемости текста (опционально) */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>

            {/* Контейнер с текстом */}
            <div className="container h-[400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
                    {/* Левая колонка с текстом */}
                    <div>
                        <div className="py-16 md:py-2">
                            {/* ЗАГОЛОВОК СЕКЦИИ */}
                            <div className="mb-2">
                                <span className="text-[10px] uppercase tracking-[4px] text-[#aea062] font-semibold mb-2 block">
                                    TECKELL — ПО-НАСТОЯЩЕМУ ИТАЛЬЯНСКИЙ
                                </span>
                                <h2
                                    className="text-2xl md:text-3xl lg:text-2xl font-serif text-[#3c3937] mb-1 uppercase tracking-[0.1em]"
                                    style={{ fontFamily: "'Bodoni Moda', 'Times New Roman', serif" }}
                                >
                                    ИТАЛЬЯНСКАЯ ИСТОРИЯ
                                </h2>
                                <p className="text-[#a09d98] text-sm md:text-base mb-4 leading-relaxed max-w-md font-light">
                                    Откройте для себя уникальное сочетание итальянского дизайна, мастерства и инноваций, которое делает Teckell по-настоящему особенным брендом.
                                </p>
                            </div>

                            {/* ГРИД С ХАРАКТЕРИСТИКАМИ */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                                <div>
                                    <h3
                                        className="text-base font-semibold text-[#3c3937] mb-1 uppercase tracking-wide"
                                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                                    >
                                        ДИЗАЙН И ТЕХНОЛОГИИ:
                                    </h3>
                                    <p className="text-sm text-[#a09d98] leading-relaxed">
                                        Неутолимое желание экспериментировать и переписывать правила дизайна.
                                    </p>
                                </div>

                                <div>
                                    <h3
                                        className="text-base font-semibold text-[#3c3937] mb-1 uppercase tracking-wide"
                                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                                    >
                                        ИЗЫСКАННЫЕ МАТЕРИАЛЫ:
                                    </h3>
                                    <p className="text-base text-[#a09d98] leading-relaxed">
                                        Качественные материалы — наш чистый холст.
                                    </p>
                                </div>

                                <div>
                                    <h3
                                        className="text-base font-semibold text-[#3c3937] mb-1 uppercase tracking-wide"
                                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                                    >
                                        РЕМЕСЛЕННЫЙ ОПЫТ:
                                    </h3>
                                    <p className="text-base text-[#a09d98] leading-relaxed">
                                        Итальянское мастерство, не имеющее себе равных.
                                    </p>
                                </div>

                                <div>
                                    <h3
                                        className="text-base font-semibold text-[#3c3937] mb-1 uppercase tracking-wide"
                                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                                    >
                                        ОСНОВНЫЕ ЦЕННОСТИ:
                                    </h3>
                                    <p className="text-sm text-[#a09d98] leading-relaxed">
                                        Базовые принципы этого семейного бизнеса: от этики до обслуживания клиентов.
                                    </p>
                                </div>
                            </div>

                            {/* ССЫЛКА НА МАГАЗИН */}
                            <div className="text-left">
                                <Link
                                    href="#"
                                    className="inline-block border border-[#3c3937] text-[#3c3937] px-5 py-3 text-xs uppercase tracking-widest hover:bg-[#3c3937] hover:text-white transition-all duration-300"
                                >
                                    ПОСЕТИТЬ МАГАЗИН TECKELL
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Пустая колонка для сетки (занимает место под фото) */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </section>
    );
}