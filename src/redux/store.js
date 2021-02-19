import { createStore } from "redux";
import { ACT_TO_MUNICIPIOS, ADD_TO_CART, ACT_TO_MAPA } from "./actions";

const initialStote = {
 cart:[],
 territorioActual:"",
 nombreTerritorio:""
}

const rootReducer = (state = initialStote, action) => {
   
    if(action.type === ADD_TO_CART)
        return {
            ...state,
            cart: state.cart.concat(action.id)
        }

    if(action.type === ACT_TO_MUNICIPIOS)
        
        return {
            ...state,
            territorioActual: action.id
        }
    
    if(action.type === ACT_TO_MAPA)
        console.log(action)
        return {
            ...state,
            nombreTerritorio: action.id
    }

return state

}

export default createStore(rootReducer)


