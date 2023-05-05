import React from 'react'

export const UserRouter = () => {
    return (
        <>
            <NavBar/>
            <main>
                <Routes>
                    <Route path='/profile/:nickname' element={<ProfilePage/>}></Route>
                    <Route path='/project/:idproject' element={<ProjectPage/>}></Route>
                    <Route path='/' element={<SearchPage />}></Route>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}
