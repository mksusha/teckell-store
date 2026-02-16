// app/contact-us/page.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen mt-24 bg-white">
                {/* Карта на всю ширину */}
                <div className="w-full h-[450px] relative">
                    {/* Яндекс Карта - ваш код */}
                    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                        {/* Ссылки для Яндекса (скрытые, но необходимые для работы карты) */}
                        <a
                            href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px', opacity: 0, pointerEvents: 'none' }}
                        >
                            Москва
                        </a>
                        <a
                            href="https://yandex.ru/maps/213/moscow/house/nizhnyaya_syromyatnicheskaya_ulitsa_10s5/Z04YcABgSkICQFtvfXt0c3hmZA==/?from=mapframe&indoorLevel=1&ll=37.670375%2C55.752450&source=mapframe&um=constructor%3Ae6e3e8a5a6d5e6b9b0c6c4d4e8f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8&utm_medium=mapframe&utm_source=maps&z=16.9"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px', opacity: 0, pointerEvents: 'none' }}
                        >
                            Яндекс Карты — транспорт, навигация, поиск мест
                        </a>

                        {/* Основной iframe карты */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?from=mapframe&indoorLevel=1&ll=37.670375%2C55.752450&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxMzQ2MRJZ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCd0LjQttC90Y_RjyDQodGL0YDQvtC80Y_RgtC90LjRh9C10YHQutCw0Y8g0YPQu9C40YbQsCwgMTDRgTUiCg14rhZCFYICX0I%2C&source=mapframe&um=constructor%3Ae6e3e8a5a6d5e6b9b0c6c4d4e8f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8&utm_source=mapframe&z=16.9"
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ position: 'relative', border: 0 }}
                            title="Офис в Москве"
                        />
                    </div>

                    {/* Затемняющий оверлей */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                </div>



                {/* Контактная форма */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <p className="text-[#DEC560] text-sm uppercase tracking-[2px] mb-2">
                            ИНФОРМАЦИЯ О НАС
                        </p>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
                            СВЯЖИТЕСЬ С НАМИ ПО ЛЮБЫМ ВОПРОСАМ
                        </h1>
                    </div>

                    {/* Форма */}
                    <ContactForm />
                </div>
            </div>
            <Footer/>
        </>
    );
}