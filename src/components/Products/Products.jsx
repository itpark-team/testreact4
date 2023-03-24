import React from 'react';
import ProductsList from "./ProductsList/ProductsList";

const Products = () => {
    let products1 = [
        {
            id: 1,
            name: "Огруец",
            price: 30
        },
        {
            id: 2,
            name: "Помидор",
            price: 80
        },
        {
            id: 3,
            name: "Капуста",
            price: 120
        }
    ];

    let products2 = [
        {
            id: 1,
            name: "Яблоко",
            price: 30
        },
        {
            id: 2,
            name: "Банан",
            price: 80
        },
        {
            id: 3,
            name: "Апельсин",
            price: 120
        }
    ];

    return (
        <div>
            <ProductsList title={"Овощи"} products={products1}/>
            <ProductsList title={"Фрукты"} products={products2}/>
        </div>
    );
};

export default Products;