import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { beerReducer } from "./reduser";





const reducer = combineReducers({
    beerData: beerReducer
})



export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));