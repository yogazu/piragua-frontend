import axios from "axios"
import {useEffect,useState} from "react"


const useDatos = id => {

    const [datos,setDatos] = useState ({})

    useEffect(() => {
         axios.get(`http://my-json-server.typicode.com/yogazu/json-db/datos/${id}`)
        .then(response => setDatos(response.data))
    
      },[])

    return datos
}


export default useDatos