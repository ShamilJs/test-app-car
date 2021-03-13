import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../redux/action";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";
import { Modal } from "./Modal";

export const Cart = () => {
    const cart = useSelector(state => state.app.cart);
	const total = useSelector(state => state.app.total);
	const modal = useSelector(state => state.show.modal);

	const dispatch = useDispatch();

	const handleClick = () => dispatch(showModal(true));

    if (!cart.length) return <EmptyCart/>;
        
    return (
		<>
			{modal && <Modal/>}
			<div className="cart">
				<div className="cart__up">
					<p className="cart__total">
						Общаяя стоимость покупок: {total.toFixed(2)}<span>$</span>
					</p>
					<p className="cart__clear"
						onClick={handleClick}
					>Очистить корзину</p>
				</div>
				{cart.map(item => <CartItem key={item.id} {...item}/>)}
			</div>
		</>
    );
};