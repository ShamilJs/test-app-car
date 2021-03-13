import React from 'react';
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/action";

export const ProductItem = ({ name, price, image }) => {
	const dispatch = useDispatch();
	
	const handelClick = () => {
		const id = image + name + price;
		dispatch(addProductToCart({name, price, image, id}));
	};

    return (
        <div className="item-box">
			<img src={`https://murmuring-tor-81614.herokuapp.com${image}`} alt="product"/>
			<div className="item-box__content">
				<p className="item-box__title">{name}</p>
				<div className="item-box__price price-box">
					<p className="price-box__price">{price} <span>$</span></p>
					<button
						className="price-box__btn"
						onClick={handelClick}
					>
						<img src="./img/add-to-cart.png" alt="add-to-cart"/>
						<div className="price-box__notice">
							Добавить товар в корзину
						</div>
					</button>
				</div>
			</div>
		</div>
    );
};