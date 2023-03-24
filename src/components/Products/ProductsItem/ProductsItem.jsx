import React from 'react';

const ProductsItem = ({products}) => {
    return (
        <div>
            <ul>
                {
                    products.map(product => {
                        return <li key={product.id}>{product.name} | {product.price}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default ProductsItem;