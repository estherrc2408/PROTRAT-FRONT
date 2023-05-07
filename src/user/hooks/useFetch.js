import { useEffect, useState } from "react";
import {fetchApi} from "../../api/fetchProtrat"
import { useDispatch } from "react-redux";

export const useFetch = () =>{
    const [isLoading,setIsLoading]=useState(true);
    const dispatch = useDispatch();

    const getData = async (url,method,data,reducer) => {
        try {
            const response = await fetchApi(url,method,data)
            console.log(response)
            if(response.ok){
                const data=response.data.shift();
                console.log(data);
                dispatch(reducer(data));
            }
        } catch (error) {
            return error
        }finally{
            setIsLoading(false);//cuando finalice la promesa
        }
    }

    useEffect(()=>{
        setIsLoading(true);
        getData()
      },[])

    return{
        getData,
        isLoading
    }
}