"use client";

import { useState, useEffect } from 'react';
import { CartItem } from '@/types/cart';

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Вычисляем общую сумму
    const cartTotal = items.reduce((sum, item) => sum + item.total, 0);

    // Загрузка корзины из localStorage при монтировании
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart from localStorage', e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Сохранение корзины в localStorage при изменении
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(items));
        }
    }, [items, isInitialized]);

    // Добавление товара в корзину
    const addToCart = (item: Omit<CartItem, 'key' | 'total'> & { quantity: number }) => {
        const newItem: CartItem = {
            ...item,
            key: `${item.product_id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            total: item.price * item.quantity
        };

        setItems(prev => [...prev, newItem]);
        setIsOpen(true);
    };

    // Удаление товара из корзины
    const removeFromCart = (itemKey: string) => {
        setItems(prev => prev.filter(item => item.key !== itemKey));
    };

    // Очистка корзины
    const clearCart = () => {
        setItems([]);
    };

    // Обновление количества товара
    const updateQuantity = (itemKey: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(itemKey);
            return;
        }

        setItems(prev => prev.map(item =>
            item.key === itemKey
                ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
                : item
        ));
    };

    // Открыть/закрыть корзину
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return {
        items,
        isOpen,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        openCart,
        closeCart
    };
}