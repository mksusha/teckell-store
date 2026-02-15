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
                    {/* Сама карта */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.5111791554015!2d8.793325315562065!3d45.57422763546049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478687f71c1f3cfb%3A0x26191adba8861c2e!2sVia%20Marmolada%2C%2020%2C%2021013%20Gallarate%20VA%2C%20Italy!5e0!3m2!1sen!2sru!4v1699999999999!5m2!1sen!2sru"
                        title="Teckell Office"
                        className="w-full h-full"
                        style={{border: 0, filter: 'grayscale(10%) contrast(1.1)'}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Затемняющий оверлей */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                </div>

                {/* Контактная форма с правильными отступами */}
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
                    <ContactForm/>


                </div>
            </div>
            <Footer/>
        </>
    );
}