import React, { useEffect } from 'react'
import { UserNavBar } from '../user/components/UserNavBar'
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../user/pages/ProfilePage';
import { ProjectPage } from '../user/pages/ProjectPage';
import { SearchPage } from '../user/pages/SearchPage';
import { UserFooter } from '../user/components/UserFooter';
import {localStorageFunctions} from '../helpers/localStorage/localStorage'


export const UserRouter = () => {


const validateToken = () =>{
    const localInfo=getLocal();
    console.log(localInfo);

}

useEffect(()=>{

},[])


    return (
        <>
            <UserNavBar />
            <main>
                <Routes>
                    <Route path='/profile/:nickname' element={<ProfilePage />}></Route>
                    <Route path='/project/:idproject' element={<ProjectPage />}></Route>
                    <Route path='/' element={<SearchPage />}></Route>
                </Routes>
            </main>
            <UserFooter />
        </>
    )
}
