import React, { createContext, useState } from 'react';

export const flowersData = createContext();

let FlowersList1 = [
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte7faae9c9660c2c5/66a28e355c5264b275270110/flowers-same-day-delivery-silo-191119-440x440.jpg?auto=webp',
        title: "Same-Day Flower Delivery"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5b35196be36fb0f8/66992964e5f7c8606fb02545/sympathy-flowers-silo-191165-exclusiveheading-440x440.jpg?auto=webp',
        title: "Sympathy"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt17030b28dd25ff08/6699296d7f59ae008999bfb5/chocolate-covered-strawberries-delivery-silo-192949-440x440.jpg?auto=webp',
        title: "Chocolate Covered Strawberries"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt92a0ad0684119599/66a167ff9cd6fda3abf2454a/preserved-roses-silo-156623-440x440.jpg?auto=webp',
        title: "Love & Romance"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte866eb65055bcb80/66992a2277a780359444b7c7/plants-silo-101980-exclusiveheading-440x400.jpg?auto=webp',
        title: "Plants"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt711f7ab6f3fdb950/66a7d52197164414309d0648/bouquet-of-the-month-july-red-roses-silo-194201-440x440.jpg?auto=webp',
        title: "Bouquet of the Month"
    },

]

let FlowersList2 = [
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5da19309d22f89d6/66a2b7bd4a36019d587c1059/gift-baskets-silo-gfgb-175230-gfgbheader-440x440.jpg?auto=webp',
        title: "Gift Baskets"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt63eb396caa4edbbb/66a2a827962501306cb51b0a/explosion-box-gifts-silo-MK033136-440x440.jpg?auto=webp',
        title: "Explosion Box Gifts"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt03edb5af371f0100/66a2a8354d422908a28f033c/chocolate-gifts-silo-196349-440x440.jpg?auto=webp',
        title: "Chocolate Gifts"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte7eada926da87e63/66a16a3381a8f63e49d407a5/wine-gift-baskets-silo-23530-440x440.jpg?auto=webp',
        title: "Wine & Bar"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0224da195e5dfa14/66a16ad281a8f608f1d407c2/birthday-cake-delivery-silo-41068-440x440.jpg?auto=webp',
        title: "Birthday Cakes"
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4e64f12f14ef3c81/66a16a46eaa26bd17a93c263/baked-goods-silo-171491-440x440.jpg?auto=webp',
        title: "Baked Goods"
    },

]

export const FlowersProvider = ({ children }) => {
    const [data1, setData1] = useState(FlowersList1);
    const [data2, setData2] = useState(FlowersList2);

    return (
        <flowersData.Provider value={{ data1, setData1, data2, setData2 }}>
            {children}
        </flowersData.Provider>
    );
};
