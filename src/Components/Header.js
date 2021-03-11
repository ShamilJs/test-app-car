import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
	const sumValues = useSelector(state => state.app.sumValues)
	const app = useSelector(state => state.app)
	const location = useLocation().pathname;
	const path = (location.split('/'))[(location.split('/')).length-1];

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(app.cart))
		localStorage.setItem('numberOfGoods', JSON.stringify(app.numberOfGoods))
		localStorage.setItem('sumValues', JSON.stringify(app.sumValues))
		localStorage.setItem('total', JSON.stringify(app.total))
		// eslint-disable-next-line
	}, [app.sumValues])

    return (
        <div className="header">
				<div className="header__title">INTERNET-SHOP</div>
			{!path ?
				<Link className="header__cart" to="/Cart">
					<img
						src="./img/cart.png"
						alt="cart"
						className={sumValues ? 'header__notice-click' : ''}
					/>
					{sumValues ?
						<>
							<div className="header__notice">
								<p>{sumValues}</p>
							</div>
							<p className="header__total">{app.total.toFixed(2)} <span>$</span></p>
						</> :
						null
					}
				</Link> :
				<Link className="header__cart" to="/">
					<img src="./img/back-arrow.png" alt="cart"/>
				</Link>
			}
		</div>
    )
}