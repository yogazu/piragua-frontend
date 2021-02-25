import { combineReducers, createStore } from "redux";
import { ACT_TERRITORIO, ACT_MUNICIPIO } from "./actions";
import {composeWithDevTools} from "redux-devtools-extension"

const initialStote = {
 territorioActual:"",
 municipioActual:"",
 nombreTerritorio:"",
 nombreMunicipio:""
}



const rootActTerritorio = (state = initialStote, action) => {
    
    if(action.type === ACT_TERRITORIO)
        return {
            ...state,
            territorioActual: action.data.uuid,
            nombreTerritorio: action.data.nombre,
            municipioActual: "",
            nombreMunicipio: ""
    }
    if(action.type === ACT_MUNICIPIO)
        return {
            ...state,
            municipioActual: action.data.uuid,
            nombreMunicipio: action.data.nombre
        }
    return state
}


export default createStore( combineReducers({rootActTerritorio}),composeWithDevTools())


