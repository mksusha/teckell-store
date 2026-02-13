"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const instagramImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/4.jpg",
    "/images/8.webp",
];

export function Footer() {
    return (
        <footer className="bg-[#3c3937] text-white py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Логотип и контакты */}
                    <div>
                        <h2 className="text-4xl mb-8" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                            Teckell.<span className="text-sm align-top">®</span>
                        </h2>
                        <address className="not-italic text-sm text-gray-300 space-y-2">
                            <p>Via Marmolada 20, 21013 Gallarate VA, Италия</p>
                            <p>Телефон: (039) 0331 774445</p>
                            <p>Почта: concierge@teckell.store</p>
                            <p className="text-xs mt-4 opacity-60">НДС 02077150023 • SDI W7YVJK9</p>
                        </address>
                    </div>

                    {/* Социальные сети и ссылки */}
                    <div>
                        <h3 className="text-xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                            Веб-сайт и соцсети
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <Link href="#" className="hover:text-[#aea062] transition-colors flex items-center gap-2">
                                    Посетить корпоративный сайт
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#aea062] transition-colors flex items-center gap-2">
                                    <Instagram size={16} /> Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#aea062] transition-colors flex items-center gap-2">
                                    <Facebook size={16} /> Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#aea062] transition-colors flex items-center gap-2">
                                    <Youtube size={16} /> Youtube
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#aea062] transition-colors flex items-center gap-2">
                                    <Twitter size={16} /> Pinterest
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-lg mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                                Подпишитесь на новости официального магазина
                            </h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Ваш email"
                                    className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-[#aea062]"
                                />
                                <button className="bg-[#aea062] hover:bg-[#9a8c52] px-6 py-2 text-sm uppercase tracking-wider transition-colors">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Сетка Instagram */}
                    <div>
                        <div className="grid grid-cols-3 gap-1">
                            {instagramImages.map((img, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`Instagram ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Нижняя панель */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <Link href="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
                        <Link href="#" className="hover:text-white transition-colors">Политика использования cookies</Link>
                        <Link href="#" className="hover:text-white transition-colors">Условия использования</Link>
                    </div>
                    <p>ОФИЦИАЛЬНЫЙ МАГАЗИН TECKELL 2024 | Все права защищены.</p>
                </div>


            </div>
        </footer>
    );
}