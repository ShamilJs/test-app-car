import { ADD_PRODUCT_TO_CART,
	CHANGE_NUMBER_PRODUCT_TO_CART,
	CLEAR_CART,
	GET_DATA_FROM_SERVER,
	REMOVE_ITEM_IN_CART } from './types';

const initiaState = {
    products: [],
	cart: JSON.parse(localStorage.getItem('cart')) || [],
	numberOfGoods: JSON.parse(localStorage.getItem('numberOfGoods')) || {},
	sumValues: JSON.parse(localStorage.getItem('sumValues')) || 0,
	total: JSON.parse(localStorage.getItem('total')) || 0
};



export const appReducer = (state = initiaState, action) => {

	const changeTotal = () => {
		state.total = state.cart.reduce((acc, item) => {
			return acc + (item.price * state.numberOfGoods[item.id])
		}, state.total);
	};

	const changeSumValues = () =>{ 
		state.sumValues = Object.values(state.numberOfGoods).reduce((a, b) => a + b, 0);
	};

    switch (action.type) {
        case GET_DATA_FROM_SERVER:
            return {...state, products: action.payload};
        case ADD_PRODUCT_TO_CART:
			state.numberOfGoods[action.payload.id] = state.numberOfGoods[action.payload.id] ?
				state.numberOfGoods[action.payload.id] : 1;
			state.sumValues += 1;
			let temp = state.cart.find(item => item.id === action.payload.id);
			if (temp) {
				state.numberOfGoods[action.payload.id] += 1;
			} else {
				state.cart = [...state.cart, action.payload];
			}
			changeTotal();
            return state;
		case CHANGE_NUMBER_PRODUCT_TO_CART:
			state.sumValues = Math.abs(state.numberOfGoods[action.id] - action.payload);
			state.numberOfGoods[action.id] = action.payload;
			changeSumValues();
			changeTotal();
			return state;
		case REMOVE_ITEM_IN_CART: 
			state.cart.forEach((item, i) => {
				if (item.id === action.id) {
					state.sumValues -= state.numberOfGoods[item.id];
					state.total = state.total - (item.price * state.numberOfGoods[item.id]);
					state.cart.splice(i, 1);
				}
			});
			delete state.numberOfGoods[action.id]; 
			changeSumValues();
			return state;
		case CLEAR_CART: 
			return {...state, cart: [], total: 0, sumValues: 0, numberOfGoods: {}};
        default: return state;
    };
};