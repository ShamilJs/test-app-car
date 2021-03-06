import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { compose, createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(rootReducer, compose(
// 	applyMiddleware(thunk),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

ReactDOM.render(
	app,
	document.getElementById('root')
);
