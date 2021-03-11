import { SHOW_LOADER,
    SHOW_MODAL} from './types';

const initiaState = {
    loader: false,
    modal: false
};


export const showReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: action.payload};
        case SHOW_MODAL:
                return {...state, modal: action.payload};
        default: return state;
    }
};