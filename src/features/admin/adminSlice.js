import {createSlice} from '@reduxjs/toolkit';

const initialState={
    profiles:[]
};

export const adminSlice = createSlice({
    name:'profiles',
    initialState,
    reducers:{
        takeProfiles:(state,action)=>{
            state.profiles=action.payload
        }
    }
});

export const {takeProfiles}=adminSlice.actions

export default adminSlice.reducer;