"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Heart, Search, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { CartWidget } from "@/components/CartWidget";
import { categories, getProductsByCategory } from "@/data/categories";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
    const pathname = usePathname();
    const { items } = useCart();

    const itemCount =
        items?.reduce((total, item) => total + item.quantity, 0) || 0;

    const isProductPage = pathname.startsWith("/product/");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Блокировка скролла body при открытом меню или виджете
    useEffect(() => {
        if (isMenuOpen || isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isCartOpen]);

    const isBlack = scrolled;

    // Высота верхней панели в зависимости от скролла
    const topBarHeight = scrolled ? 0 : 40; // 40px - высота верхней панели

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
                {/* Верхняя панель - динамическая высота */}
                <div
                    className={`hidden md:block bg-[rgb(207,181,59)]/50 text-white text-xs transition-all duration-300 overflow-hidden ${
                        scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
                    }`}
                    style={{ height: scrolled ? 0 : '40px' }}
                >
                    <div className="container mx-auto px-6 py-2 flex items-center justify-between">
                        <Link href="https://www.teckell.com" className="hover:text-white/80 transition-colors">
                            ПЕРЕЙТИ НА ОФИЦИАЛЬНЫЙ САЙТ TECKELL
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:text-white/80 transition-colors">Подписка на новости</Link>
                            <Link href="#" className="hover:text-white/80 transition-colors">Связаться с нами</Link>
                        </div>
                    </div>
                </div>

                {/* Основной header */}
                <div
                    className={`transition-colors duration-300 ${
                        isBlack ? "bg-black" : isProductPage ? "bg-white" : "bg-transparent"
                    }`}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between h-16 md:h-16">
                            {/* Меню */}
                            <button
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setActiveMobileCategory(null);
                                }}
                                className={`flex items-center gap-2 transition-colors ${
                                    isBlack
                                        ? "text-white hover:text-[#aea062]"
                                        : isProductPage
                                            ? "text-black hover:text-[#aea062]"
                                            : "text-white hover:text-[#aea062]"
                                }`}
                                aria-label="Меню"
                            >
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                <span className="text-xs font-semibold tracking-wider hidden md:inline">
                                    МЕНЮ
                                </span>
                            </button>

                            {/* Логотип */}
                            <Link
                                href="/"
                                className="absolute left-1/2 transform -translate-x-1/2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Image
                                    src={isBlack ? "/logo1.svg" : isProductPage ? "/logo.svg" : "/logo1.svg"}
                                    alt="Teckell"
                                    width={120}
                                    height={40}
                                    className="w-auto h-8 md:h-10"
                                    priority
                                />
                            </Link>

                            {/* Иконки */}
                            <div className="flex items-center gap-3 md:gap-4">
                                <button
                                    className={`hidden md:flex transition-colors ${
                                        isBlack
                                            ? "text-white hover:text-[#aea062]"
                                            : isProductPage
                                                ? "text-black hover:text-[#aea062]"
                                                : "text-white hover:text-[#aea062]"
                                    }`}
                                    aria-label="Поиск"
                                >
                                    <Search size={20} />
                                </button>

                                <Link
                                    href="#"
                                    className={`flex items-center gap-1 transition-colors ${
                                        isBlack
                                            ? "text-white hover:text-[#aea062]"
                                            : isProductPage
                                                ? "text-black hover:text-[#aea062]"
                                                : "text-white hover:text-[#aea062]"
                                    }`}
                                    aria-label="Избранное"
                                >
                                    <Heart size={20} />
                                    <span className="text-xs hidden md:inline">0</span>
                                </Link>

                                {/* Кнопка корзины - открывает виджет */}
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className={`flex items-center gap-1 transition-colors relative ${
                                        isBlack
                                            ? "text-white hover:text-[#aea062]"
                                            : isProductPage
                                                ? "text-black hover:text-[#aea062]"
                                                : "text-white hover:text-[#aea062]"
                                    }`}
                                    aria-label="Корзина"
                                >
                                    <ShoppingCart size={20} />
                                    <span className="text-xs hidden md:inline">{itemCount}</span>
                                    {/* Бейдж для мобильных */}
                                    {itemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 md:hidden bg-[#c9b037] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {itemCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Меню для мобильных и десктопов - с динамическим top */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-x-0 bottom-0 bg-white z-40 overflow-y-auto"
                        style={{
                            top: scrolled ? '64px' : '104px', // 64px (header) или 64px + 40px (header + top bar)
                        }}
                    >
                        <nav className="h-full overflow-y-auto">
                            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
                                {/* Десктопная версия (3 колонки) */}
                                <div className="hidden md:grid md:grid-cols-3 gap-8">
                                    {/* Первая колонка - основные категории */}
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
                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Вторая колонка - следующие категории */}
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
                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Третья колонка - аксессуары */}
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
                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-[#aea062] group-hover:text-white transition-colors">
                                                            {category.count}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Дополнительная ссылка на все категории */}
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <Link
                                                href="/categories"
                                                className="text-[#aea062] hover:text-[#3c3937] transition-colors text-sm font-semibold flex items-center gap-1"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Все категории
                                                <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Мобильная версия (аккордеон) */}
                                <div className="md:hidden space-y-4">
                                    {/* Кнопка закрытия для мобильных */}
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-[#aea062] transition-colors"
                                        aria-label="Закрыть меню"
                                    >
                                        <X size={24} />
                                    </button>

                                    {/* Поиск для мобильных */}
                                    <div className="mb-6">
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                            <input
                                                type="text"
                                                placeholder="Поиск товаров..."
                                                className="flex-1 px-4 py-3 text-sm outline-none"
                                            />
                                            <button className="px-4 py-3 bg-gray-50 text-gray-600 hover:text-[#aea062] transition-colors">
                                                <Search size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Категории для мобильных */}
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
                                                            <span className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full">
                                                                {category.count}
                                                            </span>
                                                            <ChevronRight size={16} className="text-gray-400" />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Популярные товары для мобильных */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-500 mb-4 px-2">ПОПУЛЯРНЫЕ ТОВАРЫ</h4>
                                        <div className="space-y-3">
                                            {getProductsByCategory("foosball-tables").slice(0, 4).map((product) => (
                                                <Link
                                                    key={product.id}
                                                    href={`/product/${product.id}`}
                                                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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
                                                            {product.price.toLocaleString()} €
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Ссылки на страницы */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href="#"
                                                className="text-center px-4 py-3 bg-gray-50 rounded-lg text-sm text-[#3c3937] hover:bg-[#aea062] hover:text-white transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Избранное
                                            </Link>
                                            <Link
                                                href="/cart"
                                                className="text-center px-4 py-3 bg-gray-50 rounded-lg text-sm text-[#3c3937] hover:bg-[#aea062] hover:text-white transition-colors"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsCartOpen(true);
                                                }}
                                            >
                                                Корзина
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Нижняя панель с популярными товарами (только для десктопа) */}
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
                                                <div className="relative w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 group-hover:bg-gray-100 transition-colors">
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

            {/* Виджет корзины */}
            <CartWidget
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    );
}