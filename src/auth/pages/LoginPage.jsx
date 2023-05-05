import React from 'react'
import { NavBar } from '../../components/NavBar';
import { LoginForm } from '../components/LoginForm';
import {Footer} from '../components/Footer';
import {localStorageFunctions} from '../../helpers/localStorage/localStorage'
import { useEffect } from 'react';


export const LoginPage = () => {
  
  const {clearLocal} =localStorageFunctions;

  useEffect(()=>{
  clearLocal()
  },[])

  return (
    <>
    <NavBar/>
    <LoginForm/>
    <Footer/>
    </>
  )
}
