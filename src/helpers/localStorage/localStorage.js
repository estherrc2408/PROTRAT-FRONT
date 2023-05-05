const setLocal = (user) => {
    console.log('subiendo al local...')
    localStorage.setItem('logged', JSON.stringify(user));
}

const getLocal = () => {
    return JSON.parse(localStorage.getItem('logged')) || [];
}

const clearLocal = () =>{
    console.log('borrando local');
    localStorage.clear();
}

export const localStorageFunctions = {
    setLocal,
    getLocal,
    clearLocal
}