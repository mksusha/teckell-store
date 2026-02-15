// components/ProductHero.tsx
'use client';

import React from 'react';

// Типизация для пропсов компонента - делаем поля опциональными
interface ProductHeroProps {
    data: {
        name: string;
        nameEn?: string;
        category: string;
        brand: string;
        fullDescription?: string;
        // Добавляем опциональные поля для категорий
        isCategory?: boolean;
        productCount?: number;
    };
}

const ProductHero: React.FC<ProductHeroProps> = ({ data }) => {
    const extractQuote = (html: string): string => {
        const text = html.replace(/<[^>]*>/g, ' ');
        const sentences = text.split('.');
        return sentences[0] + '.';
    };

    // Для категории показываем другой текст
    const getDisplayText = () => {
        if (data.isCategory) {
            return `Explore our collection of ${data.name} products`;
        }

        if (data.fullDescription) {
            return extractQuote(data.fullDescription);
        }

        return `Discover the exceptional ${data.name}.`;
    };

    return (
        <section
            className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-4116d0e wd-section-stretch opacity-video-bg elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="4116d0e"
            data-element_type="section"
            data-e-type="section"
            data-settings={JSON.stringify({ background_background: "classic" })}
        >
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3178c1c" data-id="3178c1c" data-element_type="column" data-e-type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-eac6e33 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="eac6e33"
                            data-element_type="section"
                            data-e-type="section"
                            data-settings={JSON.stringify({ background_background: "classic" })}
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3e04a7c" data-id="3e04a7c" data-element_type="column" data-e-type="column" data-settings={JSON.stringify({ background_background: "classic" })}>
                                    <div className="elementor-widget-wrap elementor-element-populated">

                                        {/* Блок заголовка (wd_title) */}
                                        <div className="elementor-element elementor-element-88b67cb wd-width-100 elementor-widget elementor-widget-wd_title">
                                            <div className="elementor-widget-container">
                                                <div className="title-wrapper wd-set-mb reset-last-child wd-title-color-white wd-title-style-simple wd-title-size-extra-large text-center">
                                                    <div className="title-subtitle subtitle-color-white subtitle-style-default wd-fontsize-m">
                                                        {data.brand?.toUpperCase() || 'TECKELL'}
                                                    </div>
                                                    <div className="liner-continer">
                                                        <h4 className="woodmart-title-container title wd-fontsize-xxxl">
                                                            {data.name}
                                                        </h4>
                                                    </div>
                                                    <div className="title-after_title reset-last-child wd-fontsize-s">
                                                        <p>“{getDisplayText()}”</p>
                                                        {data.isCategory && data.productCount && (
                                                            <p className="text-white/70 mt-2">
                                                                {data.productCount} products available
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Кнопки - скрываем для категорий или показываем другие */}
                                        {!data.isCategory && (
                                            <>
                                                <div className="elementor-element elementor-element-19e5775 elementor-widget__width-auto elementor-widget elementor-widget-wd_button">
                                                    <div className="elementor-widget-container">
                                                        <div className="wd-button-wrapper text-center">
                                                            <a
                                                                className="btn btn-style-default btn-shape-rectangle btn-size-default btn-color-white btn-icon-pos-right"
                                                                href="#above"
                                                            >
                                                                <span className="wd-btn-text">ADD TO CART</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="elementor-element elementor-element-cc82dab elementor-widget__width-auto elementor-widget elementor-widget-wd_button">
                                                    <div className="elementor-widget-container">
                                                        <div className="wd-button-wrapper text-center">
                                                            <a
                                                                className="btn btn-style-bordered btn-shape-rectangle btn-size-default btn-color-white btn-icon-pos-right"
                                                                href="#more"
                                                            >
                                                                <span className="wd-btn-text">VIEW MORE</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;