import React, { useEffect } from 'react'
import { UserNavBar } from '../user/components/UserNavBar'
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../user/pages/ProfilePage';
import { ProjectPage } from '../user/pages/ProjectPage';
import { EditProfilePage } from '../user/pages/EditProfilePage';
import { SearchPage } from '../user/pages/SearchPage';
import { UserFooter } from '../user/components/UserFooter';
import {localStorageFunctions} from '../helpers/localStorage/localStorage';
import { useSelector,useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice'
import { fetchApi } from '../api/fetchProtrat';


export const UserRouter = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();


const validateToken = () =>{
    const {getLocal}=localStorageFunctions;
    const localInfo=getLocal();
    dispatch(login(localInfo));

}

// const tokenComparer = async(data) =>{
//     const response = await fetchApi("/api/login", "POST", data);
    
//     console.log(response.token);
//     console.log(token);
//     if(response.token==token){

//         dispatch(login(response));
//     }else{
//         // navigate(`/login`);
//     }

// }

useEffect(()=>{
validateToken();
},[])


    return (
        <>
            <UserNavBar />
            <main>
                <Routes>
                    <Route path='/profile/:nickname' element={<ProfilePage />}></Route>
                    <Route path='/profile/:nickname/edit' element={<EditProfilePage/>}></Route>
                    <Route path='/project/:idproject' element={<ProjectPage />}></Route>
                    <Route path='/' element={<SearchPage />}></Route>
                </Routes>
            </main>
            <UserFooter />
        </>
    )
}
