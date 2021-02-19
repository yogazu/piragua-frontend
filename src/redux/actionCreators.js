import { ACT_TO_MUNICIPIOS, ADD_TO_CART , ACT_TO_MAPA} from "./actions"


const addToCart = id => ({
    type : ADD_TO_CART,
    id : id
})

const actToMunicipios = id => ({
    type : ACT_TO_MUNICIPIOS,
    id
})

const actToMapa = id => ({
    type : ACT_TO_MAPA,
    id
})

export {addToCart,actToMunicipios,actToMapa}