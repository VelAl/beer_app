import { getAllBeer } from "../functions/workWithApi"
import { SET_BEER_TO_STORE } from "./actionTypes"


export const actions = {
    setBeer: (data)=>({type: SET_BEER_TO_STORE, payload: data}),
    getBeer: ()=> getAllBeer
}


