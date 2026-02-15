export interface CartItem {
    key: string;
    product_id: string | number;
    name: string;
    sku?: string;
    price: number;
    quantity: number;
    total: number;
    currency?: string;
    image: string;
    variations?: {
        name: string;
        value: string;
    }[];
}

export interface CartState {
    items: CartItem[];
    total: number;
    isOpen: boolean;
}