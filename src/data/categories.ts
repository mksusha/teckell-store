// data/categories.ts

// ============ ИНТЕРФЕЙСЫ ============
export interface Product {
    id: string;
    name: string;              // Название на русском
    nameEn?: string;          // Оригинальное название (для отображения при необходимости)
    category: string;         // Категория на русском
    categorySlug: string;
    price: number;
    priceMax?: number;
    image: string;
    hoverImage?: string;
    isReadyToShip?: boolean;  // "Готов к отправке"
    isNew?: boolean;          // "Новинка"
    isLimited?: boolean;      // "Лимитированная серия"
    description?: string;
    specs?: string[];

    // Для страницы товара
    sku?: string;
    images?: string[];
    fullDescription?: string;
    shortDescription?: string;
    brand?: string;
    brandLogo?: string;
    inStock?: boolean;
    stockStatus?: string;     // "В наличии", "Под заказ", etc.
    priceSuffix?: string;     // "без НДС", "с НДС"
    isVariable?: boolean;

    attributes?: {
        name: string;
        value: string;
    }[];

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

    brandTab?: {
        title?: string;
        content: string;
        logo?: string;
    };
    shippingTab?: {
        title?: string;
        content: string;
        images?: string[];
    };

    customization?: {
        enabled: boolean;
        label: string;
        placeholder: string;
        maxLength: number;
    };

    labels?: {
        text: string;
        type: string;
        color?: string;
    }[];

    relatedProducts?: string[];
}

export interface Category {
    id: string;
    slug: string;
    name: string;           // Название на русском
    nameEn: string;        // Название на английском (для SEO/оригинала)
    description: string;   // Описание на русском
    heroImage: string;
    icon?: string;
    productCount: number;
    subcategories?: Subcategory[];
}

export interface Subcategory {
    id: string;
    slug: string;
    name: string;          // Название на русском
    productCount: number;
}

