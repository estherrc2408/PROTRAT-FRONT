export const serializerForm = (dataForm) =>{
    const data = new FormData(dataForm);
    const obj = {};
    for(let[key,value] of data){
        if(!value)return;
        obj[key]=value;
    }
    return obj;
}