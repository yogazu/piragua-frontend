import { combineReducers, createStore } from "redux";
import { ACT_TO_MUNICIPIOS, ACT_TO_MAPA } from "./actions";
import {composeWithDevTools} from "redux-devtools-extension"

const initialStote = {
 territorioActual:"",
 nombreTerritorio:""
}

const rootActTerritorio = (state = initialStote, action) => {
    
    if(action.type === ACT_TO_MAPA)
        return {
            ...state,
            nombreTerritorio: action.id
    }
    if(action.type === ACT_TO_MUNICIPIOS)
        return {
            ...state,
            territorioActual: action.id
        }
    return state
}

export default createStore( combineReducers({rootActTerritorio}),composeWithDevTools())


