"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
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

interface ProductSectionProps {
    brand: string;
    title: string;
    description: string;
    products: Product[];
    categorySlug?: string;
    featureImage?: string;
    imagePosition?: "left" | "right";
    bgColor?: string;
}

export function ProductSection({
                                   brand,
                                   title,
                                   description,
                                   products,
                                   categorySlug,
                                   featureImage,
                                   imagePosition = "left",
                                   bgColor = "white",
                               }: ProductSectionProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const carouselContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const isImageLeft = imagePosition === "left";

    // Ширина карточки + gap (320px + 20px = 340px)
    const CARD_WIDTH = 340;
    // Количество карточек для прокрутки
    const SCROLL_COUNT = 2;
    // Ширина прокрутки
    const SCROLL_AMOUNT = CARD_WIDTH * SCROLL_COUNT;

    // Проверка состояния прокрутки
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 5);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            setTimeout(() => {
                checkScroll();
            }, 200);

            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);

            return () => {
                container.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, [products]);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const currentScroll = container.scrollLeft;

            let targetScroll;
            if (direction === "left") {
                targetScroll = Math.max(0, currentScroll - SCROLL_AMOUNT);
            } else {
                targetScroll = Math.min(
                    container.scrollWidth - container.clientWidth,
                    currentScroll + SCROLL_AMOUNT
                );
            }

            container.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className={`w-full border-b border-[#e5e5e5] ${
                bgColor === "white" ? "bg-white" : "bg-[#f9f9f9]"
            }`}
        >
            <div className="w-full">
                <div className={`flex flex-col ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} w-full`}>

                    {/* ЛЕВАЯ/ПРАВАЯ КОЛОНКА - ИЗОБРАЖЕНИЕ (50%) */}
                    {featureImage && (
                        <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-[5/6] w-full h-full overflow-hidden bg-[#f5f5f5] group">
                                <Image
                                    src={featureImage}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 shadow-sm">
                                    <span className="text-[10px] uppercase tracking-[3px] text-[#3c3937] font-semibold">
                                        {brand}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-white/30 rounded-full" />
                            </div>
                        </div>
                    )}

                    {/* ПРАВАЯ/ЛЕВАЯ КОЛОНКА - КОНТЕНТ (50%) */}
                    <div className={`lg:w-1/2 w-full ${featureImage ? '' : 'mx-auto'}`}>
                        <div className="flex flex-col h-full justify-center px-6 md:px-8 lg:px-12 xl:px-16">

                            {/* ЗАГОЛОВОК СЕКЦИИ */}
                            <div className="text-center mb-8">
                                <span className="text-[11px] uppercase tracking-[4px] text-[#aea062] font-semibold mb-2 block">
                                    {brand}
                                </span>
                                <h2
                                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#3c3937] mb-3 uppercase tracking-[0.1em]"
                                    style={{ fontFamily: "'Bodoni Moda', 'Times New Roman', serif" }}
                                >
                                    {title}
                                </h2>
                                <p className="text-[#a09d98] text-sm md:text-base leading-relaxed max-w-md mx-auto font-light">
                                    {description}
                                </p>
                            </div>

                            {/* КАРУСЕЛЬ ТОВАРОВ */}
                            <div
                                ref={carouselContainerRef}
                                className="relative w-full"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {/* Горизонтальный скролл с товарами */}
                                <div
                                    ref={scrollContainerRef}
                                    className="flex overflow-x-auto gap-5 pb-6 scrollbar-hide"
                                    style={{
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none',
                                        WebkitOverflowScrolling: 'touch',
                                        scrollSnapType: 'x mandatory',
                                    }}
                                >
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex-none w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[calc(50%-10px)] transition-transform duration-300 hover:-translate-y-1"
                                            style={{
                                                scrollSnapAlign: 'start',
                                                maxWidth: '340px',
                                            }}
                                        >
                                            <ProductCard
                                                id={product.id}
                                                name={product.name}
                                                category={product.category}
                                                categorySlug={product.categorySlug}
                                                price={product.price}
                                                priceMax={product.priceMax}
                                                priceSuffix={product.priceSuffix}
                                                image={product.image}
                                                hoverImage={product.hoverImage}
                                                isReadyToShip={product.isReadyToShip}
                                                isLimited={product.isLimited}
                                            />
                                        </div>
                                    ))}
                                    <div className="flex-none w-4" />
                                </div>

                                {/* СТРЕЛКИ НАВИГАЦИИ */}
                                {products.length > 2 && (
                                    <>
                                        <button
                                            onClick={() => scroll("left")}
                                            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-5 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group ${
                                                showLeftArrow && isHovering
                                                    ? "opacity-100 visible translate-x-0"
                                                    : "opacity-0 invisible translate-x-2"
                                            } ${
                                                !showLeftArrow ? 'cursor-not-allowed opacity-30' : 'hover:bg-[#aea062] hover:text-white'
                                            }`}
                                            disabled={!showLeftArrow}
                                            aria-label="Предыдущие товары"
                                        >
                                            <ChevronLeft
                                                size={18}
                                                className="lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </button>

                                        <button
                                            onClick={() => scroll("right")}
                                            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-5 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group ${
                                                showRightArrow && isHovering
                                                    ? "opacity-100 visible translate-x-0"
                                                    : "opacity-0 invisible -translate-x-2"
                                            } ${
                                                !showRightArrow ? 'cursor-not-allowed opacity-30' : 'hover:bg-[#aea062] hover:text-white'
                                            }`}
                                            disabled={!showRightArrow}
                                            aria-label="Следующие товары"
                                        >
                                            <ChevronRight
                                                size={18}
                                                className="lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </button>
                                    </>
                                )}

                                {/* Индикатор прокрутки для мобильных */}
                                {products.length > 2 && (
                                    <div className="flex lg:hidden justify-center mt-4 gap-1.5">
                                        {Array.from({ length: Math.ceil(products.length / 2) }).map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => {
                                                    if (scrollContainerRef.current) {
                                                        scrollContainerRef.current.scrollTo({
                                                            left: i * CARD_WIDTH * 2,
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                }}
                                                className="group"
                                            >
                                                <span className="block w-1.5 h-1.5 rounded-full bg-[#e5e5e5] group-hover:bg-[#aea062] transition-colors" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ССЫЛКА "ПОСМОТРЕТЬ ВСЕ" */}
                            <div className="text-left mt-10">
                                <Link
                                    href={`/category/${categorySlug || title.toLowerCase().replace(' ', '-')}`}
                                    className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[4px] text-[#3c3937] hover:text-[#aea062] transition-colors font-semibold"
                                >
                                    ПОСМОТРЕТЬ ВСЕ
                                    <span className="w-8 h-px bg-[#aea062] group-hover:w-12 transition-all duration-300" />
                                    <span className="text-[#a09d98] text-[10px] ml-1 font-normal">
                                        ({products.length})
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}