"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface SizeGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    productData: {
        dimensions?: {
            length: string;
            width: string;
            height: string;
        };
        weight?: string;
        packaging?: {
            type: string;
            dimensions: string;
            weight: string;
        };
        assemblyRequired?: boolean;
        attributes?: Array<{ name: string; value: string }>;
        sizeGuideImage?: string;
        sizeGuideImageWidth?: number;
        sizeGuideImageHeight?: number;
        sizeGuideImage2?: string;
        sizeGuideImage2Width?: number;
        sizeGuideImage2Height?: number;
    };
}

export function SizeGuideModal({ isOpen, onClose, productName, productData }: SizeGuideModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [image2Error, setImage2Error] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => setIsVisible(false), 300);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isVisible) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Определяем тип продукта
    const isT11Product = productName.includes("T 1.1") || productName.includes("T1.1");
    const isFuoriclasse = productName.includes("Fuoriclasse");

    // Функция для получения данных таблицы из attributes
    const getTableDataFromAttributes = () => {
        if (!productData.attributes) return [];

        const data: Array<{ label: string; value: string }> = [];

        // Приоритетный порядок для Fuoriclasse
        if (isFuoriclasse) {
            const order = [
                "Модификация",
                "Требуется сборка",
                "Размеры стола",
                "Вес стола",
                "Тип упаковки",
                "Размер упаковки",
                "Вес упаковки"
            ];

            order.forEach(label => {
                const attr = productData.attributes?.find(a => a.name === label);
                if (attr) {
                    data.push({ label, value: attr.value });
                }
            });
        } else {
            // Для остальных продуктов
            productData.attributes.forEach(attr => {
                data.push({ label: attr.name, value: attr.value });
            });
        }

        return data;
    };

    const tableData = getTableDataFromAttributes();

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleOverlayClick}
        >
            <div
                className={`bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-xl font-serif text-gray-800">
                        Размеры и упаковка {productName}
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Закрыть"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Изображения размеров */}
                    {productData.sizeGuideImage && (
                        <div className={`${isT11Product ? 'mb-8 border-b border-gray-200 pb-8' : 'mb-8'}`}>
                            {isT11Product && productData.sizeGuideImage2 ? (
                                // Два изображения для T1.1
                                <>
                                    <div className="mb-6">
                                        <div className="relative w-full h-auto">
                                            {!imageError ? (
                                                <Image
                                                    src={productData.sizeGuideImage}
                                                    alt={`Схема размеров 9ft ${productName}`}
                                                    width={productData.sizeGuideImageWidth || 2500}
                                                    height={productData.sizeGuideImageHeight || 834}
                                                    className="w-full h-auto object-contain"
                                                    unoptimized
                                                    onError={() => setImageError(true)}
                                                />
                                            ) : (
                                                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                                    <span className="text-gray-400">Схема размеров 9ft временно недоступна</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {productData.sizeGuideImage2 && (
                                        <div>
                                            <div className="relative w-full h-auto">
                                                {!image2Error ? (
                                                    <Image
                                                        src={productData.sizeGuideImage2}
                                                        alt={`Схема размеров 8ft ${productName}`}
                                                        width={productData.sizeGuideImage2Width || 2500}
                                                        height={productData.sizeGuideImage2Height || 834}
                                                        className="w-full h-auto object-contain"
                                                        unoptimized
                                                        onError={() => setImage2Error(true)}
                                                    />
                                                ) : (
                                                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                                        <span className="text-gray-400">Схема размеров 8ft временно недоступна</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                // Одно изображение для Fuoriclasse и других продуктов
                                <div className="relative w-full h-auto">
                                    {!imageError ? (
                                        <Image
                                            src={productData.sizeGuideImage}
                                            alt={`Схема размеров ${productName}`}
                                            width={productData.sizeGuideImageWidth || 1920}
                                            height={productData.sizeGuideImageHeight || 641}
                                            className="w-full h-auto object-contain"
                                            unoptimized
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400">Схема размеров временно недоступна</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Таблица размеров для T1.1 */}
                    {isT11Product ? (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-200">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-200 py-3 px-4 text-left font-medium text-gray-700">Спецификация</th>
                                    <th className="border border-gray-200 py-3 px-4 text-left font-medium text-gray-700">9 футов</th>
                                    <th className="border border-gray-200 py-3 px-4 text-left font-medium text-gray-700">8 футов</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Требуется сборка</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Да</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Да</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Размеры стола</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Вес стола</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">400 кг | 882 lbs</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">330 кг | 727 1/2 lbs</td>
                                </tr>

                                {/* Box 1 */}
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Тип упаковки</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600" colSpan={2}>Коробка 1</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Размер коробки 1</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Д 305 Ш 180 В 32 см | Д 120" Ш 70.9" В 12.6"</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">Д 278 Ш 32 В 152 см | Д 109" Ш 12.6" В 53.8"</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Вес коробки 1</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">393 кг | 866.4 lbs</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">312 кг | 687.8 lbs</td>
                                </tr>

                                {/* Box 2 */}
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Тип упаковки</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600" colSpan={2}>Коробка 2</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Размер коробки 2</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600" colSpan={2}>Д 82 Ш 82 В 34 см | Д 32.3" Ш 32.3" В 13.4"</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Вес коробки 2</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">135 кг | 297.6 lbs</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">110 кг | 242.5 lbs</td>
                                </tr>

                                {/* Box 3 */}
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Тип упаковки</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600" colSpan={2}>Коробка 3</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Размер коробки 3</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600" colSpan={2}>Д 134 Ш 100 В 58 см | Д 52.8" Ш 39.4" В 22.8"</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 py-3 px-4 font-medium text-gray-700 bg-gray-50">Вес коробки 3</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">140 кг | 308.6 lbs</td>
                                    <td className="border border-gray-200 py-3 px-4 text-gray-600">149 кг | 328.5 lbs</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        // Стандартная таблица для Fuoriclasse и других продуктов
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                {/* Сначала идут данные из attributes в правильном порядке */}
                                {tableData.map((row, index) => (
                                    <tr key={`attr-${index}`} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                            {row.label}
                                        </td>
                                        <td className="py-4 px-4 text-gray-600">
                                            {row.value}
                                        </td>
                                    </tr>
                                ))}

                                {/* Если нет attributes, используем структурированные данные */}
                                {tableData.length === 0 && (
                                    <>
                                        {productData.assemblyRequired !== undefined && (
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                    Требуется сборка
                                                </td>
                                                <td className="py-4 px-4 text-gray-600">
                                                    {productData.assemblyRequired ? "Да" : "Нет"}
                                                </td>
                                            </tr>
                                        )}

                                        {productData.dimensions && (
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                    Размеры стола
                                                </td>
                                                <td className="py-4 px-4 text-gray-600">
                                                    Д {productData.dimensions.length} Ш {productData.dimensions.width} В {productData.dimensions.height}
                                                </td>
                                            </tr>
                                        )}

                                        {productData.weight && (
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                    Вес стола
                                                </td>
                                                <td className="py-4 px-4 text-gray-600">
                                                    {productData.weight}
                                                </td>
                                            </tr>
                                        )}

                                        {productData.packaging && (
                                            <>
                                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                        Тип упаковки
                                                    </td>
                                                    <td className="py-4 px-4 text-gray-600">
                                                        {productData.packaging.type}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                        Размер упаковки
                                                    </td>
                                                    <td className="py-4 px-4 text-gray-600">
                                                        {productData.packaging.dimensions}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-4 font-medium text-gray-700 w-1/3 bg-gray-50">
                                                        Вес упаковки
                                                    </td>
                                                    <td className="py-4 px-4 text-gray-600">
                                                        {productData.packaging.weight}
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </>
                                )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Примечание для Fuoriclasse */}
                    {isFuoriclasse && (
                        <div className="mt-6 text-xs text-gray-500 text-center border-t border-gray-100 pt-4">
                            * Длина с выдвинутыми штангами
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}