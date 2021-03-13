import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../Components/ProductItem';


export const Products = () => {
	const products = useSelector(state => state.app.products);
	
    return (
        <div className="products">
			<div className="products__block">
				{products.map((item, i) => <ProductItem key={i} {...item}/>)}
			</div>
		</div>
    );
};