import { ADD_PRODUCT_TO_CART,
    CHANGE_NUMBER_PRODUCT_TO_CART,
    CLEAR_CART,
    GET_DATA_FROM_SERVER,
    REMOVE_ITEM_IN_CART } from "./types"


// Временная, переделать на санку
export const getDataFromServer = data => {
    return {
        type: GET_DATA_FROM_SERVER,
        payload: data
    }
}


export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const changeProductToCart = (id, number) => {
    return {
        type: CHANGE_NUMBER_PRODUCT_TO_CART,
        id: id,
        payload: number
    }
}

export const removeItemInCart = id => {
    return {
        type: REMOVE_ITEM_IN_CART,
        id: id,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}