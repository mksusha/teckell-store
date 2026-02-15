// app/search/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { allProducts, Product } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";

interface Props {
    searchParams: Promise<{
        q?: string;
    }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { q } = await searchParams;
    return {
        title: q ? `Поиск: ${q} | Teckell` : "Поиск | Teckell",
    };
}

export default async function SearchPage({ searchParams }: Props) {
    const { q } = await searchParams;
    const query = q?.toLowerCase().trim() || "";

    const results = query
        ? allProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.nameEn?.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.shortDescription?.toLowerCase().includes(query)
        )
        : [];

    return (
        <>
            <Header />
            <div className="min-h-screen mt-24 bg-white">
                <div className="container mx-auto px-4 py-16 max-w-6xl">
                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <p className="text-[#DEC560] text-sm uppercase tracking-[2px] mb-2">
                            ПОИСК
                        </p>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
                            {query ? `Результаты по запросу "${query}"` : "Поиск товаров"}
                        </h1>
                        {query && (
                            <p className="text-gray-600">
                                Найдено {results.length} {getProductWord(results.length)}
                            </p>
                        )}
                    </div>

                    {/* Результаты */}
                    {results.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {results.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : query ? (
                        <div className="text-center py-16 bg-gray-50 rounded-lg">
                            <p className="text-gray-600 mb-4">По вашему запросу ничего не найдено</p>
                            <p className="text-sm text-gray-500">Попробуйте изменить поисковый запрос</p>
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-600">Введите поисковый запрос</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

function getProductWord(count: number): string {
    if (count === 1) return "товар";
    if (count >= 2 && count <= 4) return "товара";
    return "товаров";
}