// ============ ВСЕ ТОВАРЫ С РУССКИМИ НАЗВАНИЯМИ ============
export const allProducts: Product[] = [
    // ============ НАСТОЛЬНЫЙ ФУТБОЛ ============
    {
        id: "cristallino-pirelli",
        name: "Cristallino для PIRELLI",
        nameEn: "Cristallino for PIRELLI",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 16000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/07/Teckell-Cristallino-for-Pirelli-001-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/07/Teckell-Cristallino-for-Pirelli-002.png",
        isLimited: true,
        inStock: true,
        stockStatus: "В наличии",

        sku: "CRIST.PIRELLI",

        images: [
            "https://teckell.store/wp-content/uploads/2025/07/Teckell-Cristallino-for-Pirelli-001-768x922.png",
            "https://teckell.store/wp-content/uploads/2025/07/teckell-scheda-cristallio-pirelli-highlights-immagine-800x512-1.jpg",
            "https://teckell.store/wp-content/uploads/2025/07/teckell-scheda-cristallio-pirelli-highlights-immagine-800x512-2.jpg",
            "https://teckell.store/wp-content/uploads/2025/07/teckell-scheda-cristallio-pirelli-highlights-immagine-800x512-3.jpg"
        ],

        shortDescription: "Лимитированная серия столов для настольного футбола – всего 100 экземпляров, где итальянский дизайн, инновации и мастерство встречаются в идеальной гармонии.",

        fullDescription: `
            <div class="space-y-6">
                <h4 class="text-2xl font-serif text-[#aea062]">Cristallino для PIRELLI</h4>
                <p class="text-gray-700 italic">идеальный синтез артистизма и инноваций</p>
                
                <ul class="list-disc pl-5 space-y-3 text-gray-700">
                    <li><strong>Конструкция:</strong> Закаленное стекло с низким содержанием железа, толщина 15 мм, со скошенными углами, отполированными оксидом церия. Именная пластина с логотипом "Teckell for Pirelli".</li>
                    <li><strong>Игровое поле:</strong> Изготовлено из черного Corian® с желтой разметкой — фирменным знаком Pirelli.</li>
                    <li><strong>Фигурки игроков:</strong> Одна команда — анодированный алюминий без покрытия, вторая — черный анодированный алюминий.</li>
                    <li><strong>Ручки:</strong> Из анодированного алюминия с графическим узором, вдохновленным рисунком протектора шин Pirelli P Zero™. Резиновые вставки обеспечивают улучшенный захват.</li>
                    <li><strong>Счетчик голов:</strong> Хромированная латунь с логотипами Teckell и Pirelli.</li>
                    <li><strong>Ворота:</strong> Полированная нержавеющая сталь с черными сетками ручной работы.</li>
                    <li><strong>Ножки:</strong> Полностью резиновые с логотипом Pirelli, регулируемые для неровных поверхностей.</li>
                    <li><strong>Штанги:</strong> Телескопические, из нержавеющей стали AISI 316, с двухслойной амортизацией и саморегулирующимися подшипниками.</li>
                </ul>
                
                <p class="text-gray-600 italic mt-4">Разработано для использования в помещении и на крытых открытых площадках.</p>
            </div>
        `,

        brand: "Teckell",
        brandLogo: "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell.png",

        attributes: [
            { name: "Модификация", value: "Прозрачный | Черный" },
            { name: "Требуется сборка", value: "Да" },
            { name: "Размеры стола", value: "Д 140 Ш 74/174* В 92 см" },
            { name: "Вес", value: "116 кг" },
            { name: "Тип упаковки", value: "Коробка" },
            { name: "Размер упаковки", value: "Д 134 Ш 100 В 58 см" },
            { name: "Вес упаковки", value: "145 кг" }
        ],

        dimensions: {
            length: "140 см",
            width: "74/174 см",
            height: "92 см"
        },
        weight: "116 кг",
        packaging: {
            type: "Коробка",
            dimensions: "Д 134 Ш 100 В 58 см",
            weight: "145 кг"
        },
        assemblyRequired: true,

        customization: {
            enabled: true,
            label: "Персонализируйте ваш Teckell:",
            placeholder: "Гравировка до 10 символов",
            maxLength: 10
        },

        brandTab: {
            title: "О бренде",
            content: `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                      <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            logo: "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell-170x50.png"
        },

        shippingTab: {
            title: "Доставка",
            content: `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                     <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель.</p>
                     <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                     <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            images: [
                "https://teckell.store/wp-content/uploads/2022/11/pexels-karolina-grabowska-4498135-scaled-350x450.jpg",
                "https://teckell.store/wp-content/uploads/2022/11/pexels-norma-mortenson-4391470-scaled-350x450.jpg"
            ]
        },

        labels: [
            { text: "Лимитированная серия", type: "limited" }
        ],

        relatedProducts: ["foosball-cover-cristallino-indoor", "stratego-black", "ciclotte-black"]
    },
    {
        id: "90-minuto-iiii-wenge",
        name: "90° Minuto IIII – Венге",
        nameEn: "90° Minuto IIII – Wenge",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 11900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-90-minuto-IIII-wenge-001-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-90-minuto-IIII-wenge-002-01-768x922.png",
        isReadyToShip: true,
        inStock: true,
        stockStatus: "В наличии",

        shortDescription: "Классический стол для настольного футбола с отделкой из древесины венге.",

        attributes: [
            { name: "Материал", value: "Древесина венге" },
            { name: "Размеры", value: "Д 140 Ш 74 В 92 см" },
            { name: "Вес", value: "95 кг" }
        ],

        labels: [
            { text: "Готов к отправке", type: "custom" }
        ]
    },
    {
        id: "intervallo",
        name: "Intervallo",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 5700,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2023/12/Foosball-Intervallo-768x922.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2023/12/Foosball-Intervallo-2-768x922.jpg",
        isReadyToShip: true,
        inStock: true,
        stockStatus: "В наличии",

        shortDescription: "Компактный и стильный стол для настольного футбола.",

        labels: [
            { text: "Готов к отправке", type: "custom" }
        ]
    },
    {
        id: "cristallino-black",
        name: "Cristallino Black",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 13900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2023/06/Teckell-Cristallino-Black-2023-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2023/06/Teckell-Cristallino-Black-2023-S-2-768x922.png",
        inStock: true,
        stockStatus: "Под заказ",

        shortDescription: "Стол из закаленного стекла с черной отделкой."
    },
    {
        id: "90-minuto-ii",
        name: "90° Minuto II",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 11600,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-90-minuto-chalk-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-90-minuto-chalk-S-2-768x922.png",
        isReadyToShip: true,
        inStock: true,
        stockStatus: "В наличии",

        labels: [
            { text: "Готов к отправке", type: "custom" }
        ]
    },
    {
        id: "90-minuto-classic",
        name: "90° Minuto Classic",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 11900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-90-minuto-wood-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-90-minuto-wood-S-2-768x922.png",
        isReadyToShip: true,
        inStock: true,
        stockStatus: "В наличии",

        labels: [
            { text: "Готов к отправке", type: "custom" }
        ]
    },
    {
        id: "cristallino-gold",
        name: "Cristallino Gold LE",
        nameEn: "Cristallino Gold LE",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 17000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Cristallino-24k-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Cristallino-24k-S-2-768x922.png",
        isLimited: true,
        inStock: false,
        stockStatus: "Под заказ",

        labels: [
            { text: "Лимитированная серия", type: "limited" }
        ]
    },
    {
        id: "cristallino-classic",
        name: "Cristallino Classic",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 13900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2023/06/Teckell-Cristallino-Trasparent-2023-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2023/06/Teckell-Cristallino-Trasparent-2023-S-2-768x922.png",
        inStock: true,
        stockStatus: "В наличии"
    },
    {
        id: "fuoriclasse",
        name: "Fuoriclasse",
        category: "Настольный футбол",
        categorySlug: "foosball-tables",
        price: 14900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-1-768x922.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-2-768x922.png",
        inStock: true,
        stockStatus: "В наличии"
    },

    // ============ БИЛЬЯРД ============
    {
        id: "t11-black",
        name: "T 1.1 Black",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 40000,
        priceMax: 45000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Black-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Black-S-2-667x800.png",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true,

        shortDescription: "Бильярдный стол с черной отделкой и стеклянным основанием."
    },
    {
        id: "t11-bronze",
        name: "T 1.1 Light Bronze",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 40000,
        priceMax: 45000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-2-667x800.png",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true
    },
    {
        id: "t13-alcantara",
        name: "T 1.3 Alcantara",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 45000,
        priceMax: 50000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/03/Teckell-T-1.3-Alcantara-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/03/Teckell-T-1.3-Alcantara-S-1-1-667x800.png",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true
    },
    {
        id: "t13-gold",
        name: "T 1.3 Gold",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 50000,
        priceMax: 55000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Gold-S-1-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Gold-S-2-667x800.jpg",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true
    },
    {
        id: "t13-wenge",
        name: "T 1.3 Венге",
        nameEn: "T 1.3 Wenge",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 43000,
        priceMax: 48000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-T-1.3-Wenge-01-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-T-1.3-Wenge-02.jpg",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true
    },
    {
        id: "t13-wood",
        name: "T 1.3 Wood",
        category: "Бильярд",
        categorySlug: "pool-tables",
        price: 43000,
        priceMax: 48000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Wood-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Wood-S-2-667x800.png",
        inStock: true,
        stockStatus: "Под заказ",
        isVariable: true
    },

    // ============ НАСТОЛЬНЫЙ ТЕННИС ============
    {
        id: "effetto71-wenge",
        name: "Effetto 71 Венге",
        nameEn: "Effetto 71 wenge",
        category: "Настольный теннис",
        categorySlug: "table-tennis",
        price: 26900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Effetto-71-wenge-001-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Effetto-71-wenge-002-667x800.jpg",
        inStock: true,
        stockStatus: "Под заказ",

        shortDescription: "Стол для настольного тенниса с отделкой из древесины венге."
    },
    {
        id: "effetto71",
        name: "Effetto 71",
        category: "Настольный теннис",
        categorySlug: "table-tennis",
        price: 26900,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/02/Teckell-Table-Tennis-Effetto-71-01-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/02/Teckell-Table-Tennis-Effetto-71-02-667x800.jpg",
        inStock: true,
        stockStatus: "Под заказ"
    },

    // ============ ШАХМАТЫ (SCACCO) ============
    {
        id: "stratego-black",
        name: "Stratego Black",
        category: "Шахматы",
        categorySlug: "scacco",
        price: 7000,
        priceMax: 10000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Black-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Black-S-2-667x800.png",
        inStock: true,
        stockStatus: "В наличии",
        isVariable: true,

        shortDescription: "Шахматный стол из черного мрамора Marquina."
    },
    {
        id: "stratego-white",
        name: "Stratego White",
        category: "Шахматы",
        categorySlug: "scacco",
        price: 7000,
        priceMax: 10000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-White-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-White-S-2-667x800.png",
        inStock: true,
        stockStatus: "В наличии",
        isVariable: true
    },
    {
        id: "stratego-wood",
        name: "Stratego Wood",
        category: "Шахматы",
        categorySlug: "scacco",
        price: 7000,
        priceMax: 10000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Wood-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Wood-S-2-667x800.png",
        inStock: true,
        stockStatus: "В наличии",
        isVariable: true
    },

    // ============ ФИТНЕС ============
    {
        id: "ciclotte-glossy",
        name: "Teckell Ciclotte Glossy",
        category: "Фитнес",
        categorySlug: "fitness",
        price: 14700,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Chrome-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Chrome-S-2-667x800.png",
        inStock: true,
        stockStatus: "Под заказ",

        shortDescription: "Дизайнерский велотренажер с глянцевой отделкой."
    },
    {
        id: "ciclotte-black",
        name: "Teckell Ciclotte Black",
        category: "Фитнес",
        categorySlug: "fitness",
        price: 14000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Black-S-1-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Black-S-2-667x800.png",
        inStock: true,
        stockStatus: "В наличии"
    },

    // ============ ЧАСЫ ============
    {
        id: "presto",
        name: "Presto",
        category: "Часы",
        categorySlug: "timepieces",
        price: 25000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Presto-White-001-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Presto-White-002.png",
        inStock: true,
        stockStatus: "Под заказ",

        shortDescription: "Настольные часы из коллекции Takto."
    },
    {
        id: "adagio",
        name: "Adagio",
        category: "Часы",
        categorySlug: "timepieces",
        price: 40000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Adagio-Black-001-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Adagio-White-001-667x800.png",
        inStock: true,
        stockStatus: "Под заказ"
    },

    // ============ ATIPICA (ГУАЛЬТЕРО) ============
    {
        id: "gualtiero",
        name: "Gualtiero",
        category: "Гуальтеро",
        categorySlug: "atipica",
        price: 15500,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Gualtiero-Canaletto-wood-001-01-667x800.png",
        hoverImage: "https://teckell.store/wp-content/uploads/2025/06/Teckell-Gualtiero-Canaletto-wood-004-667x800.png",
        isReadyToShip: true,
        inStock: true,
        stockStatus: "В наличии",

        shortDescription: "Дартс с основанием из дерева Каналетто.",

        labels: [
            { text: "Готов к отправке", type: "custom" }
        ]
    },

    // ============ АКСЕССУАРЫ ДЛЯ БИЛЬЯРДА ============
    {
        id: "cue-rack",
        name: "Подставка для киев",
        nameEn: "Cue Rack",
        category: "Аксессуары для бильярда",
        categorySlug: "pool-tables-accessories",
        price: 2300,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Pooltables-accessories-Cue-rack-1-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Pooltables-accessories-Cue-rack-2-667x800.jpg",
        inStock: true,
        stockStatus: "В наличии"
    },
    {
        id: "pool-box",
        name: "Pool Box",
        category: "Аксессуары для бильярда",
        categorySlug: "pool-tables-accessories",
        price: 1000,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Accessories-Pooltables-poolbox-1-667x800.jpg",
        hoverImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Accessories-Pooltables-poolbox-2-667x800.jpg",
        inStock: true,
        stockStatus: "В наличии"
    },
    {
        id: "pool-tables-cover",
        name: "Чехол для бильярдного стола",
        nameEn: "Pool Tables Cover",
        category: "Аксессуары для бильярда",
        categorySlug: "pool-tables-accessories",
        price: 510,
        priceMax: 540,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Pooltables-Cover-667x800.png",
        inStock: true,
        stockStatus: "В наличии",
        isVariable: true
    },

    // ============ АКСЕССУАРЫ ДЛЯ ФУТБОЛА ============
    {
        id: "foosball-cover-90",
        name: "Чехол для 90° Minuto",
        nameEn: "Foosball Cover 90° Minuto",
        category: "Аксессуары для футбола",
        categorySlug: "foosball-accessories",
        price: 300,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-accessorie-Foosball-Cover-90-minuto-667x800.png",
        inStock: true,
        stockStatus: "В наличии"
    },
    {
        id: "foosball-cover-cristallino-indoor",
        name: "Чехол для Cristallino (для помещений)",
        nameEn: "Foosball Cover Cristallino Indoor",
        category: "Аксессуары для футбола",
        categorySlug: "foosball-accessories",
        price: 300,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Cover-Cristallino-1-667x800.jpg",
        inStock: true,
        stockStatus: "В наличии"
    },
    {
        id: "foosball-cover-fuoriclasse",
        name: "Чехол для Fuoriclasse",
        nameEn: "Foosball Cover Fuoriclasse",
        category: "Аксессуары для футбола",
        categorySlug: "foosball-accessories",
        price: 300,
        priceSuffix: "без НДС",
        image: "https://teckell.store/wp-content/uploads/2022/09/Teckell-accessorie-Foosball-Cover-cristallino-outdoor-667x800.png",
        inStock: true,
        stockStatus: "В наличии"
    }
];

