// app/product/[id]/ProductClient.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Ruler, Maximize2 } from "lucide-react";
import { Product, Category, formatPrice, getBrandTab, getShippingTab, getMoreProductsButton } from "@/data/categories";
import { SizeGuideModal } from "@/components/SizeGuideModal";
import { CartWidget } from "@/components/CartWidget";
import { useCart } from "@/hooks/useCart";

interface ProductClientProps {
    product: Product;
    category?: Category;
    relatedProducts: Product[];
}

export function ProductClient({ product, category, relatedProducts }: ProductClientProps) {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [customization, setCustomization] = useState("");
    const [activeTab, setActiveTab] = useState("description");
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
    const [isCartWidgetOpen, setIsCartWidgetOpen] = useState(false);

    // Хук корзины
    const { items, addToCart, removeFromCart, updateQuantity } = useCart();

    // Получаем стандартные табы с возможностью переопределения
    const brandTab = getBrandTab(product);
    const shippingTab = getShippingTab(product);
    const moreButton = getMoreProductsButton(product.categorySlug);

    // Массив изображений для галереи
    const images = product.images || [product.image, product.hoverImage].filter(Boolean);

    // Форматирование цены
    const formattedPrice = formatPrice(product.price);
    const formattedMaxPrice = product.priceMax ? formatPrice(product.priceMax) : null;

    // Обработчик добавления в корзину
    const handleAddToCart = () => {
        // Создаем вариации товара (если есть)
        const variations = [];

        // Добавляем кастомизацию как вариацию, если она есть
        if (customization) {
            variations.push({
                name: "Гравировка",
                value: customization
            });
        }

        // Добавляем в корзину
        addToCart({
            product_id: product.id,
            name: product.name,
            sku: product.sku,
            price: product.price,
            quantity: quantity,
            currency: '€',
            image: product.image,
            variations: variations.length > 0 ? variations : undefined
        });

        // Открываем виджет корзины после добавления
        setIsCartWidgetOpen(true);

        console.log(`Добавлено в корзину: ${product.id}, количество: ${quantity}, гравировка: ${customization || 'нет'}`);
    };

    // Обработчик добавления в избранное
    const handleAddToWishlist = () => {
        console.log(`Добавлено в избранное: ${product.id}`);
        // Здесь будет API вызов
    };

    return (
        <div className="min-h-screen mt-26 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-6 py-4">
                {/* Хлебные крошки */}
                <div className="flex items-center text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-[#aea062] transition-colors">
                        Главная
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href={`/category/${product.categorySlug}`} className="hover:text-[#aea062] transition-colors">
                        {category?.name || product.category}
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </div>

                {/* ОСНОВНОЙ БЛОК: Галерея + Информация */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
                    {/* ЛЕВАЯ КОЛОНКА - ГАЛЕРЕЯ (60%) */}
                    <div className="lg:w-[60%]">
                        <div className="flex flex-col-reverse lg:flex-row gap-4">
                            {/* Миниатюры */}
                            {images.length > 1 && (
                                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:w-24">
                                    {images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            className={`flex-shrink-0 w-20 h-20 border-2 transition-all relative ${
                                                activeImage === index
                                                    ? "border-[#aea062] opacity-100"
                                                    : "border-transparent opacity-60 hover:opacity-100"
                                            }`}
                                        >
                                            {img && (
                                                <Image
                                                    src={img}
                                                    alt={`${product.name} - миниатюра ${index + 1}`}
                                                    fill
                                                    unoptimized
                                                    className="object-contain p-2"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Главное изображение */}
                            <div className="flex-1 relative bg-white shadow-sm">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={images[activeImage] || product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6 md:p-8"
                                        priority
                                    />

                                    {/* Лейблы */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.isLimited && (
                                            <span className="bg-[#aea062] text-white text-[10px] uppercase tracking-wider px-3 py-1.5">
                                                Лимитированная серия
                                            </span>
                                        )}
                                        {product.isReadyToShip && (
                                            <span className="bg-[#c5b151] text-white text-[10px] uppercase tracking-wider px-3 py-1.5">
                                                Готов к отправке
                                            </span>
                                        )}
                                    </div>

                                    {/* Кнопка увеличения */}
                                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100">
                                        <Maximize2 size={18} className="text-gray-700" />
                                    </button>
                                </div>

                                {/* Индикатор текущего изображения */}
                                {images.length > 1 && (
                                    <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveImage(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    activeImage === index
                                                        ? "bg-[#aea062] w-4"
                                                        : "bg-gray-300 hover:bg-gray-400"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА - ИНФОРМАЦИЯ О ТОВАРЕ (40%) */}
                    <div className="lg:w-[40%]">
                        <div className="bg-white p-6 md:p-8 sticky top-24 shadow-sm">
                            {/* Бренд */}
                            {product.brandLogo && (
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={product.brandLogo}
                                        alt={product.brand || "Teckell"}
                                        width={80}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            )}

                            {/* Разделитель */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-0.5 bg-[#aea062]"></div>
                            </div>

                            {/* Название товара */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center text-gray-800 mb-4">
                                {product.name}
                            </h1>

                            {/* Цена */}
                            <div className="text-center mb-6">
                                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#aea062]">
                                    €{formattedPrice}
                                </span>
                                {product.priceSuffix && (
                                    <span className="block text-xs text-gray-500 mt-1 uppercase tracking-wider">
                                        {product.priceSuffix}
                                    </span>
                                )}
                                {formattedMaxPrice && (
                                    <div className="mt-1">
                                        <span className="text-lg text-gray-600">
                                            – €{formattedMaxPrice}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Наличие */}
                            <div className="flex justify-center mb-6">
                                <span className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm ${
                                    product.inStock ?? true
                                        ? "bg-green-50 text-green-700 border border-green-200"
                                        : "bg-red-50 text-red-700 border border-red-200"
                                }`}>
                                    {product.stockStatus || (product.inStock ? "В наличии" : "Нет в наличии")}
                                </span>
                            </div>

                            {/* Краткое описание */}
                            {product.shortDescription && (
                                <div className="text-center text-gray-600 mb-6 text-sm leading-relaxed px-2">
                                    {product.shortDescription}
                                </div>
                            )}

                            {/* Кастомизация (для Cristallino) */}
                            {product.customization?.enabled && (
                                <div className="mb-6 border-t border-gray-100 pt-6">
                                    <label className="block text-xs uppercase tracking-wider text-gray-700 font-medium mb-2">
                                        {product.customization.label}
                                    </label>
                                    <input
                                        type="text"
                                        value={customization}
                                        onChange={(e) => setCustomization(e.target.value)}
                                        placeholder={product.customization.placeholder}
                                        maxLength={product.customization.maxLength}
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-[#aea062] outline-none transition-colors"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Макс. {product.customization.maxLength} символов
                                    </p>
                                </div>
                            )}

                            {/* Количество и кнопка "В корзину" */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <div className="flex border border-gray-300 w-full sm:w-32">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                                        aria-label="Уменьшить количество"
                                    >
                                        –
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-full text-center border-x border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        min="1"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                                        aria-label="Увеличить количество"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-[#3c3937] text-white text-sm uppercase tracking-wider py-3 px-6 hover:bg-[#aea062] transition-colors duration-300"
                                >
                                    В корзину
                                </button>
                            </div>

                            {/* Кнопки "В избранное" и "Таблица размеров" */}
                            <div className="flex justify-center gap-6 mb-6">
                                <button
                                    onClick={handleAddToWishlist}
                                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#aea062] transition-colors group"
                                >
                                    <Heart size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>В избранное</span>
                                </button>
                                <button
                                    onClick={() => setIsSizeGuideOpen(true)}
                                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#aea062] transition-colors group"
                                >
                                    <Ruler size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Таблица размеров</span>
                                </button>
                            </div>

                            {/* Артикул */}
                            {product.sku && (
                                <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
                                    Артикул: {product.sku}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ТАБЫ: Описание, О бренде, Доставка */}
                <div className="mb-16 bg-white p-6 md:p-8">
                    {/* Заголовки табов */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`pb-3 px-1 text-xs md:text-sm uppercase tracking-wider font-medium transition-colors relative ${
                                activeTab === "description"
                                    ? "text-[#aea062]"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <span className="relative">
                                Описание
                                {activeTab === "description" && (
                                    <span className="absolute bottom-[-12px] left-0 w-full h-0.5 bg-[#aea062]"></span>
                                )}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("brand")}
                            className={`pb-3 px-1 text-xs md:text-sm uppercase tracking-wider font-medium transition-colors relative ${
                                activeTab === "brand"
                                    ? "text-[#aea062]"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <span className="relative">
                                О бренде
                                {activeTab === "brand" && (
                                    <span className="absolute bottom-[-12px] left-0 w-full h-0.5 bg-[#aea062]"></span>
                                )}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("shipping")}
                            className={`pb-3 px-1 text-xs md:text-sm uppercase tracking-wider font-medium transition-colors relative ${
                                activeTab === "shipping"
                                    ? "text-[#aea062]"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <span className="relative">
                                Доставка
                                {activeTab === "shipping" && (
                                    <span className="absolute bottom-[-12px] left-0 w-full h-0.5 bg-[#aea062]"></span>
                                )}
                            </span>
                        </button>
                    </div>

                    {/* Контент табов */}
                    <div className="max-w-4xl mx-auto">
                        {/* ТАБ: ОПИСАНИЕ */}
                        {activeTab === "description" && (
                            <div className="prose prose-sm md:prose-base max-w-none">
                                {product.fullDescription ? (
                                    <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
                                ) : (
                                    <div className="space-y-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            {product.description || product.shortDescription || "Описание товара временно отсутствует."}
                                        </p>

                                        {/* Характеристики из attributes */}
                                        {product.attributes && product.attributes.length > 0 && (
                                            <div className="mt-8">
                                                <h3 className="text-xl font-serif mb-4 text-gray-800">Характеристики</h3>
                                                <table className="w-full border-collapse">
                                                    <tbody>
                                                    {product.attributes.map((attr, index) => (
                                                        <tr key={index} className="border-b border-gray-100">
                                                            <td className="py-3 pr-4 font-medium text-gray-700 w-1/3">
                                                                {attr.name}
                                                            </td>
                                                            <td className="py-3 text-gray-600">
                                                                {attr.value}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ТАБ: О БРЕНДЕ */}
                        {activeTab === "brand" && (
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    {brandTab.logo && (
                                        <div className="mb-6 flex justify-center md:justify-start">
                                            <Image
                                                src={brandTab.logo}
                                                alt="Teckell"
                                                width={170}
                                                height={50}
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <div
                                        className="text-gray-700 leading-relaxed space-y-4"
                                        dangerouslySetInnerHTML={{ __html: brandTab.content }}
                                    />

                                    {/* Кнопка "ЕЩЕ ТОВАРЫ" */}
                                    <div className="mt-6">
                                        <Link
                                            href={moreButton.link}
                                            className="inline-flex items-center text-[#aea062] hover:text-gray-800 text-xs uppercase tracking-wider font-medium transition-colors border-b border-[#aea062] hover:border-gray-800 pb-1"
                                        >
                                            {moreButton.text}
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Товары бренда */}
                                <div className="md:w-2/3">
                                    <h4 className="text-lg font-serif mb-4 text-gray-800">Другие товары Teckell</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {relatedProducts.slice(0, 2).map((relProduct) => (
                                            <Link
                                                key={relProduct.id}
                                                href={`/product/${relProduct.id}`}
                                                className="block text-center group bg-gray-50 p-4 hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="relative aspect-square mb-3">
                                                    <Image
                                                        src={relProduct.image}
                                                        alt={relProduct.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                                <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#aea062] transition-colors line-clamp-2">
                                                    {relProduct.name}
                                                </h5>
                                                <p className="text-xs text-gray-500 mt-1">{relProduct.category}</p>
                                                <p className="text-sm font-semibold text-gray-800 mt-2">
                                                    €{formatPrice(relProduct.price)}
                                                    {relProduct.priceSuffix && (
                                                        <span className="text-[10px] text-gray-500 ml-1">
                                                            {relProduct.priceSuffix}
                                                        </span>
                                                    )}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ТАБ: ДОСТАВКА */}
                        {activeTab === "shipping" && (
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                    <div
                                        className="text-gray-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: shippingTab.content }}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <div className="grid grid-cols-2 gap-3">
                                        {shippingTab.images?.map((img, idx) => (
                                            <div key={idx} className="relative aspect-[350/450]">
                                                <Image
                                                    src={img}
                                                    alt={`Доставка Teckell ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ПОХОЖИЕ ТОВАРЫ */}
                {relatedProducts.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-xl md:text-2xl font-serif text-center mb-8">
                            <span className="border-b-2 border-[#aea062] pb-2">Вам также может понравиться</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.id}
                                    href={`/product/${relProduct.id}`}
                                    className="group bg-white p-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="relative aspect-square mb-3">
                                        <Image
                                            src={relProduct.image}
                                            alt={relProduct.name}
                                            fill
                                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xs md:text-sm font-medium text-gray-800 group-hover:text-[#aea062] transition-colors text-center line-clamp-2">
                                        {relProduct.name}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-gray-500 text-center mt-1">
                                        {relProduct.category}
                                    </p>
                                    <p className="text-xs md:text-sm font-semibold text-gray-800 text-center mt-2">
                                        €{formatPrice(relProduct.price)}
                                        {relProduct.priceSuffix && (
                                            <span className="text-[10px] text-gray-500 ml-1">
                                                {relProduct.priceSuffix}
                                            </span>
                                        )}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Модальное окно с таблицей размеров */}
            <pre style={{display: 'none'}}>
    {JSON.stringify({
        hasDimensions: !!product.dimensions,
        hasWeight: !!product.weight,
        hasPackaging: !!product.packaging,
        hasAssemblyRequired: !!product.assemblyRequired,
        dimensionsValue: product.dimensions,
        weightValue: product.weight
    }, null, 2)}
</pre>

            <SizeGuideModal
                isOpen={isSizeGuideOpen}
                onClose={() => setIsSizeGuideOpen(false)}
                productName={product.name}
                productData={{
                    dimensions: product.dimensions,
                    weight: product.weight,
                    packaging: product.packaging,
                    assemblyRequired: product.assemblyRequired,
                    attributes: product.attributes,
                    sizeGuideImage: product.sizeGuideImage,
                    sizeGuideImageWidth: product.sizeGuideImageWidth,
                    sizeGuideImageHeight: product.sizeGuideImageHeight,
                    sizeGuideImage2: product.sizeGuideImage2,
                    sizeGuideImage2Width: product.sizeGuideImage2Width,
                    sizeGuideImage2Height: product.sizeGuideImage2Height
                }}
            />

            {/* Виджет корзины */}
            <CartWidget
                isOpen={isCartWidgetOpen}
                onClose={() => setIsCartWidgetOpen(false)}
            />
        </div>
    );
}