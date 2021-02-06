import { ACT_TO_MUNICIPIOS, ADD_TO_CART } from "./actions"


const addToCart = id => ({
    type : ADD_TO_CART,
    id : id
})

const actToMunicipios = id => ({
    type : ACT_TO_MUNICIPIOS,
    id
})

export {addToCart,actToMunicipios}