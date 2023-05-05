import { useDispatch } from "react-redux";
import { login } from '../../features/auth/authSlice'
import { fetchApi } from "../../api/fetchProtrat";
import { localStorageFunctions } from "../../helpers/localStorage/localStorage";
import { useSelector } from "react-redux";

export const useAuth = () => {

    const dispatch = useDispatch();
    // const {login,logout}=loginReducers;
    const { setLocal } = localStorageFunctions;

    const useLogIn = async (dataForm) => {
        try {
            const response = await fetchApi("/api/login", "POST", dataForm)

            //lo suyo es tener el token el el local y guardarlo con su nickname e id, el estado completo. 
            if (response.ok) {
                console.log(response);
                setLocal(response);
                dispatch(login(response));
                // const auth = useSelector(state=>state.auth)
                // const {nickname}=auth;
                // navigate(`/standard/profile/${nickname}`);

                return {
                    msg: response.msg,
                    ok: response.ok
                }
            } else {
                console.log(response);
                dispatch(login(response));

                throw {
                    msg: response.msg,
                    ok: response.ok
                }
            }

        } catch (error) {
            return error;
            // dispatch(logout('error'))
        }

    };
    const useLogOut = () => {

    }
    const useSign = async (dataForm) => {
        try {
            const response = await fetchApi("/api/users/", "POST", dataForm)

            //lo suyo es tener el token el el local y guardarlo con su nickname e id, el estado completo. 
            if (response.ok) {
                console.log(response);

                return {
                    msg: response.msg,
                    ok: response.ok
                }
            } else {
                console.log(response);
                throw {
                    msg: response.msg,
                    ok: response.ok
                }
            }

        } catch (error) {
            return error;
        }
    }



    return {
        useLogIn,
        useLogOut,
        useSign
    }
}
