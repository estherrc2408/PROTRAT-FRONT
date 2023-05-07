import {createSlice} from '@reduxjs/toolkit';

const initialState=
{
    iduser:undefined,
    email:undefined,
    first_name:undefined,
    last_name:undefined,
    birth_date:undefined,
    city:undefined,
    image:"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
    rol:undefined,
    instagram_nickname:undefined,
    twitter_nickname:undefined,
    linkedin_url:undefined,
    num_projects:undefined
    // user:{}
};

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        takeInfo:(state,action)=>{
            state.iduser=action.payload.iduser;
            state.email=action.payload.email;
            state.first_name=action.payload.first_name;
            state.last_name=action.payload.last_name;
            state.birth_date=action.payload.birth_date;
            state.city=action.payload.city;
            state.image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            state.rol=action.payload.rol;
            state.instagram_nickname=action.payload.instagram_nickname;
            state.twitter_nickname=action.payload.twitter_nickname;
            state.linkedin_url=action.payload.linkedin_url;
            state.num_projects=action.payload.num_projects
        }
    }

})
export const {takeInfo}=userSlice.actions

export default userSlice.reducer;