// // components/sections/ProductHeroSection.tsx
// 'use client';
//
// import React from 'react';
// import { Product } from '@/data/categories';
//
// interface ProductHeroSectionProps {
//     product: Product; // Передаем весь объект товара
// }
//
// const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({ product }) => {
//     // Проверяем наличие heroSection
//     if (!product.heroSection) {
//         console.warn(`Product ${product.id} has no heroSection`);
//         return null;
//     }
//
//     const { heroSection } = product;
//
//     return (
//         <section
//             className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-4116d0e wd-section-stretch opacity-video-bg elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//             data-id={heroSection.dataId}
//             data-element_type="section"
//             data-e-type="section"
//             data-settings={JSON.stringify(heroSection.dataSettings)}
//             style={{
//                 backgroundImage: `url(${heroSection.backgroundImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//             }}
//         >
//             <div className="elementor-background-overlay"></div>
//
//             <div className="elementor-container elementor-column-gap-default">
//                 <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3178c1c" data-id="3178c1c" data-element_type="column" data-e-type="column">
//                     <div className="elementor-widget-wrap elementor-element-populated">
//                         <section
//                             className="elementor-section elementor-inner-section elementor-element elementor-element-eac6e33 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//                             data-id="eac6e33"
//                             data-element_type="section"
//                             data-e-type="section"
//                             data-settings={JSON.stringify({ background_background: "classic" })}
//                         >
//                             <div className="elementor-container elementor-column-gap-default">
//                                 <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3e04a7c" data-id="3e04a7c" data-element_type="column" data-e-type="column" data-settings={JSON.stringify({ background_background: "classic" })}>
//                                     <div className="elementor-widget-wrap elementor-element-populated">
//
//                                         {/* WD Title Widget */}
//                                         <div className="elementor-element elementor-element-88b67cb wd-width-100 elementor-widget elementor-widget-wd_title">
//                                             <div className="elementor-widget-container">
//                                                 <div className="title-wrapper wd-set-mb reset-last-child wd-title-color-white wd-title-style-simple wd-title-size-extra-large text-center">
//
//                                                     {/* Сабтайтл */}
//                                                     <div className="title-subtitle subtitle-color-white subtitle-style-default wd-fontsize-m">
//                                                         {heroSection.subtitle}
//                                                     </div>
//
//                                                     {/* Основной заголовок */}
//                                                     <div className="liner-continer">
//                                                         <h4 className="woodmart-title-container title wd-fontsize-xxxl">
//                                                             {heroSection.title}
//                                                         </h4>
//                                                     </div>
//
//                                                     {/* Цитата */}
//                                                     <div className="title-after_title reset-last-child wd-fontsize-s">
//                                                         <p>“{heroSection.quote}”</p>
//                                                     </div>
//
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                         {/* Кнопка ADD TO CART */}
//                                         <div className="elementor-element elementor-element-19e5775 elementor-widget__width-auto elementor-widget elementor-widget-wd_button">
//                                             <div className="elementor-widget-container">
//                                                 <div className="wd-button-wrapper text-center">
//                                                     <a
//                                                         className="btn btn-style-default btn-shape-rectangle btn-size-default btn-color-white btn-icon-pos-right"
//                                                         href="#above"
//                                                     >
//                                                         <span className="wd-btn-text">{heroSection.buttonAddToCart}</span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                         {/* Кнопка VIEW MORE */}
//                                         <div className="elementor-element elementor-element-cc82dab elementor-widget__width-auto elementor-widget elementor-widget-wd_button">
//                                             <div className="elementor-widget-container">
//                                                 <div className="wd-button-wrapper text-center">
//                                                     <a
//                                                         className="btn btn-style-bordered btn-shape-rectangle btn-size-default btn-color-white btn-icon-pos-right"
//                                                         href="#more"
//                                                     >
//                                                         <span className="wd-btn-text">{heroSection.buttonViewMore}</span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default ProductHeroSection;