import { SET_BEER_TO_STORE } from "./actionTypes";


export const beerSelector =(store)=> {
    return store.beerData
}



export const beerReducer = (state = [], action) => {
    switch(action.type) {
        case SET_BEER_TO_STORE : {
            return [...action.payload]
        }

        default: return state
    }
}