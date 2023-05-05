import React from 'react'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../components/Footer'

export const UserPage = () => {
    //vista perfil usuario
  return (
    <>
    <NavBar/>
    <UserInfo/>
    <ProjectsList/>
    <Footer/>
    </>
  )
}
