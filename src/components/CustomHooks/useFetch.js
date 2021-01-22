import {useState,useEffect} from "react"


function useFetch (url,initialState){
    console.log(url)
    const [data, setData ]       = useState (initialState)
    const [loading, setLoading ] = useState(false)
    const [error,  setError]     = useState(null) 
    
    console.log("por aca paso 0")
    function getData(){
        console.log("por aca paso 2")
        setLoading(true)
       
        fetch(url)
            .then(response => response.json())
            .then(response =>{  setData(response)   
                setLoading(false)
        })
        .catch (error =>{
            setLoading(false)
            setError(error)

        })
    }  
    
    useEffect(() => {
        console.log("por aca paso 1")
        getData()
    },[])

    return {

        data,
        loading,
        error

    }

}

export default useFetch