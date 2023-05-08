import {createSlice} from '@reduxjs/toolkit';

const initialState={
    projects:[],
    project:{}
        // idproject:undefined,
        // iduser:undefined,
        // project_date:undefined,
        // title:undefined,
        // subtitle:undefined,
        // principal_img:undefined,
        // publication_project:undefined
    
};
// {
//     idproject:undefined,
//     iduser:36,
//     project_date:undefined,
//     title:undefined,
//     subtitle:undefined,
//     principal_img:undefined,
//     publication_project:undefined

// };

export const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        takeProjectInfo:(state,action)=>{
            state.projects=action.payload;
            
            // state.idproject=action.payload.idproject;
            // state.iduser=action.payload.iduser;
            // state.project_date=action.payload.project_date;
            // state.title=action.payload.title;
            // state.subtitle=action.payload.subtitle;
            // state.principal_img=action.payload.principal_img;
            // state.publication_project=action.payload.publication_project;
        },
        takeOneProject:(state,action)=>{
            state.project=action.payload;
        }
    }
});
export const {takeProjectInfo,takeOneProject}=projectSlice.actions

export default projectSlice.reducer;