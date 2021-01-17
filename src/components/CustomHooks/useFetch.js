import {useState,useEffect} from "react"


function useFetch (url,initialState){
    //console.log(url);
    const [data, setData ]       = useState (initialState)
    const [loading, setLoading ] = useState(false)
    const [error,  setError]     = useState(null) 


    function getData(){
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
        getData()
    },[])

    return {

       
        data,
        loading,
        error

    }

}

export default useFetch