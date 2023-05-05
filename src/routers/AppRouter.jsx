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
import {Footer} from '../components/Footer';
//useSelector para comprobar si el usuario ha sido autentificado
import { useSelector } from 'react-redux';
//Hooks
import { useEffect } from 'react';

export const AppRouter = () => {

  const auth = useSelector(state=>state.auth)
  console.log(auth);

  


  const rol = 'admin' || 'standar';
  const nickname = 'nickname';
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:nickname" element={<UserPage />}></Route>
        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {
          (rol === 'standar') && <Route path='/*' element={<UserRouter />}></Route>
        }
        {
          (rol === 'admin') && <Route path='/*' element={<AdminRouter />}></Route>
        }
      </Routes>
      <Footer/>
    </>
  );
};