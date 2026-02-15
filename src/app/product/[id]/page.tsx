// app/product/[id]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getCategoryBySlug, formatPrice } from "@/data/categories";
import { ProductClient } from "./ProductClient";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

// Генерация метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = getProductBySlug(id);

    if (!product) {
        return {
            title: "Товар не найден | Teckell",
        };
    }

    return {
        title: `${product.name} | Teckell`,
        description: product.shortDescription || `Купить ${product.name} в официальном магазине Teckell`,
    };
}

// Генерация статических страниц для всех товаров
export async function generateStaticParams() {
    const { allProducts } = await import("@/data/categories");
    return allProducts.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = getProductBySlug(id);

    if (!product) {
        notFound();
    }

    const category = getCategoryBySlug(product.categorySlug);
    const relatedProducts = getRelatedProducts(id, 4);

    return (
        <div>
            <Header></Header>
        <ProductClient
            product={product}
            category={category}
            relatedProducts={relatedProducts}
        />
            <Footer></Footer>
        </div>
    );
}