// components/Header.tsx
"use client";

import { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Heart, Search, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { CartWidget } from "@/components/CartWidget";
import { SearchModal } from "@/components/SearchModal";
import { categories, getProductsByCategory } from "@/data/categories";
import { useWishlist } from "@/hooks/useWishlist";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
    const pathname = usePathname();

    // Получаем данные из хуков
    const { count: initialCartCount } = useCart();
    const { count: initialWishlistCount } = useWishlist();

    // Создаем локальные состояния для счетчиков
    const [cartCount, setCartCount] = useState(initialCartCount);
    const [wishlistCount, setWishlistCount] = useState(initialWishlistCount);

    // Обновляем локальные состояния при изменении данных в хуках
    useEffect(() => {
        setCartCount(initialCartCount);
    }, [initialCartCount]);

    useEffect(() => {
        setWishlistCount(initialWishlistCount);
    }, [initialWishlistCount]);

    // Подписываемся на события
    useEffect(() => {
        const handleCartUpdate = (e: CustomEvent) => {
            console.log('Cart updated:', e.detail);
            setCartCount(e.detail.count);
        };

        const handleWishlistUpdate = (e: CustomEvent) => {
            console.log('Wishlist updated:', e.detail);
            setWishlistCount(e.detail.count);
        };

        window.addEventListener('cart-updated', handleCartUpdate as EventListener);
        window.addEventListener('wishlist-updated', handleWishlistUpdate as EventListener);

        return () => {
            window.removeEventListener('cart-updated', handleCartUpdate as EventListener);
            window.removeEventListener('wishlist-updated', handleWishlistUpdate as EventListener);
        };
    }, []);

    const isProductPage = pathname.startsWith("/product/");
    const isContactPage = pathname === "/contact-us";
    const isSearchPage = pathname === "/search";
    const isWishlistPage = pathname === "/wishlist";
    const isCartPage = pathname.startsWith("/cart");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Блокировка скролла body при открытом меню или виджете
    useEffect(() => {
        if (isMenuOpen || isCartOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isCartOpen, isSearchOpen]);

    // Логика для цвета фона header
    const getHeaderBgClass = () => {
        if (isContactPage) {
            return scrolled ? "bg-white shadow-md" : "bg-transparent";
        }
        if (isProductPage) {
            return scrolled ? "bg-black shadow-md" : "bg-transparent";
        }
        if (isSearchPage || isWishlistPage) {
            return scrolled ? "bg-white shadow-md" : "bg-transparent";
        }
        return scrolled ? "bg-black shadow-md" : "bg-transparent";
    };

    // Логика для цвета текста и иконок
    const getTextColorClass = () => {
        if (isContactPage || isSearchPage || isWishlistPage) {
            return "text-black hover:text-[#aea062]";
        }
        if (scrolled) {
            return "text-white hover:text-[#aea062]";
        }
        if (isProductPage) {
            return "text-black hover:text-[#aea062]";
        }
        return "text-white hover:text-[#aea062]";
    };

    // Логика для логотипа
    const getLogoSrc = () => {
        if (isContactPage || isSearchPage || isWishlistPage) {
            return "/logo2.svg";
        }
        if (isProductPage) {
            return scrolled ? "/logo.svg" : "/logo2.svg";
        }
        if (isCartPage) {
            return scrolled ? "/logo.svg" : "/logo.svg";
        }
        return scrolled ? "/logo.svg" : "/logo.svg";
    };

    // Функция для цвета подписи под логотипом
    // Функция для цвета подписи под логотипом (только чёрный или белый)
    const getSubtitleClass = () => {
        // Страницы, где фон при скролле становится белым (контакты, поиск, избранное)
        if (isContactPage || isSearchPage || isWishlistPage) {
            return "text-black"; // всегда чёрный (на белом фоне и на прозрачном тоже)
        }
        // Для страниц товара: при скролле фон чёрный → подпись белая, иначе чёрная (на прозрачном фоне)
        if (isProductPage) {
            return scrolled ? "text-white" : "text-black";
        }
        // Для остальных страниц (главная, категории): при скролле фон чёрный → белая, иначе белая (на прозрачном фоне)
        return scrolled ? "text-white" : "text-white";
    };

    // Основные категории для отображения
    const mainCategories = [
        { id: "foosball", name: "Настольный футбол", count: 9, slug: "foosball-tables" },
        { id: "pool", name: "Бильярд", count: 6, slug: "pool-tables" },
        { id: "tennis", name: "Настольный теннис", count: 2, slug: "table-tennis" },
        { id: "scacco", name: "Шахматы", count: 3, slug: "scacco" },
        { id: "fitness", name: "Фитнес", count: 2, slug: "fitness" },
        { id: "timepieces", name: "Часы", count: 2, slug: "timepieces" },
        { id: "atipica", name: "Гуальтеро", count: 1, slug: "atipica" },
        { id: "foosball-accessories", name: "Аксессуары для футбола", count: 3, slug: "foosball-accessories" },
        { id: "pool-accessories", name: "Аксессуары для бильярда", count: 3, slug: "pool-tables-accessories" }
    ];

    // Группировка категорий для мобильного отображения
    const mobileCategories = [
        {
            title: "Основные категории",
            categories: mainCategories.slice(0, 7)
        },
        {
            title: "Аксессуары",
            categories: mainCategories.slice(7)
        }
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50">
                {/* Верхняя панель */}
                <div
                    className={`hidden md:block bg-[rgb(255,128,0)]/60 text-white text-xs transition-all duration-300 overflow-hidden ${
                        scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
                    }`}
                    style={{height: scrolled ? 0 : '30px'}}
                >
                    <div className="container mx-auto px-6 py-2 flex items-center justify-between">
                        ОФИЦИАЛЬНЫЙ ПРЕДСТАВИТЕЛЬ В РОССИИ И СНГ


                        <div className="flex items-center gap-6">
                            {/* Контактные телефоны */}
                            <div className="flex items-center gap-4">
                                <a href="tel:+74995530227"
                                   className="hover:text-white/80 transition-colors flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M22 16.92v3a1.999 1.999 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                    </svg>
                                    +7 (499) 55-30-227
                                </a>


                            </div>

                            {/* WhatsApp и Telegram */}
                            <div className="flex items-center gap-2">
                                <a href="https://wa.me/79932609855" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-white/80 transition-colors" title="WhatsApp">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.123 1.522 5.854L.052 23.39l5.688-1.466A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.638-.5-5.172-1.44l-.37-.22-3.478.9.924-3.303-.24-.38A9.934 9.934 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
                                    </svg>
                                </a>

                                <a href="https://t.me/79932609855" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-white/80 transition-colors" title="Telegram">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.479.26-.379 0-.313-.147-.442-.519l-1.072-3.526-3.104-.964c-.67-.208-.683-.67.138-.993l12.093-4.661c.558-.21.924.067.764.991z"/>
                                    </svg>
                                </a>
                            </div>

                            {/* Email */}
                            <a href="mailto:info@unoquadro.ru"
                               className="hover:text-white/80 transition-colors flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                info@unoquadro.ru
                            </a>

                            <span className="text-white/50">|</span>

                            <Link href="/contact-us" className="hover:text-white/80 transition-colors">
                                Связаться с нами
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Основной header */}
                <div
                    className={`transition-all duration-300 ${getHeaderBgClass()}`}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between h-16 md:h-16">
                            {/* Меню */}
                            <button
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setActiveMobileCategory(null);
                                }}
                                className={`flex items-center gap-2 transition-colors ${getTextColorClass()}`}
                                aria-label="Меню"
                            >
                                {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                                <span className="text-xs font-semibold tracking-wider hidden md:inline">
                    МЕНЮ
                </span>
                            </button>

                            {/* Логотип с подписью */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Image
                                        src={getLogoSrc()}
                                        alt="Teckell"
                                        width={120}
                                        height={40}
                                        className="w-auto h-8 md:h-10"
                                        priority
                                    />
                                </Link>
                                <span
                                    suppressHydrationWarning
                                    className={`text-[10px] md:text-xs ${getSubtitleClass()} tracking-wider mt-0.5 md:mt-1 whitespace-nowrap`}
                                >
                                    Классические игры класса люкс из Италии
                                </span>
                            </div>

                            {/* Иконки */}
                            <div className="flex items-center gap-3 md:gap-4">
                                {/* Кнопка поиска */}
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className={`hidden md:flex transition-colors ${getTextColorClass()}`}
                                    aria-label="Поиск"
                                >
                                    <Search size={20}/>
                                </button>

                                <Link
                                    href="/wishlist"
                                    className={`flex items-center gap-1 transition-colors relative ${getTextColorClass()}`}
                                    aria-label="Избранное"
                                >
                                    <Heart
                                        size={20}
                                        className={wishlistCount > 0 ? "fill-[#aea062] text-[#aea062]" : ""}
                                    />
                                    <span className="text-xs hidden md:inline">{wishlistCount}</span>
                                    {wishlistCount > 0 && (
                                        <span
                                            className="absolute -top-2 -right-2 md:hidden bg-[#c9b037] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlistCount}
                        </span>
                                    )}
                                </Link>
                                {/* Кнопка корзины */}
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className={`flex items-center gap-1 transition-colors relative ${getTextColorClass()}`}
                                    aria-label="Корзина"
                                >
                                    <ShoppingCart size={20}/>
                                    <span className="text-xs hidden md:inline">{cartCount}</span>
                                    {cartCount > 0 && (
                                        <span
                                            className="absolute -top-2 -right-2 md:hidden bg-[#c9b037] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Меню для мобильных и десктопов */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-x-0 bottom-0 bg-white z-40 overflow-y-auto shadow-xl"
                        style={{
                            top: scrolled ? '64px' : '104px',
                        }}
                    >
                        <nav className="h-full overflow-y-auto">
                            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
                                {/* Десктопная версия */}
                                <div className="hidden md:grid md:grid-cols-3 gap-8">
                                    {/* Первая колонка */}
                                    <div>
                                        <h3 className="text-lg font-serif mb-4 text-[#3c3937] border-b border-gray-200 pb-2">
                                            КАТЕГОРИИ
                                        </h3>
                                        <ul className="space-y-3">
                                            {mainCategories.slice(0, 4).map((category) => (
                                                <li key={category.id}>
                                                    <Link
                                                        href={`/category/${category.slug}`}
                                                        className="flex items-center justify-between text-[#3c3937] hover:text-[#aea062] transition-colors text-sm group"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span>{category.name}</span>
                                                        <span
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Вторая колонка */}
                                    <div>
                                        <h3 className="text-lg font-serif mb-4 text-[#3c3937] border-b border-gray-200 pb-2 opacity-0">
                                            &nbsp;
                                        </h3>
                                        <ul className="space-y-3">
                                            {mainCategories.slice(4, 7).map((category) => (
                                                <li key={category.id}>
                                                    <Link
                                                        href={`/category/${category.slug}`}
                                                        className="flex items-center justify-between text-[#3c3937] hover:text-[#aea062] transition-colors text-sm group"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span>{category.name}</span>
                                                        <span
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Третья колонка */}
                                    <div>
                                        <h3 className="text-lg font-serif mb-4 text-[#3c3937] border-b border-gray-200 pb-2">
                                            АКСЕССУАРЫ
                                        </h3>
                                        <ul className="space-y-3">
                                            {mainCategories.slice(7).map((category) => (
                                                <li key={category.id}>
                                                    <Link
                                                        href={`/category/${category.slug}`}
                                                        className="flex items-center justify-between text-[#3c3937] hover:text-[#aea062] transition-colors text-sm group"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span>{category.name}</span>
                                                        <span
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <Link
                                                href="/categories"
                                                className="text-[#aea062] hover:text-[#3c3937] transition-colors text-sm font-semibold flex items-center gap-1"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Все категории
                                                <ChevronRight size={16}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Мобильная версия */}
                                <div className="md:hidden space-y-4">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-[#aea062] transition-colors"
                                        aria-label="Закрыть меню"
                                    >
                                        <X size={24}/>
                                    </button>

                                    <div className="mb-6">
                                        <div
                                            className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                            <input
                                                type="text"
                                                placeholder="Поиск товаров..."
                                                className="flex-1 px-4 py-3 text-sm outline-none"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsSearchOpen(true);
                                                }}
                                            />
                                            <button
                                                className="px-4 py-3 bg-gray-50 text-gray-600 hover:text-[#aea062] transition-colors"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsSearchOpen(true);
                                                }}
                                            >
                                                <Search size={18}/>
                                            </button>
                                        </div>
                                    </div>

                                    {mobileCategories.map((group, idx) => (
                                        <div key={idx} className="mb-6">
                                            <h3 className="text-sm font-semibold text-gray-500 mb-3 px-2">
                                                {group.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {group.categories.map((category) => (
                                                    <Link
                                                        key={category.id}
                                                        href={`/category/${category.slug}`}
                                                        className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#aea062] hover:text-white transition-colors"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span className="text-sm font-medium">{category.name}</span>
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full">
                                                                {category.count}
                                                            </span>
                                                            <ChevronRight size={16} className="text-gray-400"/>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-500 mb-4 px-2">ПОПУЛЯРНЫЕ
                                            ТОВАРЫ</h4>
                                        <div className="space-y-3">
                                            {getProductsByCategory("foosball-tables").slice(0, 4).map((product) => (
                                                <Link
                                                    key={product.id}
                                                    href={`/product/${product.id}`}
                                                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <div
                                                        className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                        {product.image && (
                                                            <Image
                                                                src={product.image}
                                                                alt={product.name}
                                                                fill
                                                                className="object-contain p-2"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-[#3c3937] line-clamp-2">
                                                            {product.name}
                                                        </p>
                                                        <p className="text-xs text-[#aea062] mt-1">
                                                            €{product.price.toLocaleString()}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href="/wishlist"
                                                className="text-center px-4 py-3 bg-gray-50 rounded-lg text-sm text-[#3c3937] hover:bg-[#aea062] hover:text-white transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Избранное ({wishlistCount})
                                            </Link>
                                            <Link
                                                href="/cart"
                                                className="text-center px-4 py-3 bg-gray-50 rounded-lg text-sm text-[#3c3937] hover:bg-[#aea062] hover:text-white transition-colors"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsCartOpen(true);
                                                }}
                                            >
                                                Корзина ({cartCount})
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Нижняя панель для десктопа */}
                                <div className="hidden md:block mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-500 mb-4">ПОПУЛЯРНЫЕ ТОВАРЫ</h4>
                                    <div className="grid grid-cols-4 gap-4">
                                        {getProductsByCategory("foosball-tables").slice(0, 4).map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/product/${product.id}`}
                                                className="flex items-center gap-3 text-sm text-[#3c3937] hover:text-[#aea062] transition-colors group"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <div
                                                    className="relative w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                                                    {product.image && (
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            fill
                                                            className="object-contain p-1"
                                                        />
                                                    )}
                                                </div>
                                                <span className="line-clamp-2 flex-1">{product.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            <CartWidget
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
}