import React from 'react';
import { useLocation } from "react-router";


export const Title = () => {
    const location = useLocation().pathname;
	const path = (location.split('/'))[(location.split('/')).length-1];

	let title = path ? 'Корзина' : 'Товары';
    
    return <h1 className="products__title">{title}</h1>;
};