import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProductToCart, removeItemInCart } from "../redux/action";

export const CartItem = ({  name, price, image, id }) => {
    const numberOfGoods = useSelector(state => state.app.numberOfGoods);
    const [value, setValue] = useState(numberOfGoods[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeProductToCart(id, value));
        // eslint-disable-next-line
    }, [value]);

    const handleChange = e => {
        e.preventDefault();
        if (e.target.textContent === '+') setValue(value => value + 1);
        if (e.target.textContent === '-' && value > 1) setValue(value => value - 1);
        if (e.target.value <= 0 ) return;
        setValue(value => +e.target.value);
    };

    const removeItem = () => dispatch(removeItemInCart(id));

    return (
        <div className="cart__item">
			<div className="cart__left">
				<div className="cart__image">
					<img src={`https://murmuring-tor-81614.herokuapp.com${image}`} alt="product-img"/>
				</div>
				<p className="cart__title">{name}</p>
				<p className="cart__price">{price} <span>$</span></p>
				<div className="cart__control-number">
					<input
                        type="number"
                        value={value}
                        onChange={handleChange}
                    ></input>
					<button onClick={handleChange}>+</button>
					<button onClick={handleChange}>-</button>
				</div>
			</div>
			<p className="cart__total-price">
                {(value * price).toFixed(2)} <span>$</span>
            </p>
			<button
                className="cart__remove"
                onClick={removeItem}
            >×</button>
		</div>
    );
};