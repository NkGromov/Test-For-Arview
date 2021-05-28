import { combineReducers, createStore } from "redux";
import AppReducer from "./AppReducer";

let redusers = combineReducers({
    AppReducer,
});

let store = createStore(redusers);

window.store = store;

export default store;
