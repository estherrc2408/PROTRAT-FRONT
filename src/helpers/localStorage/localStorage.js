const setLocal = (user) => {
    console.log('subiendo al local...')
    localStorage.setItem('logged', JSON.stringify(user));
}

const getLocal = () => {
    return JSON.parse(localStorage.getItem('logged')) || [];
}


export const localStorageFunctions = {
    setLocal,
    getLocal
}