import React from 'react'
import { NavBar } from '../components/NavBar'
import { AdminHomePage } from '../admin/pages/AdminHomePage'

export const AdminRouter = () => {
  return (
    <>
    <NavBar/>
    <main>
    <Routes>
        <Route path='/list' element={<AdminHomePage/>}></Route>
        {/* <Route path='/' element={<SearchPage/>}></Route> */}
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
