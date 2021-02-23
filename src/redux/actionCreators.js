import { ACT_TO_MUNICIPIOS , ACT_TO_MAPA} from "./actions"

const actToMunicipios = id => ({
    type : ACT_TO_MUNICIPIOS,
    id
})

const actToMapa = id => ({
    type : ACT_TO_MAPA,
    id
})

export {actToMunicipios,actToMapa}