import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
	const sumValues = useSelector(state => state.app.sumValues)
	const location = useLocation().pathname;
	const path = (location.split('/'))[(location.split('/')).length-1];

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
						<div className="header__notice">
							<p>{sumValues}</p>
						</div> :
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