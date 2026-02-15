// hooks/useWishlist.ts
"use client";

import { useState, useEffect } from "react";
import { Product } from "@/data/categories";

export interface WishlistItem {
    product_id: string;
    addedAt: number;
}

export function useWishlist() {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0); // Добавляем отдельное состояние для счетчика

    // Загрузка избранного из localStorage при монтировании
    useEffect(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        if (savedWishlist) {
            try {
                const parsedItems = JSON.parse(savedWishlist);
                setItems(parsedItems);
                setCount(parsedItems.length); // Устанавливаем начальный счетчик
            } catch (e) {
                console.error("Failed to load wishlist", e);
            }
        }
        setIsLoading(false);
    }, []);

    // Сохранение в localStorage при изменении и обновление счетчика
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("wishlist", JSON.stringify(items));
            setCount(items.length); // Обновляем счетчик при каждом изменении items

            // Опционально: вызываем кастомное событие для уведомления других компонентов
            window.dispatchEvent(new CustomEvent('wishlist-updated', {
                detail: { count: items.length }
            }));
        }
    }, [items, isLoading]);

    // Добавление в избранное
    const addToWishlist = (productId: string) => {
        setItems(prev => {
            // Проверяем, есть ли уже товар в избранном
            const exists = prev.some(item => item.product_id === productId);
            if (exists) {
                return prev; // уже есть, ничего не делаем
            }
            // Добавляем новый товар
            return [...prev, {
                product_id: productId,
                addedAt: Date.now()
            }];
        });
    };

    // Удаление из избранного
    const removeFromWishlist = (productId: string) => {
        setItems(prev => prev.filter(item => item.product_id !== productId));
    };

    // Проверка, есть ли товар в избранном
    const isInWishlist = (productId: string): boolean => {
        return items.some(item => item.product_id === productId);
    };

    // Переключение статуса избранного
    const toggleWishlist = (productId: string) => {
        if (isInWishlist(productId)) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    // Очистка всего избранного
    const clearWishlist = () => {
        setItems([]);
    };

    // Получение количества товаров
    const getItemCount = (): number => {
        return count; // Теперь возвращаем сохраненное значение счетчика
    };

    return {
        items,
        count, // Добавляем прямой доступ к счетчику
        isLoading,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        clearWishlist,
        getItemCount
    };
}