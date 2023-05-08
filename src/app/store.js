import {configureStore} from '@reduxjs/toolkit';
import pruebasReducer from '../features/pruebas/pruebaSlice'//exportacion establecida por defecto en pruebaSlice
import usersReducer from '../features/user/userSlice';
import projectsReducer from '../features/project/projectSlice';
import authReducer from '../features/auth/authSlice';
import adminReducer from '../features/admin/adminSlice'

export const store = configureStore({
    reducer:{
        
    pruebas:pruebasReducer,
    users:usersReducer,
    projects:projectsReducer,
    auth:authReducer,
    admin:adminReducer

    }
});
store.subscribe(() => console.log(store.getState()));//nos da por consola los cambios de estado que se suceden
