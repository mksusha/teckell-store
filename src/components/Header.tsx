"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Heart, Search, Store } from "lucide-react";
import Image from "next/image";
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/20">
            {/* Верхняя панель - видна на десктопе */}
            <div className="hidden md:block bg-[#3c3937] text-white text-xs">
                <div className="container mx-auto px-6 py-2 flex items-center justify-between">
                    <Link
                        href="https://www.teckell.com"
                        className="hover:text-[#aea062] transition-colors flex items-center gap-2"
                    >
                        ПЕРЕЙТИ НА ОФИЦИАЛЬНЫЙ САЙТ TECKELL
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-[#aea062]">Подписка на новости</Link>
                        <Link href="#" className="hover:text-[#aea062]">Связаться с нами</Link>
                    </div>
                </div>
            </div>

            {/* Основной заголовок */}
            <div className="bg-transparent backdrop-blur-sm shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-18">
                        {/* Кнопка меню */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center gap-2 text-[#3c3937] hover:text-[#aea062] transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            <span className="text-xs font-semibold tracking-wider hidden md:inline">МЕНЮ</span>
                        </button>

                        {/* Логотип */}

                        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                            <Image
                                src="/logo.svg"
                                alt="Teckell"
                                width={120}
                                height={40}
                                className="w-auto h-8 md:h-10"
                                priority
                            />
                        </Link>
                        {/* Иконки справа */}
                        <div className="flex items-center gap-4">
                            <button className="hidden md:flex text-[#3c3937] hover:text-[#aea062] transition-colors">
                                <Search size={20} />
                            </button>
                            <Link href="#" className="flex items-center gap-1 text-[#3c3937] hover:text-[#aea062] transition-colors">
                                <Heart size={20} />
                                <span className="text-xs hidden md:inline">0</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-1 text-[#3c3937] hover:text-[#aea062] transition-colors">
                                <ShoppingCart size={20} />
                                <span className="text-xs hidden md:inline">0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Меню для мобильных и десктопов */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[64px] md:top-[100px] bg-white z-40 overflow-y-auto">
                    <nav className="container mx-auto px-6 py-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="section-title mb-4">Настольный футбол</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Cristallino для PIRELLI</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Cristallino Classic</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Cristallino Black</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">90 Minuto Classic</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="section-title mb-4">Бильярдные столы</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">T 1.1 Black</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">T 1.3 Wood</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">T 1.3 Alcantara</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="section-title mb-4">Другие коллекции</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Настольный теннис</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Шахматы</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Фитнес</Link></li>
                                    <li><Link href="#" className="text-[#3c3937] hover:text-[#aea062] transition-colors">Часы</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
