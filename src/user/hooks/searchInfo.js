import { useDispatch } from "react-redux";
import { takeInfo } from "../../features/user/userSlice";
// import {takeInfo} from '../../features/user/userSlice'

export const searchProfile = () => {
    const [isLoading,setIsLoading]=useState(true);
    const dispatch = useDispatch();

    const putUser = async (url,method,data) => {
        try {
            const response = await fetchApi(url,method,data);
            console.log(response)
            if(response.ok){
                const data=response.data.shift();
                console.log(data);
                dispatch(takeInfo(data));
            }
        } catch (error) {
            return error
        }finally{
            setIsLoading(false);//cuando finalice la promesa
        }
    }

    useEffect(()=>{
        isLoading(true);
        putUser()
      },[])

    return{
        putUser,
        isLoading
    }


}