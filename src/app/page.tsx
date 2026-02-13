import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ItalianStorySection } from "@/components/ItalianStorySection";
import { Footer } from "@/components/Footer";
import {
    allProducts,
    getProductsByCategory
} from "@/data/categories";

export default function Home() {
    // Получаем товары по категориям
    const foosballProducts = getProductsByCategory("foosball-tables").slice(0, 8);
    const tableTennisProducts = getProductsByCategory("table-tennis").slice(0, 2);
    const poolTableProducts = getProductsByCategory("pool-tables").slice(0, 6);
    const scaccoProducts = getProductsByCategory("scacco").slice(0, 3);
    const fitnessProducts = getProductsByCategory("fitness").slice(0, 2);
    const timepiecesProducts = getProductsByCategory("timepieces").slice(0, 2);
    const atipicaProducts = getProductsByCategory("atipica").slice(0, 1);
    const foosballAccessories = getProductsByCategory("foosball-accessories").slice(0, 3);
    const poolAccessories = getProductsByCategory("pool-tables-accessories").slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero секция с ползунком */}
            <HeroSection />

            {/* НАСТОЛЬНЫЙ ФУТБОЛ - ПОЛНАЯ КОЛЛЕКЦИЯ */}
            <ProductSection
                brand="TECKELL"
                title="НАСТОЛЬНЫЙ ФУТБОЛ"
                description="Teckell переосмысливает классическую игру в настольный футбол, создавая изысканный объект дизайна. Каждая модель — это синтез инноваций и традиций."
                products={foosballProducts}
                categorySlug="foosball-tables"
                featureImage="/images/1.jpg"
                imagePosition="left"
                bgColor="white"
            />

            {/* БИЛЬЯРДНЫЕ СТОЛЫ */}
            <ProductSection
                brand="TECKELL"
                title="БИЛЬЯРД"
                description="Бильярдные столы Teckell — это синтез инноваций и традиций, искусства и дизайна, технологий и мастерства. Каждый стол создается вручную из лучших материалов."
                products={poolTableProducts}
                categorySlug="pool-tables"
                featureImage="/images/2.jpg"
                imagePosition="right"
                bgColor="white"
            />

            {/* НАСТОЛЬНЫЙ ТЕННИС */}
            <ProductSection
                brand="TECKELL"
                title="НАСТОЛЬНЫЙ ТЕННИС"
                description="Настольный теннис обретает фирменный стиль Teckell в модели Effetto 71. Стол, который сочетает в себе элегантность дизайна и функциональность профессионального оборудования."
                products={tableTennisProducts}
                categorySlug="table-tennis"
                featureImage="/images/3.jpg"
                imagePosition="left"
                bgColor="#f9f9f9"
            />

            {/* ШАХМАТЫ - SCACCO */}
            <ProductSection
                brand="TECKELL"
                title="ШАХМАТЫ"
                description="Teckell достиг идеального баланса с элегантным дизайном, создавая новое прочтение древней игры. Шахматные столы из мрамора и стекла — для ценителей прекрасного."
                products={scaccoProducts}
                categorySlug="scacco"
                featureImage="/images/4.jpg"
                imagePosition="right"
                bgColor="white"
            />

            {/* ФИТНЕС - ВЕЛОСИПЕД CICLOTTE */}
            <ProductSection
                brand="TECKELL | CICLOTTE"
                title="ФИТНЕС"
                description="Teckell принимает новый вызов, устремляясь к передовому краю дизайна. Ciclotte — это велотренажер, который становится арт-объектом в вашем интерьере."
                products={fitnessProducts}
                categorySlug="fitness"
                featureImage="/images/5.jpg"
                imagePosition="left"
                bgColor="white"
            />

            {/* ЧАСЫ - КОЛЛЕКЦИЯ TAKTO */}
            <ProductSection
                brand="TAKTO"
                title="ЧАСЫ"
                description="Takto Timepieces от Teckell принимает вечный вызов человека против времени. Настольные часы, сочетающие минимализм и высокие технологии."
                products={timepiecesProducts}
                categorySlug="timepieces"
                featureImage="/images/6.jpg"
                imagePosition="right"
                bgColor="#f9f9f9"
            />

            {/* ГУАЛЬТЕРО - ATIPICA */}
            <ProductSection
                brand="TECKELL"
                title="ГУАЛЬТЕРО"
                description="Кабинет curiosities с дартсом в основании и профиле из дерева Каналетто. Уникальный предмет для любителей нестандартных решений."
                products={atipicaProducts}
                categorySlug="atipica"
                featureImage="/images/7.jpg"                imagePosition="left"
                bgColor="white"
            />

            {/* ИТАЛЬЯНСКАЯ ИСТОРИЯ - ФИРМЕННАЯ СЕКЦИЯ TECKELL */}
            <ItalianStorySection />

            {/* ФУТЕР */}
            <Footer />
        </main>
    );
}