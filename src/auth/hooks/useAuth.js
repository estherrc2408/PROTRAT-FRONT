import { useDispatch } from "react-redux";
import {login} from '../../features/auth/authSlice'
import { fetchApi } from "../../api/fetchProtrat";
import {localStorageFunctions} from "../../helpers/localStorage/localStorage";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

export const useAuth = ()=>{

    const dispatch = useDispatch();
    // const {login,logout}=loginReducers;
    const {setLocal}=localStorageFunctions;
    //Creamos una función para cada action del dispatch que vayamos a utilizar;
    
    const useLogIn = async(dataForm) =>{
        try{
        const response = await fetchApi("/api/login","POST",dataForm)

//lo suyo es tener el token el el local y guardarlo con su nickname e id, el estado completo. 
            if(response.ok){
                console.log(response);
                setLocal(response);
                dispatch(login(response));
                

                return {
                    msg:response.msg,
                    ok:response.ok
                }
                }else{
                    console.log(response);
                    dispatch(login(response));

                throw {
                    msg:response.msg,
                    ok:response.ok
                }
            }

        }catch(error){
            return error;
            // dispatch(logout('error'))
        }

    };
    const useLogOut = () =>{

    }

    return{
        useLogIn,
        useLogOut
    }
}
