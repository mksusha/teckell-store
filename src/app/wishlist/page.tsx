// app/wishlist/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WishlistClient } from "./WishlistClient";

export const metadata: Metadata = {
    title: "Избранное | Teckell",
    description: "Ваши избранные товары Teckell",
};

export default function WishlistPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen mt-24 bg-white">
                <div className="container mx-auto px-4 py-16 max-w-6xl">
                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <p className="text-[#DEC560] text-sm uppercase tracking-[2px] mb-2">
                            ИЗБРАННОЕ
                        </p>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
                            ТОВАРЫ, КОТОРЫЕ ВАМ ПОНРАВИЛИСЬ
                        </h1>
                    </div>

                    {/* Клиентский компонент */}
                    <WishlistClient />
                </div>
            </div>
            <Footer />
        </>
    );
}