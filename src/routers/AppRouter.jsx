import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Elements
import {LoginPage} from '../auth/pages/LoginPage';
import {SignPage} from '../auth/pages/SignPage';
import { NavBar } from '../components/NavBar';
import {HomePage} from '../pages/HomePage';
import {UserRouter} from '../routers/UserRouter'
import {UserPage} from '../auth/pages/UserPage';
import {AdminRouter} from '../routers/AdminRouter'
//useSelector para comprobar si el usuario ha sido autentificado
import { useSelector } from 'react-redux';
//Hooks
// import { useEffect } from 'react';

export const AppRouter = () => {

  const auth = useSelector(state=>state.auth)
  console.log(auth);

  // const rol = 'admin' || 'standar';
  // const nickname = 'nickname';
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:nickname" element={<UserPage />}></Route>
        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {
          (auth.rol === 'standar') && <Route path='/standard/*' element={<UserRouter />}></Route>
        }
        {
          (auth.rol === 'admin') && <Route path='/admin/*' element={<AdminRouter />}></Route>
        }
      </Routes>
    </>
  );
};