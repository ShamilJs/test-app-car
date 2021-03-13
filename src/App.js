import React, { useEffect } from 'react';
import { getDataFromServer } from './redux/action';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { Header } from './Components/Header'
import { Title } from './Components/Title'
import { Products } from './Components/Products'
import { Cart } from './Components/Cart';
import { Loader } from './Components/Loader';
import { ServerError } from './Components/ServerError';
import './App.css';


const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const params = JSON.parse(localStorage.getItem('params'));
		dispatch(getDataFromServer(params));
		// eslint-disable-next-line
	}, []);


  	return (
	  	<Router>
			<Header/>
			<div className="container">
				<ServerError/>
				<Title/>
				<Switch>
					<Route exact path="/">
						<Products/>
						<Loader/>
					</Route>
					<Route path="/Cart">
						<Cart/>            
					</Route>
				</Switch>
			</div>
		</Router>
  	);
};

export default App;
