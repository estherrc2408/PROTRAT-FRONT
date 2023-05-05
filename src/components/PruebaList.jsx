import React from 'react';
import { useSelector } from 'react-redux';

export const PruebaList = () => {

    const pruebas = useSelector(state=>state.pruebas)
    console.log(pruebas)

  return (
    <>
    <div>PruebaList</div>
    <p>{pruebas.length}</p>

    {pruebas.map(prueba=>(
        <div >
            <p>no</p>
            <h3>{prueba.title}</h3>
            <p>{prueba.description}</p>
        </div>
    ))}

    </>
  )
}
