import {createSlice} from '@reduxjs/toolkit';

const initialState=
{
    id:undefined,
    nickname:undefined,    
    isAuthenticated:false,
    token:undefined,
    msg:undefined
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.id=action.payload.id;
            state.nickname=action.payload.nickname;
            state.isAuthenticated=action.payload.ok;
            state.token=action.payload.token;
            state.msg=action.payload.msg;
        },
        logout: (state,action)=>{

            state.nickname=action.payload.nickname;
            state.isAuthenticated=false;
            state.token='';
        }
    }
})
export const {login,logout}=authSlice.actions

export default authSlice.reducer;