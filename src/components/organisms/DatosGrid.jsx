import React from "react"
import DatosCard from "../molecules/DatosCard"
import withLoader from "../hoc/withLoader"
const DatosGrid = ({datos}) => (
    <div className="ed-grid m-grid-4">
        { datos.map(d => (
            <DatosCard
                Key = {d.id}
                id  = {d.id}
                title = {d.title}
                image = {d.image}
                price = {d.price}
                addDatoToCart={0}
            />
            ))
        }
      </div>

)

export default withLoader("datos")(DatosGrid)