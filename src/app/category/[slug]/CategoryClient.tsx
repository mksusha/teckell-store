"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, SlidersHorizontal, Grid3x3, List, LayoutGrid, Search, X } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Product, Category, formatPrice, getNumericPrice } from "@/data/categories";

interface CategoryClientProps {
    categorySlug: string;
    initialProducts: Product[];
    categoryName: string;
    productCount: number;
    minPrice: number;
    maxPrice: number;
    categories: Category[];
    category: Category;
}

// Интерфейс для категории с возможными дочерними элементами
interface CategoryWithChildren extends Category {
    children?: CategoryWithChildren[];
}

export default function CategoryClient({
                                           categorySlug,
                                           initialProducts,
                                           categoryName,
                                           productCount,
                                           minPrice = 0,
                                           maxPrice = 100000,
                                           categories,
                                           category
                                       }: CategoryClientProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categorySlug);

    // ============ ПОИСК ============
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    // ============ ФИЛЬТР ПО ЦЕНЕ ============
    const [priceRange, setPriceRange] = useState({
        min: minPrice || 0,
        max: maxPrice || 100000
    });

    // Примененный фильтр по цене (чтобы применять только по кнопке)
    const [appliedPriceRange, setAppliedPriceRange] = useState({
        min: minPrice || 0,
        max: maxPrice || 100000
    });

    const [viewMode, setViewMode] = useState<"grid3" | "grid4" | "list">("grid3");
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [sortBy, setSortBy] = useState("menu_order");
    const [currentPage, setCurrentPage] = useState(1);

    // Безопасные значения
    const safeMinPrice = useMemo(() => minPrice || 0, [minPrice]);
    const safeMaxPrice = useMemo(() => maxPrice || 100000, [maxPrice]);

    // ============ ФИЛЬТРАЦИЯ ============

    // 1. Фильтрация по поиску
    const filteredBySearch = useMemo(() => {
        if (!searchQuery.trim()) return initialProducts;

        const query = searchQuery.toLowerCase().trim();
        return initialProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            (product.description && product.description.toLowerCase().includes(query))
        );
    }, [initialProducts, searchQuery]);

    // 2. Фильтрация по цене
    const filteredByPrice = useMemo(() => {
        return filteredBySearch.filter(product => {
            const price = getNumericPrice(product.price);
            return price >= appliedPriceRange.min && price <= appliedPriceRange.max;
        });
    }, [filteredBySearch, appliedPriceRange]);

    // 3. Сортировка
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredByPrice];
        switch (sortBy) {
            case "price":
                return sorted.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
            case "price-desc":
                return sorted.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
            default:
                return sorted;
        }
    }, [filteredByPrice, sortBy]);

    // 4. Пагинация
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return sortedProducts.slice(start, end);
    }, [sortedProducts, currentPage, itemsPerPage]);

    // Сброс страницы при изменении фильтров
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, appliedPriceRange, sortBy, itemsPerPage]);

    // Проценты для ползунков
    const leftPercent = useMemo(() => {
        if (safeMaxPrice === safeMinPrice) return 0;
        return ((priceRange.min - safeMinPrice) / (safeMaxPrice - safeMinPrice)) * 100;
    }, [priceRange.min, safeMinPrice, safeMaxPrice]);

    const rightPercent = useMemo(() => {
        if (safeMaxPrice === safeMinPrice) return 100;
        return ((priceRange.max - safeMinPrice) / (safeMaxPrice - safeMinPrice)) * 100;
    }, [priceRange.max, safeMinPrice, safeMaxPrice]);

    // Обработчики
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
    };

    const clearSearch = () => {
        setSearchQuery("");
        setIsSearching(false);
    };

    // Применение фильтра по цене
    const applyPriceFilter = () => {
        setAppliedPriceRange({
            min: priceRange.min,
            max: priceRange.max
        });
    };

    // Сброс фильтра по цене
    const resetPriceFilter = () => {
        setPriceRange({
            min: safeMinPrice,
            max: safeMaxPrice
        });
        setAppliedPriceRange({
            min: safeMinPrice,
            max: safeMaxPrice
        });
    };

    // Обработчик для ползунка min
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), priceRange.max - 1);
        setPriceRange(prev => ({
            ...prev,
            min: value
        }));
    };

    // Обработчик для ползунка max
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), priceRange.min + 1);
        setPriceRange(prev => ({
            ...prev,
            max: value
        }));
    };

    // Пагинация
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Рендер номеров страниц
    const renderPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
                        currentPage === i
                            ? "bg-[#aea062] text-white"
                            : "border border-[#e5e5e5] text-[#6e6b67] hover:border-[#aea062] hover:text-[#aea062]"
                    }`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    // Получение количества продуктов для категории
    const getCategoryProductCount = (cat: Category): number => {
        // Пытаемся получить productCount, если нет - используем count, если и его нет - 0
        return (cat as any).productCount || (cat as any).count || 0;
    };

    // Проверка наличия дочерних категорий
    const hasChildren = (cat: Category): cat is Category & { children: Category[] } => {
        return 'children' in cat && Array.isArray((cat as any).children) && (cat as any).children.length > 0;
    };

    return (
        <>
            {/* Верхняя панель с навигацией по категориям и сортировкой */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#e5e5e5]">
                {/* Навигация по категориям */}
                <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/category/${cat.slug}`}
                            className={`text-sm uppercase tracking-[2px] font-semibold whitespace-nowrap pb-2 transition-colors ${
                                categorySlug === cat.slug
                                    ? "text-[#aea062] border-b-2 border-[#aea062]"
                                    : "text-[#6e6b67] hover:text-[#3c3937]"
                            }`}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                {/* Сортировка и вид */}
                <div className="flex items-center gap-6">
                    {/* Количество на странице */}
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-xs text-[#6e6b67] uppercase tracking-[1px]">Показывать:</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className="text-xs bg-transparent border-none focus:ring-0 text-[#3c3937] font-medium uppercase tracking-[1px] outline-none"
                        >
                            <option value="9">9</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                            <option value="24">24</option>
                        </select>
                    </div>

                    {/* Вид сетки */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => setViewMode("grid3")}
                            className={`p-1.5 transition-colors ${
                                viewMode === "grid3"
                                    ? "text-[#aea062] border border-[#aea062] rounded-sm"
                                    : "text-[#6e6b67] hover:text-[#3c3937]"
                            }`}
                        >
                            <LayoutGrid size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode("grid4")}
                            className={`p-1.5 transition-colors ${
                                viewMode === "grid4"
                                    ? "text-[#aea062] border border-[#aea062] rounded-sm"
                                    : "text-[#6e6b67] hover:text-[#3c3937]"
                            }`}
                        >
                            <Grid3x3 size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-1.5 transition-colors ${
                                viewMode === "list"
                                    ? "text-[#aea062] border border-[#aea062] rounded-sm"
                                    : "text-[#6e6b67] hover:text-[#3c3937]"
                            }`}
                        >
                            <List size={16} />
                        </button>
                    </div>

                    {/* Сортировка */}
                    <div className="flex items-center gap-2">
                        <span className="hidden md:block text-xs text-[#6e6b67] uppercase tracking-[1px]">Сортировка:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="text-xs bg-transparent border-none focus:ring-0 text-[#3c3937] font-medium uppercase tracking-[1px] pr-6 outline-none"
                        >
                            <option value="menu_order">По умолчанию</option>
                            <option value="price">Цена: по возрастанию</option>
                            <option value="price-desc">Цена: по убыванию</option>
                        </select>
                    </div>

                    {/* Кнопка фильтра для мобильных */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="md:hidden flex items-center gap-2 text-[#3c3937] border border-[#e5e5e5] px-4 py-2 rounded-sm"
                    >
                        <SlidersHorizontal size={16} />
                        <span className="text-xs uppercase tracking-[1px]">Фильтр</span>
                    </button>
                </div>
            </div>

            {/* Основная сетка: Сайдбар + Товары */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Сайдбар с фильтрами */}
                <aside className="hidden lg:block w-1/4">
                    <div className="sticky top-[120px] space-y-8">
                        {/* ПОИСК */}
                        <div>
                            <h3 className="text-[11px] uppercase tracking-[3px] text-[#aea062] font-semibold mb-4">
                                ПОИСК
                            </h3>
                            <form onSubmit={handleSearch} className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Поиск товаров..."
                                    className="w-full border border-[#e5e5e5] px-4 py-3 text-sm focus:border-[#aea062] outline-none transition-colors pr-20"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={clearSearch}
                                            className="p-1 text-[#6e6b67] hover:text-[#3c3937]"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="p-1 text-[#6e6b67] hover:text-[#aea062]"
                                    >
                                        <Search size={18} />
                                    </button>
                                </div>
                            </form>
                            {isSearching && searchQuery && (
                                <p className="text-xs text-[#aea062] mt-2">
                                    Найдено: {filteredBySearch.length} товаров
                                </p>
                            )}
                        </div>

                        {/* Фильтр по бренду */}
                        <div>
                            <h3 className="text-[11px] uppercase tracking-[3px] text-[#aea062] font-semibold mb-4">
                                БРЕНД
                            </h3>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 text-sm text-[#3c3937] hover:text-[#aea062] cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 border-[#e5e5e5] rounded-sm text-[#aea062] focus:ring-0 focus:ring-offset-0"
                                    />
                                    <span className="group-hover:text-[#aea062] transition-colors">Teckell</span>
                                    <span className="text-[#a09d98] text-xs ml-auto">({productCount})</span>
                                </label>
                            </div>
                        </div>

                        {/* Фильтр по цене */}
                        {safeMinPrice < safeMaxPrice && (
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-[11px] uppercase tracking-[3px] text-[#aea062] font-semibold">
                                        ЦЕНА
                                    </h3>
                                    {(appliedPriceRange.min !== safeMinPrice || appliedPriceRange.max !== safeMaxPrice) && (
                                        <button
                                            onClick={resetPriceFilter}
                                            className="text-xs text-[#6e6b67] hover:text-[#aea062] underline"
                                        >
                                            Сбросить
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {/* Текущие значения */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-[#3c3937]">
                                            €{formatPrice(priceRange.min)}
                                        </span>
                                        <span className="text-[#a09d98] text-xs">—</span>
                                        <span className="text-sm font-medium text-[#3c3937]">
                                            €{formatPrice(priceRange.max)}
                                        </span>
                                    </div>

                                    {/* Ползунки */}
                                    <div className="relative h-1 bg-[#e5e5e5] rounded-full mt-6">
                                        {/* Активный диапазон */}
                                        <div
                                            className="absolute h-1 bg-[#aea062] rounded-full"
                                            style={{
                                                left: `${Math.max(0, leftPercent)}%`,
                                                width: `${Math.min(100, rightPercent - leftPercent)}%`
                                            }}
                                        />

                                        {/* Ползунок минимума */}
                                        <input
                                            type="range"
                                            min={safeMinPrice}
                                            max={safeMaxPrice}
                                            value={priceRange.min}
                                            onChange={handleMinPriceChange}
                                            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#aea062] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:mt-[-6px] [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#aea062] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer"
                                        />

                                        {/* Ползунок максимума */}
                                        <input
                                            type="range"
                                            min={safeMinPrice}
                                            max={safeMaxPrice}
                                            value={priceRange.max}
                                            onChange={handleMaxPriceChange}
                                            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#aea062] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:mt-[-6px] [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#aea062] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer"
                                        />
                                    </div>

                                    {/* Применить фильтр */}
                                    <button
                                        onClick={applyPriceFilter}
                                        className="w-full bg-[#3c3937] text-white text-xs uppercase tracking-[2px] py-3 hover:bg-[#aea062] transition-colors"
                                    >
                                        Применить
                                    </button>

                                    {/* Индикация активного фильтра */}
                                    {(appliedPriceRange.min !== safeMinPrice || appliedPriceRange.max !== safeMaxPrice) && (
                                        <p className="text-xs text-[#aea062] text-center">
                                            Активный фильтр: €{formatPrice(appliedPriceRange.min)} - €{formatPrice(appliedPriceRange.max)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Фильтр по категориям - ИСПРАВЛЕНО */}
                        <div>
                            <h3 className="text-[11px] uppercase tracking-[3px] text-[#aea062] font-semibold mb-4">
                                КАТЕГОРИИ
                            </h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => {
                                    const catProductCount = getCategoryProductCount(cat);
                                    const isActive = cat.slug === categorySlug;

                                    return (
                                        <li key={cat.id}>
                                            <Link
                                                href={`/category/${cat.slug}`}
                                                className={`flex items-center justify-between text-sm transition-colors ${
                                                    isActive
                                                        ? "text-[#aea062] font-medium"
                                                        : "text-[#6e6b67] hover:text-[#3c3937]"
                                                }`}
                                            >
                                                {cat.name}
                                                <span className="text-[#a09d98] text-xs">{catProductCount}</span>
                                            </Link>

                                            {/* Подкатегории */}
                                            {hasChildren(cat) && isActive && (
                                                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-[#e5e5e5] pl-3">
                                                    {cat.children.map((sub) => {
                                                        const subProductCount = getCategoryProductCount(sub);
                                                        return (
                                                            <li key={sub.id}>
                                                                <Link
                                                                    href={`/category/${sub.slug}`}
                                                                    className="flex items-center justify-between text-xs text-[#6e6b67] hover:text-[#3c3937] transition-colors"
                                                                >
                                                                    {sub.name}
                                                                    <span className="text-[#a09d98] text-xs">{subProductCount}</span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Секция с товарами */}
                <div className="flex-1">
                    {/* Результаты */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-[#6e6b67]">
                            {isSearching && searchQuery ? (
                                <>По запросу &quot;{searchQuery}&quot; найдено </>
                            ) : (
                                <>Показаны </>
                            )}
                            <span className="font-medium text-[#3c3937]">{sortedProducts.length}</span> из{' '}
                            <span className="font-medium text-[#3c3937]">{initialProducts.length}</span> товаров
                        </p>
                        {(searchQuery || appliedPriceRange.min !== safeMinPrice || appliedPriceRange.max !== safeMaxPrice) && (
                            <button
                                onClick={() => {
                                    clearSearch();
                                    resetPriceFilter();
                                }}
                                className="text-xs text-[#aea062] hover:text-[#3c3937] uppercase tracking-[1px]"
                            >
                                Сбросить все фильтры
                            </button>
                        )}
                    </div>

                    {/* Сетка товаров */}
                    {sortedProducts.length > 0 ? (
                        <>
                            <div className={`
                                grid gap-6 md:gap-8
                                ${viewMode === "grid3" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
                                ${viewMode === "grid4" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : ""}
                                ${viewMode === "list" ? "grid-cols-1" : ""}
                            `}>
                                {paginatedProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>

                            {/* Пагинация */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-16">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 flex items-center justify-center border border-[#e5e5e5] transition-colors ${
                                            currentPage === 1
                                                ? "text-[#ccc] cursor-not-allowed"
                                                : "text-[#6e6b67] hover:border-[#aea062] hover:text-[#aea062]"
                                        }`}
                                    >
                                        <ChevronLeft size={16} />
                                    </button>

                                    {renderPageNumbers()}

                                    {currentPage < totalPages - 2 && (
                                        <>
                                            <span className="text-[#6e6b67]">...</span>
                                            <button
                                                onClick={() => goToPage(totalPages)}
                                                className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] text-[#6e6b67] hover:border-[#aea062] hover:text-[#aea062] transition-colors text-sm"
                                            >
                                                {totalPages}
                                            </button>
                                        </>
                                    )}

                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 flex items-center justify-center border border-[#e5e5e5] transition-colors ${
                                            currentPage === totalPages
                                                ? "text-[#ccc] cursor-not-allowed"
                                                : "text-[#6e6b67] hover:border-[#aea062] hover:text-[#aea062]"
                                        }`}
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16 bg-[#f9f9f9]">
                            <p className="text-[#6e6b67] mb-4">Товары не найдены</p>
                            <button
                                onClick={() => {
                                    clearSearch();
                                    resetPriceFilter();
                                }}
                                className="text-[#aea062] hover:text-[#3c3937] text-sm uppercase tracking-[2px]"
                            >
                                Сбросить все фильтры
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Мобильный сайдбар с фильтрами */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
                    <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-serif text-[#3c3937]">Фильтры</h2>
                            <button onClick={() => setIsFilterOpen(false)} className="text-[#6e6b67] hover:text-[#3c3937]">
                                ✕
                            </button>
                        </div>
                        {/* Здесь можно дублировать фильтры из десктопного сайдбара */}
                        <div className="space-y-6">
                            {/* Копия фильтров для мобильной версии */}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
}