// ============ КАТЕГОРИИ НА РУССКОМ ============
export const categories: Category[] = [
    {
        id: "foosball",
        slug: "foosball-tables",
        name: "Настольный футбол",
        nameEn: "Foosball Tables",
        description: "Teckell переосмысливает классическую игру в настольный футбол, создавая изысканный объект дизайна. Каждая модель — это синтез инноваций и традиций, где прозрачное стекло встречается с благородными материалами.",
        heroImage: "/images/1.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Categorie_Calcio-balilla-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "foosball-tables").length
    },
    {
        id: "pool",
        slug: "pool-tables",
        name: "Бильярд",
        nameEn: "Pool Tables",
        description: "Бильярдные столы Teckell — это синтез инноваций и традиций, искусства и дизайна, технологий и мастерства. Каждый стол создается вручную из лучших материалов.",
        heroImage: "/images/2.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Categoria-Biliardo-White-150x150.png",
        productCount: 6,
        subcategories: [
            {
                id: "pool-accessories",
                slug: "pool-tables-accessories",
                name: "Аксессуары для бильярда",
                productCount: 3
            }
        ]
    },
    {
        id: "tennis",
        slug: "table-tennis",
        name: "Настольный теннис",
        nameEn: "Table Tennis",
        description: "Настольный теннис обретает фирменный стиль Teckell в модели Effetto 71. Стол, который сочетает в себе элегантность дизайна и функциональность профессионального оборудования.",
        heroImage: "/images/3.jpg",
        icon: "https://teckell.store/wp-content/uploads/2024/01/Icon-Category-Table-Tennis-white-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "table-tennis").length
    },
    {
        id: "scacco",
        slug: "scacco",
        name: "Шахматы",
        nameEn: "Scacco",
        description: "Teckell достиг идеального баланса с элегантным дизайном, создавая новое прочтение древней игры. Шахматные столы из мрамора и стекла — для ценителей прекрасного.",
        heroImage: "/images/4.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Guide-Scacco-11-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "scacco").length
    },
    {
        id: "fitness",
        slug: "fitness",
        name: "Фитнес",
        nameEn: "Fitness",
        description: "Teckell принимает новый вызов, устремляясь к передовому краю дизайна. Ciclotte — это велотренажер, который становится арт-объектом в вашем интерьере.",
        heroImage: "/images/5.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icon-Category-Fitness-White-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "fitness").length
    },
    {
        id: "timepieces",
        slug: "timepieces",
        name: "Часы",
        nameEn: "Timepieces",
        description: "Takto Timepieces от Teckell принимает вечный вызов человека против времени. Настольные часы, сочетающие минимализм и высокие технологии.",
        heroImage: "/images/6.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Categoria-Takto-White-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "timepieces").length
    },
    {
        id: "atipica",
        slug: "atipica",
        name: "Гуальтеро",
        nameEn: "Atipica",
        description: "Кабинет curiosities с дартсом в основании и профиле из дерева Каналетто. Уникальный предмет для любителей нестандартных решений.",
        heroImage: "/images/7.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Categorie_Calcio-balilla-150x150.png",
        productCount: allProducts.filter(p => p.categorySlug === "atipica").length
    },
    {
        id: "foosball-accessories",
        slug: "foosball-accessories",
        name: "Аксессуары для футбола",
        nameEn: "Foosball Accessories",
        description: "Оригинальные чехлы и аксессуары для настольного футбола Teckell. Защитите вашу инвестицию в стиль.",
        heroImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-accessorie-Foosball-Cover-90-minuto-667x800.png",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Guide-Accessori-Pool-Tables-10-150x150.png",
        productCount: 3
    },
    {
        id: "pool-accessories",
        slug: "pool-tables-accessories",
        name: "Аксессуары для бильярда",
        nameEn: "Pool Tables Accessories",
        description: "Оригинальные аксессуары для бильярдных столов Teckell. Подставки, боксы и чехлы — всё для идеальной игры.",
        heroImage: "https://teckell.store/wp-content/uploads/2022/09/Teckell-Pooltables-accessories-Cue-rack-1-667x800.jpg",
        icon: "https://teckell.store/wp-content/uploads/2022/09/Icone-Guide-Accessori-Pool-Tables-10-150x150.png",
        productCount: 3
    }
];

