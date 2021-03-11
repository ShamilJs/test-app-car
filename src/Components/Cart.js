import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../redux/action"
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"

export const Cart = () => {
    const cart = useSelector(state => state.app.cart)
	const total = useSelector(state => state.app.total)

	const dispatch = useDispatch()

	const handleClick = () => dispatch(clearCart())

    if (!cart.length) return <EmptyCart/>
        
    return (
        <div className="cart">
			<div className="cart__up">
				<p className="cart__total">Общаяя стоимость покупок: {total.toFixed(2)}<span>$</span></p>
				<p
					className="cart__clear"
					onClick={handleClick}
				>Очистить корзину</p>
			</div>
            {cart.map((item, i) => (
                <CartItem key={item.id} {...item}/>
            ))}
		</div>
    )
}