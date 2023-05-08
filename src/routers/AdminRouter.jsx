import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { AdminHomePage } from '../admin/pages/AdminHomePage'
import {Footer} from '../components/Footer'

export const AdminRouter = () => {
  return (
    <>
    <NavBar/>
    <main>
    <Routes>
        <Route path='/list' element={<AdminHomePage/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