// ============ ФУНКЦИИ ДЛЯ РАБОТЫ С ДАННЫМИ ============

// Получить товары по категории
export function getProductsByCategory(slug: string): Product[] {
    return allProducts.filter(product => product.categorySlug === slug);
}

// Получить категорию по slug
export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(category => category.slug === slug);
}

// ПОЛУЧИТЬ ТОВАР ПО SLUG (ID)
export function getProductBySlug(slug: string): Product | undefined {
    return allProducts.find(product => product.id === slug);
}

// Получить связанные товары
export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
    const product = getProductBySlug(productId);
    if (!product) return [];

    // Товары из той же категории, исключая текущий
    const related = allProducts.filter(p =>
        p.categorySlug === product.categorySlug &&
        p.id !== product.id
    ).slice(0, limit);

    // Если недостаточно, добавить случайные товары
    if (related.length < limit) {
        const others = allProducts.filter(p =>
            p.categorySlug !== product.categorySlug &&
            !related.some(r => r.id === p.id)
        ).slice(0, limit - related.length);

        return [...related, ...others];
    }

    return related;
}

// Получить товары по ID
export function getProductById(id: string): Product | undefined {
    return allProducts.find(product => product.id === id);
}

// Получить товары по массиву ID
export function getProductsByIds(ids: string[]): Product[] {
    return allProducts.filter(product => ids.includes(product.id));
}

