import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";
import {
    getCategoryBySlug,
    getProductsByCategory,
    categories,
    getMinPriceInCategory,
    getMaxPriceInCategory
} from "@/data/categories";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Генерируем метаданные на основе slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Категория не найдена | Teckell",
        };
    }

    return {
        title: `${category.name} | Teckell`,
        description: category.description,
    };
}

// Генерируем статические страницы для всех категорий
export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);
    const products = getProductsByCategory(slug);

    if (!category) {
        notFound();
    }

    const minPrice = getMinPriceInCategory(slug);
    const maxPrice = getMaxPriceInCategory(slug);

    // Получаем все категории для навигации
    const allCategories = categories;

    return (
        <div>
            <Header></Header>
            <div className="min-h-screen bg-white">
                {/* Hero секция - как в оригинале Teckell */}
                <div className="relative w-full  h-[300px] md:h-[400px] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/cart.webp"
                            alt="Shopping cart"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40"/>
                    </div>
                    <div
                        className="relative container mx-auto px-6 mt-5 h-full flex flex-col items-center justify-center text-center">
                        {/* Хлебные крошки */}
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/"
                                  className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-[2px]">
                                Главная
                            </Link>
                            <span className="text-white/50">/</span>

                            <span className="text-white text-sm uppercase tracking-[2px]">{category.name}</span>
                        </div>

                        {/* Название категории на английском */}
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4 tracking-[0.15em] uppercase">
                            {category.nameEn}
                        </h1>

                        {/* Количество товаров */}
                        <p className="text-white/90 text-sm md:text-base max-w-2xl font-light">
                            {products.length} {getProductWord(products.length)}
                        </p>
                    </div>
                </div>

                {/* Основной контент */}
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <CategoryClient
                        categorySlug={slug}
                        initialProducts={products}
                        categoryName={category.name}
                        productCount={products.length}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        categories={allCategories}
                        category={category}
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

function getProductWord(count: number): string {
    if (count === 1) return "товар";
    if (count >= 2 && count <= 4) return "товара";
    return "товаров";
}