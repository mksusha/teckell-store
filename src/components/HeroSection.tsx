"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Store, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,

            image: "https://teckell.store/wp-content/uploads/2025/11/Teckell-Homepage-Banner-Gen-1-1.jpg",

        },
        {
            id: 2,

            image: "https://teckell.store/wp-content/uploads/2025/11/Teckell-Homepage-Banner-Gen-2-1.jpg",

        },
        {
            id: 3,

            image: "https://teckell.store/wp-content/uploads/2025/11/Teckell-Homepage-Banner-Gen-3-1.jpg",

        },
        {
            id: 4,

            image: "https://teckell.store/wp-content/uploads/2026/01/Teckell-Homepage-Banner-Gen-4-1.jpg",

        },
        {
            id: 5,

            image: "https://teckell.store/wp-content/uploads/2026/01/Teckell-Homepage-Banner-Gen-5-1.jpg",

        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[800px] mt-16 md:mt-[100px] overflow-hidden">
            {/* Полноэкранные слайды с реальными фото Teckell */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`
                        absolute inset-0 transition-opacity duration-1000 ease-in-out
                        ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                    `}
                >
                    {/* Фоновое изображение на весь экран */}
                    <Image
                        src={slide.image}
                        alt={`Teckell `}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />


                    {/* Цветовой акцент - золотая полоса сверху */}


                </div>
            ))}

            {/* Навигация слайдера */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-6">
                {/* Индикаторы слайдов */}
                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`
                                h-1 transition-all duration-500 rounded-full
                                ${index === currentSlide
                                ? 'w-12 bg-[#aea062]'
                                : 'w-3 bg-white/40 hover:bg-white/70'
                            }
                            `}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>


            </div>

            {/* Стрелки навигации */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all hidden md:flex border border-white/20"
                aria-label="Предыдущий слайд"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all hidden md:flex border border-white/20"
                aria-label="Следующий слайд"
            >
                <ChevronRight size={20} />
            </button>

            {/* Прогресс-бар автопрокрутки */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
                <div
                    className="h-full bg-[#aea062] transition-all duration-[5000ms] ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>
        </section>
    );
}