// data/categories.ts
export interface HeroSection {
    subtitle: string;
    title: string;
    quote: string;
    buttonAddToCart: string;
    buttonViewMore: string;
    backgroundImage: string;
    dataId: string;
    dataSettings: {
        background_background: string;
    };
}

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
    heroSection?: HeroSection; // ✅ опциональное поле

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

    // Добавляем поле для изображения гайда размеров
    sizeGuideImage?: string;   // URL изображения с размерами
    sizeGuideImageWidth?: number;  // Опционально: ширина изображения
    sizeGuideImageHeight?: number; // Опционально: высота изображения

    // Добавляем поля для второго изображения (для T1.1)
    sizeGuideImage2?: string;
    sizeGuideImage2Width?: number;
    sizeGuideImage2Height?: number;
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
            <p class="text-gray-700 italic">Идеальный синтез артистизма и инноваций</p>
            
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

        images: [
            "https://teckell.store/wp-content/uploads/2025/06/Teckell-90-minuto-IIII-wenge-001-768x922.png",
            "https://teckell.store/wp-content/uploads/2025/06/Teckell-90-minuto-IIII-wenge-003-768x922.png",
            "https://teckell.store/wp-content/uploads/2025/06/Teckell-90-minuto-IIII-wenge-002-01-768x922.png"
        ],

        shortDescription: "Классический стол для настольного футбола с отделкой из древесины венге.",

        fullDescription: `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">90° Minuto IIII – Венге</h4>
            <p class="text-gray-700">Удивительно шикарный взгляд на вечную игру в настольный футбол.</p>
            
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Изготовлена из редкой и драгоценной массированной фрезерованной древесины венге.</li>
                <li><strong>Периметр корпуса:</strong> 15-миллиметровое прозрачное стекло с низким содержанием железа, вертикальные пластины съемные и заменяемые. Каждый компонент отполирован оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из закаленного стекла с низким содержанием железа. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда — анодированный алюминий без покрытия, вторая — черный анодированный алюминий.</li>
                <li><strong>Ручки:</strong> Из древесины венге с быстросъемным креплением, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Из древесины венге.</li>
                <li><strong>Ворота:</strong> Из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические, концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>
            
            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>
        </div>
    `,

        brand: "Teckell",
        brandLogo: "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell.png",

        attributes: [
            { name: "Материал", value: "Древесина венге" },
            { name: "Размеры стола", value: "Д 140 Ш 74/174* В 92 см" },
            { name: "Вес", value: "75 кг" },
            { name: "Требуется сборка", value: "Да" },
            { name: "Тип упаковки", value: "Коробка" },
            { name: "Размер упаковки", value: "Д 140 Ш 90 В 52 см" },
            { name: "Вес упаковки", value: "106 кг" }
        ],

        dimensions: {
            length: "140 см",
            width: "74/174 см",
            height: "92 см"
        },
        weight: "75 кг",
        packaging: {
            type: "Коробка",
            dimensions: "Д 140 Ш 90 В 52 см",
            weight: "106 кг"
        },
        assemblyRequired: true,

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
            { text: "Готов к отправке", type: "custom" }
        ],

        relatedProducts: ["foosball-cover-90-minuto", "stratego-wood", "t-1-3-wood"]
    },
    {
        "id": "foosball-intervallo",
        "name": "Intervallo",
        "nameEn": "Intervallo",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 5700,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGRm9zc2JhbGwtSW50ZXJ2YWxsby5qcGcmY2FjaGVNYXJrZXI9MTc3MDM5OTYwNS0yNDI2MDEmdG9rZW49NzkwMmJlNGY5M2ZkNzk3Ng.q.jpg",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGRm9zc2JhbGwtSW50ZXJ2YWxsby0yLmpwZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjA0LTI2MDU0OSZ0b2tlbj04ZThkNjJkMjk0ZGJiODg2.q.jpg",
        "isReadyToShip": true,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGRm9zc2JhbGwtSW50ZXJ2YWxsby5qcGcmY2FjaGVNYXJrZXI9MTc3MDM5OTYwNS0yNDI2MDEmdG9rZW49NzkwMmJlNGY5M2ZkNzk3Ng.q.jpg",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGRm9zc2JhbGwtSW50ZXJ2YWxsby0yLmpwZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjA0LTI2MDU0OSZ0b2tlbj04ZThkNjJkMjk0ZGJiODg2.q.jpg",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGRm9zc2JhbGwtSW50ZXJ2YWxsby0zLmpwZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjA0LTM0MjIxMyZ0b2tlbj0wYTVhNDY3ZTZmM2EwODQy.q.jpg"
        ],

        "shortDescription": "Интервал — это больше, чем перерыв: это интерлюдия, чтобы обдумать все, увидеть мир с другой перспективы и разработать новые тактики, прежде чем вернуться в игру.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">Intervallo</h4>
            <p class="text-gray-700">Интервал — это больше, чем перерыв: это интерлюдия, чтобы обдумать все, увидеть мир с другой перспективы и разработать новые тактики, прежде чем вернуться в игру.</p>
            
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Цельная фрезерованная конструкция из массива ореха Каналетто.</li>
                <li><strong>Периметр корпуса:</strong> Из закаленного стекла с низким содержанием железа толщиной 15 мм. Вертикальные пластины выполнены из закаленного стекла с низким содержанием железа; изогнутые торцы подверглись процессу горячей гибки. Каждый компонент отполирован оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из прозрачного закаленного стекла толщиной 12 мм. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Из алюминия: одна команда — бесцветный анодированный алюминий, другая — черный анодированный алюминий.</li>
                <li><strong>Ручки:</strong> Быстросъемные ручки из ореха Каналетто, которые идеально подходят, а также могут быть сняты и заменены.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические. Концы штанг имеют двухслойную амортизацию. Штанги оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>
            
            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>
            
            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell-170x50.png",

        "attributes": [
            { "name": "Материал", "value": "Орех Каналетто, закаленное стекло" },
            { "name": "Размеры стола", "value": "Д 87 Ш 54 В 44 см" },
            { "name": "Вес", "value": "28 кг" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 97 Ш 64 В 67 см" },
            { "name": "Вес упаковки", "value": "48 кг" }
        ],

        "dimensions": {
            "length": "87 см",
            "width": "54 см",
            "height": "44 см"
        },
        "weight": "28 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 97 Ш 64 В 67 см",
            "weight": "48 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjEyJTJGR3VpZGxpbmVzLUZvb3NiYWxsLUludGVydmFsbGkuanBnJmNhY2hlTWFya2VyPTE3NzAzOTk2MDMtNDgwNzcmdG9rZW49ODYyODZhNzg2Mzg1ZTkxZQ.q.jpg",
        "sizeGuideImageWidth": 1920,
        "sizeGuideImageHeight": 641,

        "brandTab": {
            "title": "О бренде",
            "content": `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                  <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            "logo": "https://teckell.store/wp-content/uploads/2022/09/Brand-Teckell-170x50.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                 <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p>
                 <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                 <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [
            { "text": "Готов к отправке", "type": "custom" }
        ],

        "relatedProducts": ["cristallino-black", "effetto-71", "90-minuto-classic"]
    },
    {
        "id": "cristallino-black",
        "name": "Cristallino Black",
        "nameEn": "Cristallino Black",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 13900,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1CbGFjay0yMDIzLVMtMS5wbmcmY2FjaGVNYXJrZXI9MTc3MDM5OTY1NS0zNzI0MTQmdG9rZW49ZDM4Yjc4NjY0YWNjNDliMw.q.png",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1CbGFjay0yMDIzLVMtMi5wbmcmY2FjaGVNYXJrZXI9MTc3MDM5OTY0Ni00MjQ4NzAmdG9rZW49ODEyMTU5YmQ0YjAwODQ4ZA.q.png",
        "isReadyToShip": false,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1CbGFjay0yMDIzLVMtMS5wbmcmY2FjaGVNYXJrZXI9MTc3MDM5OTY1NS0zNzI0MTQmdG9rZW49ZDM4Yjc4NjY0YWNjNDliMw.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1CbGFjay0yMDIzLVMtMi5wbmcmY2FjaGVNYXJrZXI9MTc3MDM5OTY0Ni00MjQ4NzAmdG9rZW49ODEyMTU5YmQ0YjAwODQ4ZA.q.png"
        ],

        "shortDescription": "Оригинал, от его дизайна до создания и финальной отделки.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">Cristallino Black</h4>
            <p class="text-gray-700">Cristallino создан с использованием передовых технологий и умелых рук итальянских мастеров, которые совершенствуют каждую деталь для создания уникального и эксклюзивного произведения искусства.</p>
            
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм, с углами, отполированными оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из многослойного тонированного стекла. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда — бесцветный анодированный алюминий, другая — черный анодированный алюминий.</li>
                <li><strong>Ручки:</strong> Хромированная латунь. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Хромированная латунь.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Соединения:</strong> Латунные и стальные фрезерованные соединения. Хромированные и полированные. Склеенные элементы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические. Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>
            
            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>
            
            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "Trasparent | Black" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес", "value": "124 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 134 Ш 100 В 58 см" },
            { "name": "Вес упаковки", "value": "153 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "124 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 134 Ш 100 В 58 см",
            "weight": "153 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGFfU2l6ZS1CbGFjay5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNjI0MC01NDU4MCZ0b2tlbj1lOGEzMWMwODlkYjdiYjA3.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                  <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                 <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p>
                 <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                 <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [],

        "relatedProducts": ["foosball-cover-cristallino-indoor", "stratego-black", "teckell-ciclotte-black"]
    },
    {
        "id": "90-minuto-ii",
        "name": "90° Minuto II",
        "nameEn": "90° Minuto II",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 11600,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8tY2hhbGstUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NTI5LTI3NDU5OSZ0b2tlbj0xM2QzMGQzZDAwZTJiOWU0.q.png",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8tY2hhbGstUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NTQ3LTI4ODI1MiZ0b2tlbj0wMDBlMmFjNzlmMmNlMzZl.q.png",
        "isReadyToShip": true,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8tY2hhbGstUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NTI5LTI3NDU5OSZ0b2tlbj0xM2QzMGQzZDAwZTJiOWU0.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8tY2hhbGstUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NTQ3LTI4ODI1MiZ0b2tlbj0wMDBlMmFjNzlmMmNlMzZl.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8tY2hhbGstUy0zLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NTY1LTI1NDA1OSZ0b2tlbj00YzVjNzM4NzUzNzNlYzZj.q.png"
        ],

        "shortDescription": "Удивительно шикарный взгляд на вечную игру в настольный футбол.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">90° Minuto II</h4>
            <p class="text-gray-700">Удивительно шикарный взгляд на вечную игру в настольный футбол.</p>

            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Массив дерева, окрашенный в цвет меловой белизны.</li>
                <li><strong>Периметр корпуса:</strong> Из стекла толщиной 15 мм. Вертикальные пластины из закаленного стекла с низким содержанием железа, являются сменными. Каждый компонент отполирован оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из прозрачного закаленного стекла толщиной 12 мм.</li>
                <li><strong>Фигурки игроков:</strong> Из алюминия: одна команда окрашена в меловой белый цвет, другая — в черный.</li>
                <li><strong>Ручки:</strong> Алюминий, окрашенный в меловой белый цвет. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Алюминиевый, окрашен в меловой белый цвет.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические, хромированные. Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>

            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>

            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "Chalk White | Black" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес стола", "value": "75 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 140 Ш 90 В 52 см" },
            { "name": "Вес упаковки", "value": "106 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "75 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 140 Ш 90 В 52 см",
            "weight": "106 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjEwJTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGEtOTAtbWF0dGUtMS5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwMjQ1NS03MzQxMyZ0b2tlbj1hYzlhOWQwYTliMzgxYzg3.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                  <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                 <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p>
                 <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                 <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [
            { "text": "Готов к отправке", "type": "custom" }
        ],

        "relatedProducts": ["foosball-cover-90-minuto", "stratego-white", "cristallino-outdoor"]
    },
    {
        "id": "90-minuto-classic",
        "name": "90° Minuto Classic",
        "nameEn": "90° Minuto Classic",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 11900,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8td29vZC1TLTEucG5nJmNhY2hlTWFya2VyPTE3NzA0MDQ1ODUtNDUzOTU1JnRva2VuPTVhOTQ1OTM5NWJmNTY5MDI.q.png",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8td29vZC1TLTIucG5nJmNhY2hlTWFya2VyPTE3NzA0MDQ2MDktNTcyNDM2JnRva2VuPTlkMjE5NmU3MWU0NDc4NTY.q.png",
        "isReadyToShip": true,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8td29vZC1TLTEucG5nJmNhY2hlTWFya2VyPTE3NzA0MDQ1ODUtNDUzOTU1JnRva2VuPTVhOTQ1OTM5NWJmNTY5MDI.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8td29vZC1TLTIucG5nJmNhY2hlTWFya2VyPTE3NzA0MDQ2MDktNTcyNDM2JnRva2VuPTlkMjE5NmU3MWU0NDc4NTY.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC05MC1taW51dG8td29vZC1TLTMucG5nJmNhY2hlTWFya2VyPTE3NzA0MDQ2MzQtMzg0MzM2JnRva2VuPTU0ZjI4YjJlYzI2Mzg3MzQ.q.png"
        ],

        "shortDescription": "Удивительно шикарный взгляд на вечную игру в настольный футбол.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">90° Minuto Classic</h4>
            <p class="text-gray-700">Удивительно шикарный взгляд на вечную игру в настольный футбол.</p>

            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Массив фрезерованного ореха Каналетто.</li>
                <li><strong>Периметр корпуса:</strong> Из стекла толщиной 15 мм. Вертикальные пластины из закаленного стекла с низким содержанием железа; изогнутые торцы подверглись процессу горячей гибки. Каждый компонент отполирован оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из толстого закаленного стекла с низким содержанием железа. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда из ореха Каналетто, другая — из ясеня.</li>
                <li><strong>Ручки:</strong> Орех Каналетто. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Орех Каналетто.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>

            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>

            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "Canaletto Walnut | Ash" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес стола", "value": "75 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 140 Ш 90 В 52 см" },
            { "name": "Вес упаковки", "value": "106 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "75 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 140 Ш 90 В 52 см",
            "weight": "106 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGEtOTAtbWludXRvLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA2MTc1LTU2NjQxJnRva2VuPTg1YzI4ODU1YWYwNDMzMWI.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                  <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                 <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p>
                 <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                 <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [
            { "text": "Готов к отправке", "type": "custom" }
        ],

        "relatedProducts": ["foosball-cover-90-minuto", "90-minuto-ii", "cristallino-outdoor"]
    },
    {
        "id": "cristallino-gold",
        "name": "Cristallino Gold LE",
        "nameEn": "Cristallino Gold LE",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 17000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC1DcmlzdGFsbGluby0yNGstUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NjUyLTM4MjA3MiZ0b2tlbj1mZDUwYjUxMjAwZTM1Mjcw.q.png",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC1DcmlzdGFsbGluby0yNGstUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NjcxLTQzMTk5OSZ0b2tlbj04NDU3NmVlOWFkNDU2NWQw.q.png",
        "isLimited": true,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC1DcmlzdGFsbGluby0yNGstUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NjUyLTM4MjA3MiZ0b2tlbj1mZDUwYjUxMjAwZTM1Mjcw.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC1DcmlzdGFsbGluby0yNGstUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0NjcxLTQzMTk5OSZ0b2tlbj04NDU3NmVlOWFkNDU2NWQw.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGVGVja2VsbC1DcmlzdGFsbGluby0yNGstUy0zLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA0Njg4LTM4NDY0MCZ0b2tlbj1hNjkxNTVkOTgyNzRlZmRk.q.png"
        ],

        "shortDescription": "Лимитированная серия 24k.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">Cristallino Gold LE</h4>
            <p class="text-gray-700">Лимитированная серия 24k.</p>

            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм, с углами, отполированными оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из многослойного тонированного стекла. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда из алюминия с покрытием 24-каратным золотом, другая — из блестящего хромированного алюминия.</li>
                <li><strong>Ручки:</strong> Латунь с хромированным покрытием. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Концевые элементы из латуни с покрытием 24-каратным золотом и хромированные латунные детали.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Соединения:</strong> Фрезерованные латунные и стальные соединения. Покрыты 24-каратным золотом и отполированы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические, хромированные. Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>

            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>

            <p class="text-gray-700 mt-4"><strong>Коллекционная лимитированная серия Teckell<sup>®</sup></strong></p>
            <p class="text-gray-700">Серийный номер каждого изделия лимитированной серии нанесен на концевой элемент счетчика голов с покрытием 24-каратным золотом.</p>

            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Сертификат подлинности Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "24K Gold Plated | Chrome" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес стола", "value": "124 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 134 Ш 100 В 58 см" },
            { "name": "Вес упаковки", "value": "153 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "124 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 134 Ш 100 В 58 см",
            "weight": "153 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGEtMjQtR09MRC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNjE4OS01MTU4MiZ0b2tlbj00Yzk0Y2JiYzEwZGRjMzBh.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": `<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p>
                  <p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>`,
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": `<h3 class="text-lg font-semibold mb-2"><strong>Время производства</strong></h3>
                 <p class="mb-4">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p>
                 <h4 class="text-md font-semibold mb-2"><strong>Сроки доставки</strong></h4>
                 <p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>`,
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [
            { "text": "Лимитированная серия", "type": "limited" }
        ],

        "relatedProducts": ["foosball-cover-cristallino-indoor", "cristallino-black", "t-1-1-light-bronze"]
    },
    {
        "id": "cristallino-classic",
        "name": "Cristallino Classic",
        "nameEn": "Cristallino Classic",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 13900,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1UcmFzcGFyZW50LTIwMjMtUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjYzLTM0NjE0MiZ0b2tlbj04YzIyM2JlNDZmNjI0M2M3.q.png",
        "hoverImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1UcmFzcGFyZW50LTIwMjMtUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjcyLTQyMzc5MyZ0b2tlbj02ZDIzOGVkODk4YTM4NTNk.q.png",
        "isLimited": false,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1UcmFzcGFyZW50LTIwMjMtUy0xLnBuZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjYzLTM0NjE0MiZ0b2tlbj04YzIyM2JlNDZmNjI0M2M3.q.png",
            "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMyUyRjA2JTJGVGVja2VsbC1DcmlzdGFsbGluby1UcmFzcGFyZW50LTIwMjMtUy0yLnBuZyZjYWNoZU1hcmtlcj0xNzcwMzk5NjcyLTQyMzc5MyZ0b2tlbj02ZDIzOGVkODk4YTM4NTNk.q.png"
        ],

        "shortDescription": "Оригинал от дизайна до создания и финальной отделки.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">Cristallino Classic</h4>
            <p class="text-gray-700">Cristallino создан с использованием передовых технологий и умелых рук итальянских мастеров, которые совершенствуют каждую деталь ради уникального и эксклюзивного произведения искусства.</p>

            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм, с углами, отполированными оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из многослойного стекла. Толстая стеклянная конструкция увеличивает скорость игры.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда из бесцветного анодированного алюминия, другая — из черного анодированного алюминия.</li>
                <li><strong>Ручки:</strong> Латунь с хромированным покрытием. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Латунь с хромированным покрытием.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Соединения:</strong> Фрезерованные латунные и стальные соединения. Покрыты хромом и отполированы. Проклеенные элементы.</li>
                <li><strong>Ножки:</strong> Скрытые, регулируемые для выравнивания стола.</li>
                <li><strong>Штанги:</strong> Телескопические. Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>

            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении.</p>

            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "Прозрачный | Черный" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес стола", "value": "124 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 134 Ш 100 В 58 см" },
            { "name": "Вес упаковки", "value": "153 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "124 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 134 Ш 100 В 58 см",
            "weight": "153 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGFfU2l6ZS1UcmFzcGFyZW50LnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA2MjI0LTU1MjA5JnRva2VuPTkyZGM1ZGM1NDM1MjkwZGQ.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3 class=\"text-lg font-semibold mb-2\"><strong>Время производства</strong></h3><p class=\"mb-4\">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4 class=\"text-md font-semibold mb-2\"><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [],

        "relatedProducts": ["foosball-cover-cristallino-indoor", "teckell-ciclotte-glossy", "t-1-1-black"]
    },
    {
        "id": "fuoriclasse",
        "name": "Fuoriclasse",
        "nameEn": "Fuoriclasse",
        "category": "Настольный футбол",
        "categorySlug": "foosball-tables",
        "price": 14900,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-1-768x922.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-2-768x922.png",
        "isLimited": false,
        "inStock": true,
        "stockStatus": "В наличии",

        "images": [
            "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-1.png",
            "https://teckell.store/wp-content/uploads/2024/07/Teckell-Fuoriclasse-S-2.png"
        ],

        "shortDescription": "Отправляйтесь на новые территории.",

        "fullDescription": `
        <div class="space-y-6">
            <h4 class="text-2xl font-serif text-[#aea062]">Fuoriclasse</h4>
            <p class="text-gray-700">Вид в хрустале и Corian® открывает далекие горизонты.</p>

            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><strong>Конструкция:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм, с углами, отполированными оксидом церия.</li>
                <li><strong>Игровое поле:</strong> Из чистого белого Corian®, что делает этот стол подходящим для использования на открытом воздухе.</li>
                <li><strong>Фигурки игроков:</strong> Одна команда из алюминия с белым порошковым покрытием, другая — из алюминия с черным порошковым покрытием.</li>
                <li><strong>Ручки:</strong> Латунь с хромированным покрытием. Быстросъемное крепление, которое идеально подходит и может быть снято и заменено.</li>
                <li><strong>Счетчик голов:</strong> Латунь с хромированным покрытием.</li>
                <li><strong>Ворота:</strong> Рамы из полированной нержавеющей стали с черными сетками ручной работы.</li>
                <li><strong>Соединения:</strong> Фрезерованные латунные соединения. Покрыты хромом и отполированы.</li>
                <li><strong>Ножки:</strong> Регулируемые ножки для неровной поверхности.</li>
                <li><strong>Штанги:</strong> Телескопические штанги из нержавеющей стали AISI 316. Концы штанг имеют двухслойную амортизацию. Оснащены специальными самоочищающимися подшипниками для тихого, плавного и быстрого скольжения.</li>
            </ul>

            <p class="text-gray-600 italic mt-4">Разработано для использования в помещении и на открытом воздухе.</p>

            <p class="text-gray-700 mt-4"><strong>Каждый стол для настольного футбола включает:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Гарантийный сертификат Teckell<sup>®</sup>.</li>
                <li>Инструкции и инструменты для сборки и ухода за изделием (включая специальную смазку для плавной игры).</li>
            </ul>
        </div>
    `,

        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",

        "attributes": [
            { "name": "Модификация", "value": "Белый" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 140 Ш 74/174* В 92 см" },
            { "name": "Вес стола", "value": "116 кг" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 134 Ш 100 В 58 см" },
            { "name": "Вес упаковки", "value": "145 кг" }
        ],

        "dimensions": {
            "length": "140 см",
            "width": "74/174 см",
            "height": "92 см"
        },
        "weight": "116 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 134 Ш 100 В 58 см",
            "weight": "145 кг"
        },
        "assemblyRequired": true,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQ2FsY2lvLUJhbGlsbGFfU2l6ZS1XaGl0ZS5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNjIwNi01NjA0NCZ0b2tlbj1jNmYxNWU5MTI3MzY0YjRl.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,

        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 10 символов",
            "maxLength": 10
        },

        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3 class=\"text-lg font-semibold mb-2\"><strong>Время производства</strong></h3><p class=\"mb-4\">Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4 class=\"text-md font-semibold mb-2\"><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "labels": [],

        "relatedProducts": ["foosball-cover-fuoriclasse", "stratego-white", "cue-rack"]
    },

    // ============ БИЛЬЯРД ============
    {
        "id": "t11-black",
        "name": "Бильярдный стол T 1.1 Black",
        "nameEn": "T 1.1 Black",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 40000,
        "priceMax": 45000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Black-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Black-S-2-667x800.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Бильярдный стол с черной отделкой и стеклянным основанием.",
        "fullDescription": "<ul><li><strong>Размер:</strong> Доступен в двух размерах: 9 футов и 8 футов.</li><li><strong>Рама:</strong> Цельные алюминиевые направляющие с черным анодированным покрытием «змеиная кожа».</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Игровое поле выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Подключай и играй:</strong> Сукно можно легко заменить. Простая и безупречная техника натяжки сукна для идеально ровной игровой поверхности.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/?v=5d9f86dfc490\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Размер", "value": "9 футов" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x152-180x32 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 140-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [
            { "text": "Под заказ", "type": "custom" }
        ],
        "relatedProducts": ["cristallino-black", "pool-tables-cover", "stratego-black", "teckell-ciclotte-black"]
    },
    {
        "id": "t11-bronze",
        "name": "Бильярдный стол T 1.1 Light Bronze",
        "nameEn": "T 1.1 Light Bronze",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 40000,
        "priceMax": 45000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-2-667x800.png",
        "images": [
            "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-1.png",
            "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-2.png",
            "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.1-Bronze-S-3.png"
        ],
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "isLimited": false,
        "shortDescription": "Бильярдный стол с бронзовой отделкой и стеклянным основанием. Минимализм, который умеет веселиться.",
        "fullDescription": "<ul><li><strong>Размер:</strong> Доступен в двух размерах: 9 футов и 8 футов.</li><li><strong>Рама:</strong> Цельные алюминиевые направляющие с покрытием «змеиная кожа» цвета светлой бронзы.</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Игровое поле выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Подключай и играй:</strong> Сукно можно легко заменить. Простая и безупречная техника натяжки сукна для идеально ровной игровой поверхности.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "9 футов" },
            { "name": "Спецификация", "value": "8 футов" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола (9 футов)", "value": "Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in" },
            { "name": "Размеры стола (8 футов)", "value": "Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in" },
            { "name": "Вес стола (9 футов)", "value": "400 кг | 882 lbs" },
            { "name": "Вес стола (8 футов)", "value": "330 кг | 727 1/2 lbs" },
            { "name": "Тип упаковки", "value": "Коробка 1, 2, 3" },
            { "name": "Размер коробки 1 (9 футов)", "value": "Д 305 Ш 180 В 32 см | Д 120\" Ш 70.9\" В 12.6\"" },
            { "name": "Размер коробки 1 (8 футов)", "value": "Д 278 Ш 32 В 152 см | Д 109\" Ш 12.6\" В 53.8\"" },
            { "name": "Вес коробки 1 (9 футов)", "value": "393 кг | 866.4 lbs" },
            { "name": "Вес коробки 1 (8 футов)", "value": "312 кг | 687.8 lbs" },
            { "name": "Размер коробки 2", "value": "Д 82 Ш 82 В 34 см | Д 32.3\" Ш 32.3\" В 13.4\"" },
            { "name": "Вес коробки 2 (9 футов)", "value": "135 кг | 297.6 lbs" },
            { "name": "Вес коробки 2 (8 футов)", "value": "110 кг | 242.5 lbs" },
            { "name": "Размер коробки 3", "value": "Д 134 Ш 100 В 58 см | Д 52.8\" Ш 39.4\" В 22.8\"" },
            { "name": "Вес коробки 3 (9 футов)", "value": "140 кг | 308.6 lbs" },
            { "name": "Вес коробки 3 (8 футов)", "value": "149 кг | 328.5 lbs" },
            { "name": "Размер", "value": "9 футов" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x152-180x32 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 140-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [
            { "text": "Под заказ", "type": "custom" }
        ],
        "relatedProducts": ["t11-black", "cristallino-black", "pool-tables-cover", "stratego-black", "teckell-ciclotte-black"]
    },
    {
        "id": "t13-alcantara",
        "name": "Бильярдный стол T 1.3 Alcantara",
        "nameEn": "T 1.3 Alcantara",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 45000,
        "priceMax": 50000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/03/Teckell-T-1.3-Alcantara-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/03/Teckell-T-1.3-Alcantara-S-1-1-667x800.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Teckell T1.3 — такой же основательный, как и элегантный.",
        "fullDescription": "<ul><li><strong>Размер:</strong> 8 футов и 9 футов.</li><li><strong>Рама:</strong> Цельные алюминиевые направляющие с вставками из Alcantara® (доступны в широкой палитре цветов Alcantara®).</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Plug and Play:</strong> Сукно и борта легко заменяются. Безупречная техника натяжки сукна обеспечивает идеально ровную игровую поверхность. Вставки, покрытые Alcantara®, крепятся магнитами, что позволяет легко их снимать и заменять.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "9 футов" },
            { "name": "Спецификация", "value": "8 футов" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола (9 футов)", "value": "Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in" },
            { "name": "Размеры стола (8 футов)", "value": "Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in" },
            { "name": "Вес стола (9 футов)", "value": "400 кг | 882 lbs" },
            { "name": "Вес стола (8 футов)", "value": "330 кг | 727 1/2 lbs" },
            { "name": "Тип упаковки", "value": "Коробка 1, 2, 3" },
            { "name": "Размер коробки 1 (9 футов)", "value": "Д 305 Ш 180 В 32 см | Д 120\" Ш 70.9\" В 12.6\"" },
            { "name": "Размер коробки 1 (8 футов)", "value": "Д 278 Ш 32 В 152 см | Д 109\" Ш 12.6\" В 53.8\"" },
            { "name": "Вес коробки 1 (9 футов)", "value": "393 кг | 866.4 lbs" },
            { "name": "Вес коробки 1 (8 футов)", "value": "312 кг | 687.8 lbs" },
            { "name": "Размер коробки 2", "value": "Д 82 Ш 82 В 34 см | Д 32.3\" Ш 32.3\" В 13.4\"" },
            { "name": "Вес коробки 2 (9 футов)", "value": "135 кг | 297.6 lbs" },
            { "name": "Вес коробки 2 (8 футов)", "value": "110 кг | 242.5 lbs" },
            { "name": "Размер коробки 3", "value": "Д 134 Ш 100 В 58 см | Д 52.8\" Ш 39.4\" В 22.8\"" },
            { "name": "Вес коробки 3 (9 футов)", "value": "140 кг | 308.6 lbs" },
            { "name": "Вес коробки 3 (8 футов)", "value": "149 кг | 328.5 lbs" },
            { "name": "Размер", "value": "9 футов" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" },
            { "name": "Цвет вставок Alcantara", "value": "Andy" },
            { "name": "Цвет вставок Alcantara", "value": "Bohemian" },
            { "name": "Цвет вставок Alcantara", "value": "Cadmium" },
            { "name": "Цвет вставок Alcantara", "value": "Chianti" },
            { "name": "Цвет вставок Alcantara", "value": "Denim" },
            { "name": "Цвет вставок Alcantara", "value": "Emerald" },
            { "name": "Цвет вставок Alcantara", "value": "Graysh" },
            { "name": "Цвет вставок Alcantara", "value": "Ivory" },
            { "name": "Цвет вставок Alcantara", "value": "Notte" },
            { "name": "Цвет вставок Alcantara", "value": "Stone" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x152-180x32 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 140-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [
            { "text": "Под заказ", "type": "custom" }
        ],
        "relatedProducts": [
            "cristallino-gold-le",
            "pool-tables-cover",
            "stratego-white",
            "90-minuto-iiii-wenge"
        ]
    },
    {
        "id": "t13-gold",
        "name": "Бильярдный стол T 1.3 Gold",
        "nameEn": "T 1.3 Gold",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 50000,
        "priceMax": 55000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Gold-S-1-667x800.jpg",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Gold-S-2-667x800.jpg",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "T1.3 Gold — это вершина минималистичной красоты.",
        "fullDescription": "<ul><li><strong>Размер:</strong> Доступен в двух размерах: 9 футов и 8 футов.</li><li><strong>Рама:</strong> Латунные вставки с гальваническим покрытием из золота 24К и ручной щеточной отделкой.</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Plug and Play:</strong> Сукно легко заменяется. Безупречная техника натяжки сукна обеспечивает идеально ровную игровую поверхность.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "9 футов" },
            { "name": "Спецификация", "value": "8 футов" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола (9 футов)", "value": "Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in" },
            { "name": "Размеры стола (8 футов)", "value": "Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in" },
            { "name": "Вес стола (9 футов)", "value": "400 кг | 882 lbs" },
            { "name": "Вес стола (8 футов)", "value": "330 кг | 727 1/2 lbs" },
            { "name": "Тип упаковки", "value": "Коробка 1, 2, 3" },
            { "name": "Размер коробки 1 (9 футов)", "value": "Д 305 Ш 180 В 32 см | Д 120\" Ш 70.9\" В 12.6\"" },
            { "name": "Размер коробки 1 (8 футов)", "value": "Д 278 Ш 32 В 152 см | Д 109\" Ш 12.6\" В 53.8\"" },
            { "name": "Вес коробки 1 (9 футов)", "value": "393 кг | 866.4 lbs" },
            { "name": "Вес коробки 1 (8 футов)", "value": "312 кг | 687.8 lbs" },
            { "name": "Размер коробки 2", "value": "Д 82 Ш 82 В 34 см | Д 32.3\" Ш 32.3\" В 13.4\"" },
            { "name": "Вес коробки 2 (9 футов)", "value": "135 кг | 297.6 lbs" },
            { "name": "Вес коробки 2 (8 футов)", "value": "110 кг | 242.5 lbs" },
            { "name": "Размер коробки 3", "value": "Д 134 Ш 100 В 58 см | Д 52.8\" Ш 39.4\" В 22.8\"" },
            { "name": "Вес коробки 3 (9 футов)", "value": "140 кг | 308.6 lbs" },
            { "name": "Вес коробки 3 (8 футов)", "value": "149 кг | 328.5 lbs" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Размер", "value": "9 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x162-180x32 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 110-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [
            { "text": "Лимитированная серия (LE)", "type": "custom" }
        ],
        "relatedProducts": [
            "biliardo-light-bronze-t-1-1",
            "biliardo-wood-t-1-3",
            "t-1-3-alcantara",
            "pool-tables-cover"
        ]
    },
    {
        "id": "t13-wenge",
        "name": "Бильярдный стол T 1.3 Wenge",
        "nameEn": "T 1.3 Wenge",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 43000,
        "priceMax": 48000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/06/Teckell-T-1.3-Wenge-01-667x800.jpg",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/06/Teckell-T-1.3-Wenge-02.jpg",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Teckell T1.3 — это надежность и элегантность в одном флаконе.",
        "fullDescription": "<ul><li><strong>Размер:</strong> Доступен в двух размерах: 8 футов и 9 футов.</li><li><strong>Рама:</strong> Алюминиевые направляющие с вставками из венге (Wenge).</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Plug and Play:</strong> Сукно и борта легко заменяются. Безупречная техника натяжки сукна обеспечивает идеально ровную игровую поверхность. Вставки, покрытые Alcantara®, крепятся магнитами для легкого снятия и замены.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "9 футов" },
            { "name": "Спецификация", "value": "8 футов" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола (9 футов)", "value": "Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in" },
            { "name": "Размеры стола (8 футов)", "value": "Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in" },
            { "name": "Вес стола (9 футов)", "value": "400 кг | 882 lbs" },
            { "name": "Вес стола (8 футов)", "value": "330 кг | 727 1/2 lbs" },
            { "name": "Тип упаковки", "value": "Коробка 1, 2, 3" },
            { "name": "Размер коробки 1 (9 футов)", "value": "Д 305 Ш 180 В 32 см | Д 120\" Ш 70.9\" В 12.6\"" },
            { "name": "Размер коробки 1 (8 футов)", "value": "Д 278 Ш 32 В 152 см | Д 109\" Ш 12.6\" В 53.8\"" },
            { "name": "Вес коробки 1 (9 футов)", "value": "393 кг | 866.4 lbs" },
            { "name": "Вес коробки 1 (8 футов)", "value": "312 кг | 687.8 lbs" },
            { "name": "Размер коробки 2", "value": "Д 82 Ш 82 В 34 см | Д 32.3\" Ш 32.3\" В 13.4\"" },
            { "name": "Вес коробки 2 (9 футов)", "value": "135 кг | 297.6 lbs" },
            { "name": "Вес коробки 2 (8 футов)", "value": "110 кг | 242.5 lbs" },
            { "name": "Размер коробки 3", "value": "Д 134 Ш 100 В 58 см | Д 52.8\" Ш 39.4\" В 22.8\"" },
            { "name": "Вес коробки 3 (9 футов)", "value": "140 кг | 308.6 lbs" },
            { "name": "Вес коробки 3 (8 футов)", "value": "149 кг | 328.5 lbs" },
            { "name": "Размер", "value": "9 футов" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x32-180x32-152 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 140-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [
            { "text": "Венге (Wenge)", "type": "material" }
        ],
        "relatedProducts": [
            "biliardo-gold-24k-t-1-3",
            "t-1-3-alcantara",
            "biliardo-wood-t-1-3",
            "pool-tables-cover"
        ]
    },
    {
        "id": "t13-wood",
        "name": "Бильярдный стол T 1.3 Wood",
        "nameEn": "T 1.3 Wood",
        "category": "Бильярд",
        "categorySlug": "pool-tables",
        "price": 43000,
        "priceMax": 48000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Wood-S-1.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-T-1.3-Wood-S-2.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Teckell T1.3 — такой же основательный, как и элегантный.",
        "fullDescription": "<ul><li><strong>Размер:</strong> Доступен в двух размерах: 9 футов и 8 футов.</li><li><strong>Рама:</strong> Алюминиевые рельсы с вставками из орехового дерева Каналетто.</li><li><strong>Ножки:</strong> Из закаленного стекла с низким содержанием железа, толщиной 15 мм (9/16 дюйма), с двойными скошенными краями.</li><li><strong>Игровое поле:</strong> Выполнено из цельного листа закаленного стекла с низким содержанием железа, минимальной толщиной 15 мм (9/16 дюйма). Под сукном установлен звукоизолирующий слой из полиуретана, который также придает стеклу необходимые характеристики для отскока шара.</li><li><strong>Plug and Play:</strong> Сукно легко заменяется. Безупречная техника натяжки сукна обеспечивает идеально ровную игровую поверхность.</li><li><strong>Сукно игровой поверхности:</strong> Камвольное сукно Simonis© 860™, доступное в широкой палитре цветов:<br>- Черный (Black)<br>- Шиферно-серый (Slate Grey)<br>- Морской синий (Marine Blue)<br>- Королевский синий (Royal Blue)<br>- Бургунди (Burgundy)<br>Другие цвета также доступны по <span style=\"text-decoration: underline;\"><a href=\"http://teckell.store/contact-us/\">запросу</a>.</span></li><li><strong>Лузы:</strong> Классические лузы заменены на высокоэластичные полиуретановые карманы, которые могут удерживать три шара и возвращаться к исходной форме после опустошения.</li><li><strong>Основания:</strong> Из массива дуба с матовой черной отделкой с открытыми порами и хромированными металлическими вставками.</li><li><strong>Высокая точность:</strong> Каждый стол создается с использованием только станков с числовым программным управлением (ЧПУ), что обеспечивает непревзойденную точность. Простое и точное выравнивание столешницы с помощью регулировочных винтов, встроенных в основание и находящихся под столешницей.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "9 футов" },
            { "name": "Спецификация", "value": "8 футов" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола (9 футов)", "value": "Д 290 Ш 163 В 82 см | Д 114 1/4 Ш 64 1/4 В 32 1/4 in" },
            { "name": "Размеры стола (8 футов)", "value": "Д 260 Ш 148 В 82 см | Д 102 1/4 Ш 58 1/4 В 32 1/4 in" },
            { "name": "Вес стола (9 футов)", "value": "400 кг | 882 lbs" },
            { "name": "Вес стола (8 футов)", "value": "330 кг | 727 1/2 lbs" },
            { "name": "Тип упаковки", "value": "Коробка 1, 2, 3" },
            { "name": "Размер коробки 1 (9 футов)", "value": "Д 305 Ш 180 В 32 см | Д 120\" Ш 70.9\" В 12.6\"" },
            { "name": "Размер коробки 1 (8 футов)", "value": "Д 278 Ш 32 В 152 см | Д 109\" Ш 12.6\" В 53.8\"" },
            { "name": "Вес коробки 1 (9 футов)", "value": "393 кг | 866.4 lbs" },
            { "name": "Вес коробки 1 (8 футов)", "value": "312 кг | 687.8 lbs" },
            { "name": "Размер коробки 2", "value": "Д 82 Ш 82 В 34 см | Д 32.3\" Ш 32.3\" В 13.4\"" },
            { "name": "Вес коробки 2 (9 футов)", "value": "135 кг | 297.6 lbs" },
            { "name": "Вес коробки 2 (8 футов)", "value": "110 кг | 242.5 lbs" },
            { "name": "Размер коробки 3", "value": "Д 134 Ш 100 В 58 см | Д 52.8\" Ш 39.4\" В 22.8\"" },
            { "name": "Вес коробки 3 (9 футов)", "value": "140 кг | 308.6 lbs" },
            { "name": "Вес коробки 3 (8 футов)", "value": "149 кг | 328.5 lbs" },
            { "name": "Размер", "value": "8 футов" },
            { "name": "Размер", "value": "9 футов" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Черный" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Шиферно-серый" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Морской синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Королевский синий" },
            { "name": "Цвет сукна (Simonis 860)", "value": "Бургунди" }
        ],
        "dimensions": {
            "length": "260-290 см",
            "width": "148-163 см",
            "height": "82 см"
        },
        "weight": "330-400 кг",
        "packaging": {
            "type": "Коробка 1, 2, 3",
            "dimensions": "Кор.1: 278-305x162-180x32 см, Кор.2: 82x82x34 см, Кор.3: 134x100x58 см",
            "weight": "Кор.1: 312-393 кг, Кор.2: 110-135 кг, Кор.3: 140-149 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtQmlsaWFyZG8tVDExLTlmLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTY2LTIzMzI5JnRva2VuPWJlZTc2OTM0MTE4ZjFjOGY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "cristallino-24k-gold",
            "pool-tables-cover",
            "stratego-calacatta-white-marble"
        ]
    },

    // ============ НАСТОЛЬНЫЙ ТЕННИС ============
    {
        "id": "effetto71-wenge",
        "name": "Стол для настольного тенниса Effetto 71 Wenge",
        "nameEn": "Effetto 71 wenge",
        "category": "Настольный теннис",
        "categorySlug": "table-tennis",
        "price": 26900,

        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Effetto-71-wenge-001-667x800.jpg",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Effetto-71-wenge-002-667x800.jpg",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": false,
        "shortDescription": "Изготовленный из лучшего стекла и с прочной конструкцией, этот стол для настольного тенниса выводит спорт на новый уровень, увеличивая удовольствие и азарт соревнований благодаря быстрой и плавной игре.",
        "fullDescription": "<ul><li><strong>Игровое поле:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм (9/16\"), со скошенными и отполированными оксидом церия углами.</li><li><strong>Ножки:</strong> Из массива фрезерованного дерева венге.</li><li><strong>Соединения:</strong> Из нержавеющей стали, фрезерованные и полированные.</li><li><strong>Сетка:</strong> Изготовлена из алькантары®, одна светлая и одна темная. Несущая конструкция сетки выполнена из латуни и может быть снята, чтобы превратить теннисный стол в обеденный.</li><li><strong>Аксессуары:</strong> Каждый теннисный стол поставляется с четырьмя ракетками и мячами.<br>Сетки из алькантары®, одна в светлом и одна в темном варианте, обе входят в комплект.<p><em>Предназначено для использования в помещении.</em></p></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "Настольный теннис" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 274 Ш 152.5 В 76.5 см | Д 107.8\" Ш 60\" В 30.1\"" },
            { "name": "Вес стола", "value": "160 кг | 352.7 lbs" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 168 Ш 152 В 63 см | Д 66.1\" Ш 59.8\" В 24.8\"" },
            { "name": "Вес упаковки", "value": "305 кг | 672.4 lbs" }
        ],
        "dimensions": {
            "length": "274 см",
            "width": "152.5 см",
            "height": "76.5 см"
        },
        "weight": "160 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 168 Ш 152 В 63 см | Д 66.1\" Ш 59.8\" В 24.8\"",
            "weight": "305 кг | 672.4 lbs"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyNCUyRjAxJTJGR3VpZGVsaW5lcy1UYWJsZS1UZW5uaXMtRWZmZXR0by03MS0zLmpwZyZjYWNoZU1hcmtlcj0xNzcwMzk5NTk2LTY4MzQ1JnRva2VuPWM1ZGRjNjA2ZTIxNTE4ZjM.q.jpg",
        "sizeGuideImageWidth": 1920,
        "sizeGuideImageHeight": 641,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "cristallino-black",
            "pool-tables-cover",
            "stratego-marquina-black-marble",
            "teckell-ciclotte-black"
        ]
    },
    {
        "id": "effetto71",
        "name": "Стол для настольного тенниса Effetto 71",
        "nameEn": "Effetto 71",
        "category": "Настольный теннис",
        "categorySlug": "table-tennis",
        "price": 26900,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/02/Teckell-Table-Tennis-Effetto-71-01-667x800.jpg",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/02/Teckell-Table-Tennis-Effetto-71-02-667x800.jpg",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": false,
        "shortDescription": "Изготовленный из лучшего стекла и с прочной конструкцией, этот стол для настольного тенниса выводит спорт на новый уровень, увеличивая удовольствие и азарт соревнований благодаря быстрой и плавной игре.",
        "fullDescription": "<ul><li><strong>Игровое поле:</strong> Закаленное стекло с низким содержанием железа, толщиной 15 мм (9/16 дюйма), со скошенными и отполированными оксидом церия углами.</li><li><strong>Ножки:</strong> Из массива фрезерованного ореха каналетто.</li><li><strong>Соединения:</strong> Из нержавеющей стали, фрезерованные и полированные.</li><li><strong>Сетка:</strong> Сетки для настольного тенниса изготовлены из алькантары®, одна светлая и одна темная (обе входят в комплект с игровым столом). Несущая конструкция сетки выполнена из латуни и может быть снята, чтобы превратить стол для пинг-понга в обеденный стол для гостиной.</li><li><strong>Аксессуары:</strong> В комплект теннисного стола входят 4 ракетки и игровые мячи.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Спецификация", "value": "Настольный теннис" },
            { "name": "Требуется сборка", "value": "Да" },
            { "name": "Размеры стола", "value": "Д 274 Ш 152.5 В 76.5 см | Д 107.8\" Ш 60\" В 30.1\"" },
            { "name": "Вес стола", "value": "160 кг | 352.7 lbs" },
            { "name": "Тип упаковки", "value": "Коробка" },
            { "name": "Размер упаковки", "value": "Д 168 Ш 152 В 63 см | Д 66.1\" Ш 59.8\" В 24.8\"" },
            { "name": "Вес упаковки", "value": "305 кг | 672.4 lbs" }
        ],
        "dimensions": {
            "length": "274 см",
            "width": "152.5 см",
            "height": "76.5 см"
        },
        "weight": "160 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 168 Ш 152 В 63 см | Д 66.1\" Ш 59.8\" В 24.8\"",
            "weight": "305 кг | 672.4 lbs"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyNCUyRjAxJTJGR3VpZGVsaW5lcy1UYWJsZS1UZW5uaXMtRWZmZXR0by03MS0zLmpwZyZjYWNoZU1hcmtlcj0xNzcwMzk5NTk2LTY4MzQ1JnRva2VuPWM1ZGRjNjA2ZTIxNTE4ZjM.q.jpg",
        "sizeGuideImageWidth": 1920,
        "sizeGuideImageHeight": 641,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "cristallino-black",
            "pool-tables-cover",
            "stratego-marquina-black-marble",
            "teckell-ciclotte-black"
        ]
    },

    // ============ ШАХМАТЫ (SCACCO) ============
    {
        "id": "stratego-black",
        "name": "Стол для игр Stratego Black",
        "nameEn": "Stratego Black",
        "category": "Шахматы",
        "categorySlug": "scacco",
        "price": 7000,
        "priceMax": 10000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Black-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Black-S-2-667x800.png",
        "inStock": true,
        "stockStatus": "В наличии",
        "isVariable": true,
        "shortDescription": "Многофункциональная игровая доска из черного мрамора Marquina.",
        "fullDescription": "<ul><li><strong>Основание:</strong> Черный мрамор Marquina с простой магнитной системой открывания.</li><li><strong>Игровые поля:</strong> Одна доска позволяет играть в четыре разные игры благодаря сменным гравированным тонким металлическим листам:<br><strong>1</strong> Шахматы и Шашки<br><strong>2</strong> Ludo<br><strong>3</strong> Нарды<br><strong>4</strong> Китайские шахматы (Сянци)</li><li><strong>Столешница:</strong> Из закаленного стекла с низким содержанием железа.</li><li><strong>Шахматные фигуры:</strong> Фигуры из точеных цилиндров из экстра-прозрачного боросиликатного стекла, декорированные латунью с покрытием 24-каратным золотом и хромом.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Teckell" },
            { "name": "Основной материал", "value": "Черный мрамор Marquina, стекло" },
            { "name": "Материал фигур", "value": "Боросиликатное стекло с 24-каратным золотом / хромом" },
            { "name": "Количество игр", "value": "4 (в зависимости от комплектации)" },
            { "name": "Дизайн", "value": "Для помещений" },
            { "name": "Страна производства", "value": "Италия" }
        ],
        "dimensions": {
            "length": "52 см",
            "width": "52 см",
            "height": "4.5 см"
        },
        "weight": "28 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 60 Ш 60 В 36 см | Д 23 1⁄2\" Ш 23 1⁄2\" В 14\"",
            "weight": "48 кг | 106 lbs"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtU2NhY2NvX01hcnF1aW5hLUJsYWNrLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA2MTM2LTY5NjQwJnRva2VuPTgxNjdiYzYzNGRlZTdiMDY.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "cristallino-black",
            "teckell-ciclotte-black",
            "t-1-1-black"
        ]
    },
    {
        "id": "stratego-white",
        "name": "Стол для игр Stratego White",
        "nameEn": "Stratego White",
        "category": "Шахматы",
        "categorySlug": "scacco",
        "price": 7000,
        "priceMax": 10000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-White-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-White-S-2-667x800.png",
        "inStock": true,
        "stockStatus": "В наличии",
        "isVariable": true,
        "shortDescription": "Многофункциональная игровая доска из белого мрамора Calacatta.",
        "fullDescription": "<ul><li><strong>Основание:</strong> Белый мрамор Calacatta с простой магнитной системой открывания.</li><li><strong>Игровые поля:</strong> Одна доска позволяет играть в четыре разные игры благодаря сменным гравированным тонким металлическим листам:<br><strong>1</strong> Шахматы и Шашки<br><strong>2</strong> Ludo<br><strong>3</strong> Нарды<br><strong>4</strong> Китайские шахматы (Сянци)</li><li><strong>Столешница:</strong> Из закаленного стекла с низким содержанием железа.</li><li><strong>Шахматные фигуры:</strong> Фигуры из точеных цилиндров из экстра-прозрачного боросиликатного стекла, декорированные латунью с покрытием 24-каратным золотом и хромом.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Teckell" },
            { "name": "Основной материал", "value": "Белый мрамор Calacatta, стекло" },
            { "name": "Материал фигур", "value": "Боросиликатное стекло с 24-каратным золотом / хромом" },
            { "name": "Количество игр", "value": "4 (в зависимости от комплектации)" },
            { "name": "Дизайн", "value": "Для помещений" },
            { "name": "Страна производства", "value": "Италия" }
        ],
        "dimensions": {
            "length": "52 см",
            "width": "52 см",
            "height": "4.5 см"
        },
        "weight": "28 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 60 Ш 60 В 36 см | Д 23 1⁄2\" Ш 23 1⁄2\" В 14\"",
            "weight": "48 кг | 106 lbs"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtU2NhY2NvX0NhbGFjYXR0YS1XaGl0ZS5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNjE1Ni02OTAyOCZ0b2tlbj1hMzhiZDk3YTRhZDg2MjRj.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "90-minuto-matte",
            "cristallino-outdoor"
        ]
    },
    {
        "id": "stratego-wood",
        "name": "Стол для игр Stratego Wood",
        "nameEn": "Stratego Wood",
        "category": "Шахматы",
        "categorySlug": "scacco",
        "price": 7000,
        "priceMax": 10000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Wood-S-1-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Sratego-Wood-S-2-667x800.png",
        "inStock": true,
        "stockStatus": "В наличии",
        "isVariable": true,
        "shortDescription": "Многофункциональная игровая доска из орехового дерева.",
        "fullDescription": "<ul><li><strong>Основание:</strong> Массив орехового дерева (каналетто) с простой магнитной системой открывания.</li><li><strong>Игровые поля:</strong> Одна доска может использоваться для четырех различных игр благодаря сменным гравированным тонким металлическим листам:<br><strong>1</strong> Шахматы и Шашки<br><strong>2</strong> Ludo (Чапаев)<br><strong>3</strong> Нарды<br><strong>4</strong> Китайские шахматы (Сянци)</li><li><strong>Столешница:</strong> Из закаленного стекла с низким содержанием железа.</li><li><strong>Шахматные фигуры:</strong> Фигуры из точеных цилиндров из экстра-прозрачного боросиликатного стекла, декорированные латунью с покрытием 24-каратным золотом и хромом.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Teckell" },
            { "name": "Основной материал", "value": "Массив орехового дерева (каналетто), стекло" },
            { "name": "Материал фигур", "value": "Боросиликатное стекло с 24-каратным золотом / хромом" },
            { "name": "Количество игр", "value": "4 (в зависимости от комплектации)" },
            { "name": "Дизайн", "value": "Для помещений" },
            { "name": "Страна производства", "value": "Италия" }
        ],
        "dimensions": {
            "length": "52 см",
            "width": "52 см",
            "height": "4.5 см"
        },
        "weight": "28 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 60 Ш 60 В 36 см | Д 23 1/2\" Ш 23 1/2\" В 14\"",
            "weight": "48 кг | 106 фунтов"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtU2NhY2NvX1dhbG51dC1Xb29kLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA2MTE1LTY4NTI2JnRva2VuPWU5MDI3NmM5ZDMwZTZjMTg.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC0xNzB4NTAucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODYtMTc5MCZ0b2tlbj03ZjJkNTI2NjNkMjQ3NGVj.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "90-minuto-matte",
            "cristallino-outdoor"
        ]
    },
    // ============ ФИТНЕС ============
    {
        "id": "ciclotte-glossy",
        "name": "Teckell Ciclotte Glossy",
        "nameEn": "Teckell Ciclotte Glossy",
        "category": "Фитнес",
        "categorySlug": "fitness",
        "price": 14700,

        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Chrome-S-1-667x800.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Дизайнерский велотренажер с глянцевой отделкой. Девиз Teckell «Взгляд в будущее итальянского дизайна» встречается с философией дизайна Ciclotte «Ride on design» в этом экстраординарном велотренажере.",
        "fullDescription": "<ul><li><strong>Стеклянный диск:</strong> 30-мм стеклянный диск заменяет оригинальную круглую раму велосипеда, создавая потрясающий элегантный вид. Рама из стали и лазерной резки многослойного стекла: внешние слои из закаленного стекла, внутренний слой из упрочненного стекла.</li><li><strong>Рама:</strong> Полированная нержавеющая сталь.</li><li><strong>Основание:</strong> Гибкое основание с хромированной отделкой повторяет движения тела. Рама прогибается в стороны под нагрузкой, как при езде на велосипеде по дороге.</li><li><strong>Руль:</strong> Эргономичная вертикальная конструкция руля и грипсы. Руль регулируется по высоте и углу наклона.</li><li><strong>Педали:</strong> Благодаря необычно компактной трансмиссии расстояние между педалями составляет всего 6 см. Этот узкий зазор помогает избежать проблем с суставами.</li><li><strong>Седло:</strong> Гелевое седло гоночного велосипеда с отделкой для использования как для велоспорта, так и для сайклинга. Регулируется по высоте и углу наклона. Седло имеет стандартное крепление, позволяющее заменить его на другое по вашему выбору.<br>- <em><strong>Шаг:</strong></em> 16 мм<br>- <em><strong>Общий ход:</strong> </em>21 см<br>- <em><strong>Максимальный вес пользователя:</strong></em> 118 кг</li><li><strong>Особенности тренировок:</strong> Высокоэффективные тренировки возможны благодаря регулируемой системе магнитного сопротивления (12 магнитов и маховик составляют трансмиссию). Маховик вращается с высокой скоростью благодаря системе, умножающей обороты педалей, усиливая магнитное поле. Трансмиссия с редуктором имитирует гоночный велосипед. Электрическая система регулирует сопротивление.</li><li><strong>Подключение:</strong> Этот велотренажер с Bluetooth оснащен прочной подставкой (только черная) для смартфона или планшета. Смотрите фильмы, слушайте музыку или следуйте по смоделированным трассам с помощью специального приложения, совместимого с Android/iOS, которое также отслеживает скорость и расстояние. Имеет 10 уровней точной настройки сопротивления.</li><li><strong>Сертификаты:</strong> ЕС / США / КИТАЙ</li><li><strong>Запатентованный дизайн:</strong> Охраняется международным промышленным образцом.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell / Ciclotte",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Teckell, Ciclotte" },
            { "name": "Основной материал", "value": "Полированная нержавеющая сталь, многослойное стекло" },
            { "name": "Материал диска", "value": "30-мм стекло (закаленное/упрочненное)" },
            { "name": "Система сопротивления", "value": "Регулируемая магнитная (12 уровней)" },
            { "name": "Макс. вес пользователя", "value": "118 кг" },
            { "name": "Подключение", "value": "Bluetooth, приложение для iOS/Android" },
            { "name": "Регулировки", "value": "Руль и седло (высота, угол наклона)" },
            { "name": "Дизайн", "value": "Для помещений" },
            { "name": "Страна производства", "value": "Италия" }
        ],
        "dimensions": {
            "length": "111 см",
            "width": "50 см",
            "height": "111 см"
        },
        "weight": "96 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 100 Ш 80 В 120 см | Д 39 1/4\" Ш 31 1/2\" В 47 1/4\"",
            "weight": "110 кг | 243 фунта"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtRml0bmVzcy1DaHJvbWUucG5nJmNhY2hlTWFya2VyPTE3NzA0MDU2MjQtNTM4MzAmdG9rZW49NmFiMmNkNzRhNjJkODA5MQ.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p><p class=\"page_subtit internal\">Девиз Teckell «Взгляд в будущее итальянского дизайна» встречается с философией дизайна Ciclotte «Ride on design» в этом экстраординарном велотренажере.</p><p><em>Этот шедевр воплощает в себе технологический опыт и тщательное мастерство двух брендов.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtQ2ljbG90dGUtMTcweDUwLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTgzLTE1OTYmdG9rZW49MTJhNWUyYzdiMmMwNzJlNg.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "teckell-ciclotte-black",
            "90-minuto-matte",
            "cristallino-outdoor"
        ]
    },
    {
        "id": "teckell-ciclotte-black",
        "name": "Teckell Ciclotte Black",
        "nameEn": "Teckell Ciclotte Black",
        "category": "Фитнес",
        "categorySlug": "fitness",
        "price": 14000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2022/09/Teckell-Ciclotte-Black-S-1-667x800.png",
        "inStock": true,
        "stockStatus": "В наличии",
        "isVariable": true,
        "shortDescription": "Девиз Teckell «Взгляд в будущее итальянского дизайна» встречается с философией дизайна Ciclotte «Ride on design» в этом экстраординарном велотренажере.",
        "fullDescription": "<ul><li><strong>Стеклянный диск:</strong> 30-мм стеклянный диск заменяет оригинальную круглую раму велосипеда, создавая потрясающий элегантный вид. Рама из стали и лазерной резки многослойного стекла: внешние слои из закаленного стекла, внутренний слой из упрочненного стекла.</li><li><strong>Рама:</strong> Полированная нержавеющая сталь с черным лакированным покрытием.</li><li><strong>Основание:</strong> Гибкое основание с хромированной отделкой повторяет движения тела. Рама прогибается в стороны под нагрузкой, как при езде на велосипеде по дороге.</li><li><strong>Руль:</strong> Эргономичная вертикальная конструкция руля и грипсы. Руль регулируется по высоте и углу наклона.</li><li><strong>Педали:</strong> Благодаря необычно компактной трансмиссии расстояние между педалями составляет всего 6 см. Этот узкий зазор помогает избежать проблем с суставами.</li><li><strong>Седло:</strong> Гелевое седло гоночного велосипеда с отделкой для использования как для велоспорта, так и для сайклинга. Регулируется по высоте и углу наклона. Седло имеет стандартное крепление, позволяющее заменить его на другое по вашему выбору.<br>- <em><strong>Шаг:</strong></em> 16 мм<br>- <em><strong>Общий ход:</strong> </em>21 см<br>- <em><strong>Максимальный вес пользователя:</strong></em> 118 кг</li><li><strong>Особенности тренировок:</strong> Высокоэффективные тренировки возможны благодаря регулируемой системе магнитного сопротивления (12 магнитов и маховик составляют трансмиссию). Маховик вращается с высокой скоростью благодаря системе, умножающей обороты педалей, усиливая магнитное поле. Трансмиссия с редуктором имитирует гоночный велосипед. Электрическая система регулирует сопротивление.</li><li><strong>Подключение:</strong> Этот велотренажер с Bluetooth оснащен прочной подставкой (только для черной модели) для смартфона или планшета. Смотрите фильмы, слушайте музыку или следуйте по смоделированным трассам с помощью специального приложения, совместимого с Android/iOS, которое также отслеживает скорость и расстояние. Имеет 10 уровней точной настройки сопротивления.</li><li><strong>Сертификаты:</strong> ЕС / США / КИТАЙ</li><li><strong>Запатентованный дизайн:</strong> Охраняется международным промышленным образцом.<br><br><em>Предназначено для использования в помещении.</em></li></ul>",
        "brand": "Teckell / Ciclotte",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGVja2VsbC5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwODU4NC00Mjc5JnRva2VuPTY1MjRiMDM1NDc4OWRiNzA.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Teckell, Ciclotte" },
            { "name": "Основной материал", "value": "Нержавеющая сталь с черной лакировкой, многослойное стекло" },
            { "name": "Материал диска", "value": "30-мм стекло (закаленное/упрочненное)" },
            { "name": "Система сопротивления", "value": "Регулируемая магнитная (12 уровней)" },
            { "name": "Макс. вес пользователя", "value": "118 кг" },
            { "name": "Подключение", "value": "Bluetooth, приложение для iOS/Android, подставка для гаджета" },
            { "name": "Регулировки", "value": "Руль и седло (высота, угол наклона)" },
            { "name": "Дизайн", "value": "Для помещений" },
            { "name": "Страна производства", "value": "Италия" }
        ],
        "dimensions": {
            "length": "111 см",
            "width": "50 см",
            "height": "111 см"
        },
        "weight": "96 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 100 Ш 80 В 120 см | Д 39 1/4\" Ш 31 1/2\" В 47 1/4\"",
            "weight": "110 кг | 243 фунта"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtRml0bmVzc19JY29uLVN3YXRjaC1CbGFjay5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNTYzOC01MzY1NSZ0b2tlbj04ODdiMTkwMmFmYzIxNDcx.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Всегда авангард, эксперименты, удивление. Это столпы, на которых основаны инновационные исследования основателя Teckell Джанфранко Барбана. «Нам не интересно быть консервативными. Объект должен меняться в соответствии с нашей интуицией, а не наоборот.</p><p><em>Исследования и разработки должны быть непрерывными; идеи для улучшения продуктов часто приходят из разных миров и образов мышления.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtQ2ljbG90dGUtMTcweDUwLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTgzLTE1OTYmdG9rZW49MTJhNWUyYzdiMmMwNzJlNg.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "teckell-ciclotte-glossy",
            "effetto-71",
            "90-minuto-matte"
        ]
    },

    // ============ ЧАСЫ ============
    {
        "id": "presto",
        "name": "Presto",
        "nameEn": "Presto",
        "category": "Часы",
        "categorySlug": "timepieces",
        "price": 25000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Presto-White-001-667x800.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Современное определение времени.",
        "fullDescription": "<ul><li>Маятниковый стержень из инвара, металлического сплава с очень низким коэффициентом теплового расширения, с компенсационной трубкой для температурных изменений.</li><li>Градуированный ободок на маятнике для регулировки времени.</li><li>Вал из нержавеющей стали, вращение на 15 шарикоподшипниках, вильчатая передача, толкатель с одной стороны. Регулировочный винт вилки с рубиновым наконечником для низкого коэффициента трения.</li><li>Частота биений: 5400/ч</li><li>Привод: заводная пружина</li><li>Подшипники установлены и отрегулированы непосредственно на стеклянной конструкции с помощью компьютерного числового управления (CNC).</li><li>Рама из тонкого стального листа с текстурой и отделкой, внутри обтянута белой замшевой тканью. Задняя панель из зеркала из особо прозрачного стекла с кислотным матированием.</li><li>Шестерни и трибы с покрытием из золота 24 карата.</li><li>Кристаллическая стеклянная конструкция, диски толщиной 1/2 дюйма.</li><li>Автономность завода: 30 дней</li><li>Подвесная пружина.</li><li>Анкерный спуск Грэма.</li><li>Алюминиевая линза-боб.</li><li>С пружинным заводом.</li><li>Предназначено для использования в помещении</li></ul>",
        "brand": "Takto",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGFrdG8ucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODctNTExOCZ0b2tlbj0yZTE5ZmY3MGMxNmM2NTcx.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Takto" },
            { "name": "Тип", "value": "Настенные часы-маятник" },
            { "name": "Материал корпуса", "value": "Сталь, многослойное стекло" },
            { "name": "Материал маятника", "value": "Инвар (сплав)" },
            { "name": "Материал шестерен", "value": "Латунь с покрытием 24К золото" },
            { "name": "Тип механизма", "value": "Механический, с пружинным заводом" },
            { "name": "Спуск", "value": "Анкерный (Graham escapement)" },
            { "name": "Частота биений", "value": "5400 п/ч" },
            { "name": "Автономность", "value": "30 дней" },
            { "name": "Страна производства", "value": "Италия" },
            { "name": "Дизайн", "value": "Для помещений" }
        ],
        "dimensions": {
            "length": "66 см",
            "width": "23 см",
            "height": "66 см"
        },
        "weight": "30 кг",
        "packaging": {
            "type": "Коробка",
            "dimensions": "Д 80 Ш 80 В 46 см | Д 31 1/2\" Ш 31 1/2\" В 18\"",
            "weight": "50 кг | 110 фунтов"
        },
        "assemblyRequired": false,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtVGFrdG8tUHJlc3RvLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA1NTU1LTQ1NjMxJnRva2VuPTQwYzIxZmI5NmFmYjE2ZTc.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Takto Timepieces от Teckell ведет вас за руку в мир извечной борьбы человека со временем с коллекцией экстраординарных напольных и настенных часов.</p><p><em>Исключительный баланс формы и функции в высоко ценимом объекте.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGFrdG8tMTcweDUwLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTkwLTE5MDQmdG9rZW49ZjgzNzU1NjUwNzlkYWMwYw.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "takto-timepieces-adagio",
            "stratego-marquina-black-marble",
            "stratego-calacatta-white-marble",
            "cristallino-24k-gold",
            "biliardo-light-bronze-t-1-1"
        ]
    },
    {
        "id": "adagio",
        "name": "Adagio",
        "nameEn": "Adagio",
        "category": "Часы",
        "categorySlug": "timepieces",
        "price": 40000,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Adagio-Black-001-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Takto-Adagio-White-001-667x800.png",
        "inStock": true,
        "stockStatus": "Под заказ",
        "isVariable": true,
        "shortDescription": "Изысканный хранитель времени, который гордо и элегантно демонстрирует свою абсолютную точность и передовые технологии.",
        "fullDescription": "<ul><li>Стержень маятника диаметром 12 мм, изготовлен из инвара, металлического сплава с очень низким коэффициентом теплового расширения, с компенсационной трубкой для температурных изменений.</li><li>Градуированный ободок на маятнике для регулировки времени. Регулировка может быть еще более точной с помощью небольших грузиков.</li><li>Вал из нержавеющей стали, вращение на 15 шарикоподшипниках. Вильчатая передача с односторонним толкателем. Регулировочный винт вилки с рубиновым наконечником для низкого коэффициента трения.</li><li>Основание и верхушка из черного мрамора Marquina или полированного белого мрамора Covelano.</li><li>Частота биений: 3600/ч.</li><li>Стеклянная конструкция из особо прозрачного стекла толщиной 15 мм (9/16”), с точно выгравированными и отполированными с высоким мастерством метками часов и минут.</li><li>Основание и рама из черного мрамора Marquina. Циферблат получен из цельного блока фрезерованного алюминия с черным анодированным покрытием в стиле гильоше.</li><li>Автономность завода: 30 дней</li><li>Подвесная пружина.</li><li>Анкерный спуск Грэма.</li><li>Элементы с пониженным весом: привод 2,4 кг.</li><li>Предназначено для использования в помещении</li></ul>",
        "brand": "Takto",
        "brandLogo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGFrdG8ucG5nJmNhY2hlTWFya2VyPTE3NzA0MDg1ODctNTExOCZ0b2tlbj0yZTE5ZmY3MGMxNmM2NTcx.q.png",
        "attributes": [
            { "name": "Бренд", "value": "Takto" },
            { "name": "Тип", "value": "Напольные часы-маятник" },
            { "name": "Материал основания и верха", "value": "Мрамор Marquina (черный) / Covelano (белый)" },
            { "name": "Материал корпуса", "value": "Сталь, многослойное стекло" },
            { "name": "Материал маятника", "value": "Инвар (сплав)" },
            { "name": "Материал циферблата", "value": "Анодированный алюминий" },
            { "name": "Тип механизма", "value": "Механический, с пружинным заводом" },
            { "name": "Спуск", "value": "Анкерный (Graham escapement)" },
            { "name": "Частота биений", "value": "3600 п/ч" },
            { "name": "Автономность", "value": "30 дней" },
            { "name": "Страна производства", "value": "Италия" },
            { "name": "Дизайн", "value": "Для помещений" }
        ],
        "dimensions": {
            "length": "76 см",
            "width": "33 см",
            "height": "225 см"
        },
        "weight": "292 кг",
        "packaging": {
            "type": "2 коробки",
            "dimensions": "Коробка 1: Д 234 Ш 90 В 50 см | Коробка 2: Д 93 Ш 62 В 60 см",
            "weight": "Коробка 1: 283 кг | Коробка 2: 170 кг"
        },
        "assemblyRequired": true,
        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGSWNvbmUtR3VpZGUtVGFrdG9NYXJxdWluYS1CbGFjay5wbmcmY2FjaGVNYXJrZXI9MTc3MDQwNTU4MC00MzcxOSZ0b2tlbj05NzJlZjI1MjFmY2NmNTU1.q.png",
        "sizeGuideImageWidth": 2500,
        "sizeGuideImageHeight": 834,
        "brandTab": {
            "title": "О бренде",
            "content": "<p>Takto Timepieces от Teckell ведет вас за руку в мир извечной борьбы человека со временем с коллекцией экстраординарных напольных и настенных часов.</p><p><em>Исключительный баланс формы и функции в высоко ценимом объекте.</em></p>",
            "logo": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA5JTJGQnJhbmQtVGFrdG8tMTcweDUwLnBuZyZjYWNoZU1hcmtlcj0xNzcwNDA4NTkwLTE5MDQmdG9rZW49ZjgzNzU1NjUwNzlkYWMwYw.q.png"
        },
        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },
        "customization": {
            "enabled": true,
            "label": "Персонализируйте изделие Teckell:",
            "placeholder": "Гравировка до 20 символов",
            "maxLength": 20
        },
        "labels": [],
        "relatedProducts": [
            "takto-timepieces-presto",
            "stratego-marquina-black-marble",
            "stratego-calacatta-white-marble",
            "90-minuto-matte",
            "cristallino-outdoor"
        ]
    },

    // ============ ATIPICA (ГУАЛЬТЕРО) ============
    {
        "id": "gualtiero",
        "name": "Gualtiero",
        "nameEn": "Gualtiero",
        "category": "Дартс",
        "categorySlug": "atipica",
        "price": 15500,
        "priceSuffix": "без НДС",
        "image": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Gualtiero-Canaletto-wood-001-01-667x800.png",
        "hoverImage": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Gualtiero-Canaletto-wood-004-667x800.png",
        "inStock": true,
        "stockStatus": "В наличии",
        "isVariable": true,
        "shortDescription": "Кабинет редкостей с дартсом. Основание и профиль из черного лакированного ясеня с открытыми порами.",
        "fullDescription": "<ul><li>Круглое зеркало, открывающееся, как объектив фотоаппарата, с помощью ручки сбоку, открывая потайной шкаф. Отсек открывающейся шторки имеет диаметр 50 см. Отсек полностью функционален и поставляется с внутренней полкой глубиной 15 см.</li><li>Доска для дартса, изготовленная из пробкового каркаса и готовая к игре.</li><li>Изготовлен из шести листов особо прозрачного закаленного стекла толщиной 15 мм и дерева.</li><li>Gualtiero доступен в двух вариантах отделки: с основанием и профилем из дерева Каналетто (Gualtiero Wood) или из черного ясеня с открытыми порами (Gualtiero Black).</li><li>Каждый Gualtiero поставляется с набором дротиков и магнитным лазером для правильного позиционирования игрока.</li><li>Предназначено для использования в помещении</li></ul>",
        "brand": "Teckell",
        "brandLogo": "https://teckell.store/wp-content/uploads/2022/09/Teckell-logo-03.svg",

        "heroSection": {
            "subtitle": "TECKELL",
            "title": "Gualtiero",
            "quote": "Gualtiero, named for the legend of William Tell, the folk hero and expert marksman, who refused to bow down before the hat of the Austrian noble Gessler.",
            "buttonAddToCart": "ADD TO CART",
            "buttonViewMore": "VIEW MORE",
            "backgroundImage": "https://teckell.store/wp-content/uploads/2025/06/Teckell-Gualtiero-Canaletto-wood-001-01-667x800.png",
            "dataId": "4116d0e",
            "dataSettings": {
                "background_background": "classic"
            }
        },

        "attributes": [
            { "name": "Бренд", "value": "Teckell" },
            { "name": "Тип", "value": "Кабинет редкостей / Дартс" },
            { "name": "Коллекция", "value": "Atipica" },
            { "name": "Материал основы и профиля", "value": "Дерево Каналетто или черный ясень (лак, открытые поры)" },
            { "name": "Материал корпуса", "value": "Закаленное стекло (6 листов по 15 мм)" },
            { "name": "Материал доски для дартса", "value": "Пробка" },
            { "name": "Диаметр отсека", "value": "50 см" },
            { "name": "Страна производства", "value": "Италия" },
            { "name": "Дизайн", "value": "Для помещений" }
        ],

        "dimensions": {
            "length": "88.8 см",
            "width": "55.4 см (диаметр основания)",
            "height": "214 см"
        },

        "weight": "109 кг",

        "packaging": {
            "type": "2 коробки",
            "dimensions": "Коробка 1 (голова): Д 100 Ш 100 В 50 см | Коробка 2 (тело): Д 64 Ш 64 В 144 см",
            "weight": "Коробка 1: 60 кг | Коробка 2: 117 кг"
        },

        "assemblyRequired": false,

        "sizeGuideImage": "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyNSUyRjA2JTJGR3VpZGVsaW5lcy1HdWFsdGllcm8uanBnJmNhY2hlTWFya2VyPTE3NzAzOTkyODktNTcyMzgmdG9rZW49MDIwYmE2NDQxYzZkMTRhNQ.q.jpg",
        "sizeGuideImageWidth": 1920,
        "sizeGuideImageHeight": 1075,

        "brandTab": {
            "title": "О бренде",
            "content": "<p>Takto Timepieces от Teckell ведет вас за руку в мир извечной борьбы человека со временем с коллекцией экстраординарных напольных и настенных часов.</p><p><em>Исключительный баланс формы и функции в высоко ценимом объекте.</em></p>",
            "logo": "https://teckell.store/wp-content/uploads/2022/09/Teckell-logo-03.svg"
        },

        "shippingTab": {
            "title": "Доставка и производство",
            "content": "<h3><strong>Время производства</strong></h3><p>Наши мастера немедленно приступят к работе, сочетая мастерство, искусство и превосходство отобранных материалов, чтобы создать шедевр за 10–12 недель, подписанный Teckell.</p><h4><strong>Сроки доставки</strong></h4><p>Наш отдел логистики позаботится о доставке приобретенных вами произведений искусства прямо к вашему дому.</p>",
            "images": [
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2/VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00NDk4MTM1LXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDQyLTEwMDI2JnRva2VuPTdhMzEyNDVhZTI0ZTBhNTc.q.jpg",
                "https://teckell.store/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdGVja2VsbC5zdG9yZSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjExJTJGcGV4ZWxzLW5vcm1hLW1vcnRlbnNvbi00MzkxNDcwLXNjYWxlZC0zNTB4NDUwLmpwZyZjYWNoZU1hcmtlcj0xNzcwNDAyNDM4LTIyNTg0JnRva2VuPTJkYWI0MmE1MWYyMThlZjI.q.jpg"
            ]
        },

        "customization": {
            "enabled": false,
            "label": "",
            "placeholder": "",
            "maxLength": 0
        },

        "labels": [
            { "text": "Готов к отправке", "type": "custom" }
        ],

        "relatedProducts": [
            "takto-timepieces-adagio",
            "stratego-marquina-black-marble",
            "stratego-calacatta-white-marble",
            "90-minuto-matte",
            "cristallino-outdoor"
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
        name: "Дартс",
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
