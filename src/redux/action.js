import { ADD_PRODUCT_TO_CART,
    CHANGE_NUMBER_PRODUCT_TO_CART,
    CLEAR_CART,
    GET_DATA_FROM_SERVER,
    REMOVE_ITEM_IN_CART, 
    SHOW_ERROR, 
    SHOW_LOADER, 
    SHOW_MODAL} from "./types";


// Лоадер
export const showModal = show => {
    return {
        type: SHOW_MODAL,
        payload: show
    };
};

// Модалка подтверждения очистки корзины
export const showLoader = show => {
    return {
        type: SHOW_LOADER,
        payload: show
    };
};

// Модалка об ошибке
export const showError = (show, message) => {
    return {
        type: SHOW_ERROR,
        payload: show,
        message: message
    };
};

// Получение данных с сервера
export const getDataFromServer = params => dispatch => {
    dispatch(showLoader(true));
    return fetch(`https://murmuring-tor-81614.herokuapp.com/api/goods/${params}`)
    	.then(async response => {
			if (!response.ok) {
				throw await 'Что-то пошло не так...';
			}
			return response.json();
		})
		.then(data => dispatch({type: GET_DATA_FROM_SERVER, payload: data}))
        .catch(err => dispatch(showError(true, err)))
        .finally(() => dispatch(showLoader(false)))
}


// Добавление в корзину 
export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    };
};

// Изменение корзины
export const changeProductToCart = (id, number) => {
    return {
        type: CHANGE_NUMBER_PRODUCT_TO_CART,
        id: id,
        payload: number
    };
};

// Удаление из корзины
export const removeItemInCart = id => {
    return {
        type: REMOVE_ITEM_IN_CART,
        id: id,
    };
};

// Очистка корзины
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

