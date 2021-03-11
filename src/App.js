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
import { getDataFromServer, showLoader } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Components/Loader';



const App = () => {
	const loader = useSelector(state => state.show.loader)
	
	const dispatch = useDispatch()

	// времянка
	useEffect(() => {
		dispatch(showLoader(true))
		return  fetch(`https://murmuring-tor-81614.herokuapp.com/api/goods/`)
		.then((response) => response.json())
		.then((data) => {
			dispatch(getDataFromServer(data))
			dispatch(showLoader(false))
		})
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
						{loader && <Loader/> }
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
