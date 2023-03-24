import React from 'react';
import ProductsItem from "../ProductsItem/ProductsItem";

const ProductsList = ({title, products}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ProductsItem products={products}/>
        </div>
    );
};

export default ProductsList;