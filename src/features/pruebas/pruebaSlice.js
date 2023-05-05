import {createSlice} from '@reduxjs/toolkit';

const initialState=[
    {
        id:1,
        title: 'prueba 1',
        description:'prueba 1 description',
        complete: false
    },
    {
        id:2,
        title: 'prueba 2',
        description:'prueba 2 description',
        complete: false
    }

];

export const pruebaSlice = createSlice({
    name:'pruebas',
    initialState,
    reducers:{

    }

})
export default pruebaSlice.reducer;//para exportar por defecto solo sus reducers
