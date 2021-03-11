import React, { useEffect } from 'react';
import { Header } from './Components/Header'
import { Title } from './Components/Title'
import { Products } from './Components/Products'
import './App.css';
import { Cart } from './Components/Cart';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { getDataFromServer } from './redux/action';
import { useDispatch } from 'react-redux';



const App = () => {
	const dispatch = useDispatch()

	// start()

// времянка
	useEffect(() => {
		return  fetch(`https://murmuring-tor-81614.herokuapp.com/api/goods/`)
		.then((response) => response.json())
		.then((data) => dispatch(getDataFromServer(data)))
		// eslint-disable-next-line
	}, [])


  	return (
	  	<Router>
			<Header/>
			<div className="container">
				<Title/>
				<Switch>
					<Route exact path="/">
						<Products/>            
					</Route>
					<Route path="/Cart">
						<Cart/>            
					</Route>
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
