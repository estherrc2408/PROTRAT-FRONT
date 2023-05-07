import {createSlice} from '@reduxjs/toolkit';

const initialState=
{

};

export const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        takeProjectInfo:(state,action)=>{
            state.iduser=action.payload.iduser;

        }
    }
});
export const {takeProjectInfo}=projectSlice.actions

export default projectSlice.reducer;