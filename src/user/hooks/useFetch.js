import { useEffect, useState } from "react";
import {fetchApi} from "../../api/fetchProtrat"

export const useFetch = (what) =>{
    console.log(`buscando ${what} en el fetch`);
    const [isLoading,setIsLoading]=useState(true);

    const obj=[];

    const consult = async(url,method,data) =>{

    //en el caso de getuserprojects data será el id del usuario
    const response = await fetchApi(url,method,data)
    obj=response.data;
    //puede tener un array con todos los proyectos del usuario o un string que ponga que no hay ningún proyecto creado.
        //ok true o false respectivamente
    }
    useEffect(()=>{
        consult(url,method,data)
        console.log('en el useEffect')
    },[])

    return{
        isLoading,
        obj
    }
}