import { SHOW_ERROR, SHOW_LOADER,
    SHOW_MODAL} from './types';

const initiaState = {
    loader: false,
    modal: false,
    err: {show: false, message: ''}
};


export const showReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: action.payload};
        case SHOW_MODAL:
            return {...state, modal: action.payload};
        case SHOW_ERROR:
            return {...state, err: {show: action.payload, message: action.message}};
        default: return state;
    };
};