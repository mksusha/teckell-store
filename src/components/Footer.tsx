"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";

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
                            UnoQuadro.<span className="text-sm align-top">®</span>
                        </h2>

                        {/* Русский адрес и контакты */}
                        <div className="space-y-4">
                            <address className="not-italic text-sm text-gray-300 space-y-3">
                                <p className="flex items-start gap-2">
                                    <MapPin size={16} className="flex-shrink-0 mt-1 text-[#c9b037]" />
                                    <span>Россия, г. Москва, Нижняя Сыромятническая ул., д.10 к.5</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone size={14} className="text-[#c9b037]" />
                                    <a href="tel:+74995530227" className="hover:text-[#c9b037] transition-colors">
                                        +7 (499) 55-30-227
                                    </a>
                                </p>

                                <p className="flex items-center gap-2">
                                    <Mail size={14} className="text-[#c9b037]" />
                                    <a href="mailto:info@unoquadro.ru" className="hover:text-[#c9b037] transition-colors">
                                        info@unoquadro.ru
                                    </a>
                                </p>
                            </address>

                            {/* Мессенджеры вместо соцсетей */}
                            <div className="flex items-center gap-3 mt-6">
                                <a
                                    href="https://wa.me/79932609855"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500/10 p-3 rounded-full hover:bg-green-500/20 transition-colors group"
                                    title="WhatsApp"
                                >
                                    <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.123 1.522 5.854L.052 23.39l5.688-1.466A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.638-.5-5.172-1.44l-.37-.22-3.478.9.924-3.303-.24-.38A9.934 9.934 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
                                    </svg>
                                </a>

                                <a
                                    href="https://t.me/unoquadro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-500/20 transition-colors group"
                                    title="Telegram"
                                >
                                    <Send size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="https://vk.com/unoquadro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600/10 p-3 rounded-full hover:bg-blue-600/20 transition-colors group"
                                    title="VKontakte"
                                >
                                    <svg className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M15.684 0H8.316C2.825 0 0 2.825 0 8.316v7.368C0 21.175 2.825 24 8.316 24h7.368C21.175 24 24 21.175 24 15.684V8.316C24 2.825 21.175 0 15.684 0zm3.519 16.742h-1.628c-.569 0-.744-.45-1.769-1.543-.892-.944-1.285-1.069-1.512-1.069-.308 0-.396.133-.396.733v1.245c0 .444-.148.634-1.168.634-1.72 0-3.646-1.02-4.993-2.921-2.025-2.659-2.579-4.655-2.579-5.068 0-.222.089-.428.574-.428h1.644c.426 0 .585.205.748.712.855 2.442 2.294 4.58 2.883 4.58.222 0 .324-.104.324-.653v-2.518c-.08-1.188-.692-1.286-.692-1.71 0-.205.174-.428.474-.428h2.585c.395 0 .538.205.538.666v3.475c0 .412.174.548.285.548.238 0 .428-.136.885-.682 1.235-1.524 2.114-3.86 2.114-3.86.111-.239.285-.475.712-.475h1.644c.49 0 .602.255.49.602-.213 1.03-2.328 4.059-2.328 4.059-.206.314-.27.475 0 .82.18.256.922 1.008 1.417 1.585.79.954 1.094 1.507 1.094 1.974.01.413-.26.63-.823.63z"/>
                                    </svg>
                                </a>

                                <a
                                    href="https://t.me/79932609855"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#c9b037]/10 p-3 rounded-full hover:bg-[#c9b037]/20 transition-colors group"
                                    title="Telegram Direct"
                                >
                                    <svg className="w-5 h-5 text-[#c9b037] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.479.26-.379 0-.313-.147-.442-.519l-1.072-3.526-3.104-.964c-.67-.208-.683-.67.138-.993l12.093-4.661c.558-.21.924.067.764.991z"/>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Веб-сайт и ссылки */}
                    <div>
                        <h3 className="text-xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                            Информация
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">

                            <li>
                                <Link href="/contact-us" className="hover:text-[#c9b037] transition-colors">
                                    Контакты
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-lg mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                                Подпишитесь на новости
                            </h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Ваш email"
                                    className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-[#c9b037]"
                                />
                                <button className="bg-[#c9b037] hover:bg-[#b89f30] px-6 py-2 text-sm uppercase tracking-wider transition-colors">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Сетка Instagram */}
                    <div>
                        <h3 className="text-xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                            Мы в Instagram
                        </h3>
                        <div className="grid grid-cols-3 gap-1">
                            {instagramImages.map((img, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden group">
                                    <Image
                                        src={img}
                                        alt={`Instagram ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                </div>
                            ))}
                        </div>

                        {/* Добавленный блок с заголовком "Группа UNO QUADRO" */}
                        <div className="mt-6">
                            <h4 className="text-lg" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                                Группа UNO QUADRO
                            </h4>
                            {/* Здесь можно добавить ссылку или описание, если потребуется */}
                        </div>
                    </div>
                </div>

                {/* Нижняя панель */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

                    <p>© {new Date().getFullYear()} ОФИЦИАЛЬНЫЙ МАГАЗИН TECKELL 2024 | Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}