// Получить избранные товары
export function getFeaturedProducts(count: number = 8): Product[] {
    return allProducts.slice(0, count);
}

// Получить товары "готовы к отправке"
export function getReadyToShipProducts(): Product[] {
    return allProducts.filter(product => product.isReadyToShip);
}

// Получить новые товары
export function getNewProducts(): Product[] {
    return allProducts.filter(product => product.isNew);
}

// Получить товары в ценовом диапазоне
export function getProductsByPriceRange(min: number, max: number): Product[] {
    return allProducts.filter(product =>
        product.price >= min &&
        product.price <= (product.priceMax || product.price)
    );
}

// ФОРМАТИРОВАНИЕ ЦЕНЫ - ЕДИНАЯ ФУНКЦИЯ ДЛЯ ВСЕГО ПРИЛОЖЕНИЯ
export function formatPrice(price: number | undefined | null): string {
    if (typeof price !== 'number' || isNaN(price)) {
        return '0';
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Получить числовое значение цены для фильтров
export function getNumericPrice(price: number | undefined | null): number {
    if (typeof price !== 'number' || isNaN(price)) {
        return 0;
    }
    return price;
}

// Получить минимальную цену в категории
export function getMinPriceInCategory(slug: string): number {
    const products = getProductsByCategory(slug);
    const prices = products.map(p => p.price);
    const maxPrices = products.map(p => p.priceMax).filter((p): p is number => p !== undefined);
    const allPrices = [...prices, ...maxPrices];
    return allPrices.length > 0 ? Math.min(...allPrices) : 0;
}

// Получить максимальную цену в категории
export function getMaxPriceInCategory(slug: string): number {
    const products = getProductsByCategory(slug);
    const prices = products.map(p => p.price);
    const maxPrices = products.map(p => p.priceMax).filter((p): p is number => p !== undefined);
    const allPrices = [...prices, ...maxPrices];
    return allPrices.length > 0 ? Math.max(...allPrices) : 100000;
}





// data/categories.ts - ДОБАВЛЯЕМ В КОНЕЦ ФАЙЛА

// ============ СТАНДАРТНЫЕ ТАБЫ ДЛЯ ВСЕХ ТОВАРОВ ============

// Стандартный таб "О бренде" для всех товаров Teckell
export const DEFAULT_BRAND_TAB = {
    title: "О бренде",
    content: `<p class="mb-4">Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана.</p>
              <p class="mb-4">«Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот».</p>
              <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
    logo: "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell-170x50.png"
};

// Стандартный таб "Доставка" для всех товаров Teckell
export const DEFAULT_SHIPPING_TAB = {
    title: "Доставка",
    content: `<div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-2" style="font-weight: 600; margin-bottom: 0.5rem;">Время производства</h3>
                    <p class="text-gray-700">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-2" style="font-weight: 600; margin-bottom: 0.5rem;">Сроки доставки</h3>
                    <p class="text-gray-700">Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>
                </div>
              </div>`,
    images: [
        "https://teckell.store/wp-content/uploads/2022/11/pexels-karolina-grabowska-4498135-scaled-350x450.jpg",
        "https://teckell.store/wp-content/uploads/2022/11/pexels-norma-mortenson-4391470-scaled-350x450.jpg"
    ]
};

// Функция для получения таба "О бренде" (можно переопределить для конкретных товаров)
export function getBrandTab(product?: Product) {
    // Если у товара есть свой brandTab, используем его
    if (product?.brandTab) {
        return product.brandTab;
    }
    // Иначе возвращаем стандартный
    return DEFAULT_BRAND_TAB;
}

// Функция для получения таба "Доставка" (можно переопределить для конкретных товаров)
export function getShippingTab(product?: Product) {
    // Если у товара есть свой shippingTab, используем его
    if (product?.shippingTab) {
        return product.shippingTab;
    }
    // Иначе возвращаем стандартный
    return DEFAULT_SHIPPING_TAB;
}

// Функция для получения кнопки "ЕЩЕ ТОВАРЫ"
export function getMoreProductsButton(categorySlug?: string) {
    return {
        text: "ЕЩЕ ТОВАРЫ",
        link: categorySlug ? `/category/${categorySlug}` : "/category"
    };
}