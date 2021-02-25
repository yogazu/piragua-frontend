import { ACT_TERRITORIO ,  ACT_MUNICIPIO } from "./actions"

const actTerritorio = data => ({
    type : ACT_TERRITORIO,
    data
})


const actMunicipio = data => ({
    type : ACT_MUNICIPIO,
    data
})

export {actTerritorio,actMunicipio}