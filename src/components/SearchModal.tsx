// components/SearchModal.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { allProducts, Product } from "@/data/categories";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [popularProducts] = useState<Product[]>(
        allProducts.slice(0, 6) // Топ-6 популярных товаров
    );
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Фокус на инпут при открытии
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    // Закрытие по Escape и клику вне модалки
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Поиск товаров
    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            return;
        }

        const searchQuery = query.toLowerCase().trim();
        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.nameEn?.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery) ||
            product.shortDescription?.toLowerCase().includes(searchQuery)
        ).slice(0, 8); // Максимум 8 результатов

        setResults(filtered);
    }, [query]);

    // Добавление поиска в историю
    const addToRecentSearches = (searchQuery: string) => {
        if (!searchQuery.trim()) return;

        setRecentSearches(prev => {
            const filtered = prev.filter(s => s !== searchQuery);
            const updated = [searchQuery, ...filtered].slice(0, 5);
            localStorage.setItem("recentSearches", JSON.stringify(updated));
            return updated;
        });
    };

    // Загрузка истории поиска при монтировании
    useEffect(() => {
        const saved = localStorage.getItem("recentSearches");
        if (saved) {
            try {
                setRecentSearches(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load recent searches", e);
            }
        }
    }, []);

    // Очистка истории
    const clearRecentSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem("recentSearches");
    };

    // Обработчик отправки формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            addToRecentSearches(query.trim());
            // Здесь можно редиректить на страницу результатов поиска
            // router.push(`/search?q=${encodeURIComponent(query)}`);
            // onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity">
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6 md:p-20">
                <div
                    ref={modalRef}
                    className="w-full max-w-3xl transform overflow-hidden rounded-sm bg-white shadow-2xl transition-all"
                >
                    {/* Заголовок и форма поиска */}
                    <div className="border-b border-[#e5e5e5] p-6">
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Поиск товаров..."
                                className="w-full border-0 border-b-2 border-[#e5e5e5] px-0 py-3 pr-20 text-lg focus:border-[#aea062] focus:ring-0 outline-none transition-colors placeholder:text-[#a09d98]"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="p-2 text-[#6e6b67] hover:text-[#3c3937] transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="p-2 text-[#6e6b67] hover:text-[#aea062] transition-colors"
                                >
                                    <Search size={20} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Результаты поиска или подсказки */}
                    <div className="max-h-[60vh] overflow-y-auto p-6">
                        {results.length > 0 ? (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs uppercase tracking-[3px] text-[#aea062] font-semibold">
                                        РЕЗУЛЬТАТЫ ПОИСКА ({results.length})
                                    </h3>
                                    {query && (
                                        <Link
                                            href={`/search?q=${encodeURIComponent(query)}`}
                                            onClick={() => {
                                                addToRecentSearches(query);
                                                onClose();
                                            }}
                                            className="text-xs text-[#6e6b67] hover:text-[#3c3937] flex items-center gap-1 transition-colors"
                                        >
                                            Все результаты
                                            <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {results.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.id}`}
                                            onClick={() => {
                                                addToRecentSearches(product.name);
                                                onClose();
                                            }}
                                            className="flex items-start gap-4 p-3 hover:bg-[#f9f9f9] rounded-lg transition-colors group"
                                        >
                                            <div className="relative w-16 h-16 bg-[#f5f5f5] rounded-lg overflow-hidden flex-shrink-0">
                                                {product.image && (
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-[#3c3937] group-hover:text-[#aea062] transition-colors line-clamp-2">
                                                    {product.name}
                                                </h4>
                                                <p className="text-xs text-[#6e6b67] mt-1 line-clamp-1">
                                                    {product.category}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-sm font-semibold text-[#3c3937]">
                                                        €{product.price.toLocaleString()}
                                                    </span>
                                                    {product.priceSuffix && (
                                                        <span className="text-[10px] text-[#6e6b67] uppercase tracking-wider">
                                                            {product.priceSuffix}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {product.isReadyToShip && (
                                                <span className="text-[10px] uppercase tracking-wider bg-[#c5b151] text-white px-2 py-1 rounded-sm flex-shrink-0">
                                                    Готов к отправке
                                                </span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : query.length >= 2 ? (
                            <div className="text-center py-12">
                                <p className="text-[#6e6b67] mb-2">По запросу &quot;{query}&quot; ничего не найдено</p>
                                <p className="text-sm text-[#a09d98]">Попробуйте изменить запрос или посмотрите популярные товары ниже</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {/* История поиска */}
                                {recentSearches.length > 0 && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xs uppercase tracking-[3px] text-[#aea062] font-semibold flex items-center gap-2">
                                                <Clock size={14} />
                                                НЕДАВНИЕ ЗАПРОСЫ
                                            </h3>
                                            <button
                                                onClick={clearRecentSearches}
                                                className="text-xs text-[#6e6b67] hover:text-[#3c3937] transition-colors"
                                            >
                                                Очистить
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {recentSearches.map((search, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setQuery(search)}
                                                    className="px-4 py-2 bg-[#f5f5f5] text-sm text-[#3c3937] hover:bg-[#aea062] hover:text-white rounded-full transition-colors"
                                                >
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Популярные товары */}
                                <div className="space-y-4">
                                    <h3 className="text-xs uppercase tracking-[3px] text-[#aea062] font-semibold flex items-center gap-2">
                                        <TrendingUp size={14} />
                                        ПОПУЛЯРНЫЕ ТОВАРЫ
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {popularProducts.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/product/${product.id}`}
                                                onClick={onClose}
                                                className="group text-center"
                                            >
                                                <div className="relative aspect-square bg-[#f5f5f5] rounded-lg overflow-hidden mb-2">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <p className="text-xs font-medium text-[#3c3937] group-hover:text-[#aea062] transition-colors line-clamp-2">
                                                    {product.name}
                                                </p>
                                                <p className="text-xs text-[#aea062] mt-1">
                                                    €{product.price.toLocaleString()}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Категории */}
                                <div className="space-y-4">
                                    <h3 className="text-xs uppercase tracking-[3px] text-[#aea062] font-semibold">
                                        КАТЕГОРИИ
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { name: "Настольный футбол", slug: "foosball-tables" },
                                            { name: "Бильярд", slug: "pool-tables" },
                                            { name: "Настольный теннис", slug: "table-tennis" },
                                            { name: "Шахматы", slug: "scacco" },
                                            { name: "Фитнес", slug: "fitness" },
                                            { name: "Часы", slug: "timepieces" },
                                        ].map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                href={`/category/${cat.slug}`}
                                                onClick={onClose}
                                                className="text-sm text-[#6e6b67] hover:text-[#aea062] py-2 px-3 bg-[#f5f5f5] rounded-lg transition-colors text-center"
                                            >
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Нижняя панель */}
                    <div className="border-t border-[#e5e5e5] p-4 bg-[#f9f9f9]">
                        <p className="text-xs text-[#6e6b67] text-center">
                            Нажмите Enter для поиска или ESC для закрытия
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}