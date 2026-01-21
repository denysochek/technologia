import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [lang, setLang] = useState('ua');
    const [currency, setCurrency] = useState('UAH');

    const rates = {
        UAH: 1,
        USD: 0.024,
        EUR: 0.022
    };

    const symbols = {
        UAH: '₴',
        USD: '$',
        EUR: '€'
    };

    const translations = {
        ua: {
            home: 'Головна',
            products: 'Товари',
            about: 'Про нас',
            login: 'Увійти',
            heroTitle: 'Технології Майбутнього',
            heroSubtitle: 'Вже Сьогодні',
            heroDesc: 'Відкрийте для себе найсучаснішу електроніку, яка змінює правила гри. Ми зібрали кращі інновації в одному місці для вашого комфорту та продуктивності.',
            catalogBtn: 'Каталог Товарів',
            moreBtn: 'Дізнатись Більше',
            speed: 'Швидкість',
            speedDesc: 'Найшвидша доставка по всій країні та миттєва підтримка клієнтів.',
            warranty: 'Гарантія',
            warrantyDesc: 'Офіційна гарантія від виробника на всі види техніки 24 місяці.',
            service: 'Сервіс',
            serviceDesc: 'Власний сервісний центр для обслуговування вашої електроніки.',
            popular: 'Популярні Категорії',
            smartphones: 'Смартфони',
            laptops: 'Ноутбуки',
            audio: 'Аудіо',
            buy: 'Купити',
            search: 'Пошук...',
            filters: 'Фільтри',
            catalogTitle: 'Каталог',
            tech: 'Техніки'
        },
        en: {
            home: 'Home',
            products: 'Products',
            about: 'About',
            login: 'Login',
            heroTitle: 'Future Technologies',
            heroSubtitle: 'Right Now',
            heroDesc: 'Discover the cutting-edge electronics that change the game. We have gathered the best innovations in one place for your comfort and productivity.',
            catalogBtn: 'Product Catalog',
            moreBtn: 'Learn More',
            speed: 'Speed',
            speedDesc: 'Fastest delivery nationwide and instant customer support.',
            warranty: 'Warranty',
            warrantyDesc: 'Official manufacturer warranty for all types of equipment for 24 months.',
            service: 'Service',
            serviceDesc: 'Our own service center to maintain your electronics.',
            popular: 'Popular Categories',
            smartphones: 'Smartphones',
            laptops: 'Laptops',
            audio: 'Audio',
            buy: 'Buy',
            search: 'Search...',
            filters: 'Filters',
            catalogTitle: 'Product',
            tech: 'Catalog'
        }
    };

    const t = (key) => translations[lang][key] || key;

    const formatPrice = (priceUAH) => {
        const numericPrice = parseFloat(priceUAH.replace(/\s/g, ''));
        const converted = (numericPrice * rates[currency]).toFixed(0);
        return `${converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${symbols[currency]}`;
    };

    return (
        <SettingsContext.Provider value={{ lang, setLang, currency, setCurrency, t, formatPrice }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
