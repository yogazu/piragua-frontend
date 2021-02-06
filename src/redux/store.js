import { any } from "prop-types";
import { createStore } from "redux";
import { ACT_TO_MUNICIPIOS, ADD_TO_CART } from "./actions";

const initialStote = {
 cart:[],
 territorio:any
 
}

const rootReducer = (state = initialStote, action) => {
   
    if(action.type === ADD_TO_CART)
        return {
            ...state,
            cart: state.cart.concat(action.id)
        }
    if(action.type === ACT_TO_MUNICIPIOS)
    console.log("dos")
        return {
            ...state,
           
            territorio: action.id
            
        }

return state

}

export default createStore(rootReducer)


