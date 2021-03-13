import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { showReducer } from "./showReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    show: showReducer
});