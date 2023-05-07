import {createSlice} from '@reduxjs/toolkit';

const initialState=
{
    id:undefined,
    nickname:undefined,    
    isAuthenticated:false,
    token:undefined,
    rol:undefined,
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
            state.rol=action.payload.rol;
            state.msg=action.payload.msg;
        },
        logout: (state,action)=>{

            state.nickname=action.payload.nickname;
            state.isAuthenticated=false;
            state.token='';
        },
        sign: (state,action)=>{

            state.isAuthenticated=action.payload.ok;
            state.msg=action.payload.msg;
        }
    }
})
export const {login,logout,sign}=authSlice.actions

export default authSlice.reducer;