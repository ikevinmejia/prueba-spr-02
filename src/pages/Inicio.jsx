import React, { useEffect, useState } from 'react'
import { Contenedor, Img, Figure } from "../style/estilos";
import logo from '../assets/img/Logo.png'
import Contador from '../components/Contador';
// import { Navigate } from 'react-router-dom';
import img2 from '../assets/img/img-p2.png'
import Introduce from './Introduce';

function Inicio() {

  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    setInicio(true);
    setTimeout(() => {
      setInicio(false)
    }, 4000);

  }, [])


  return (
    <Contenedor column>
      {
        inicio ? (
          <>
            <Figure>
              <Img src={logo}/>
            </Figure>
            <Contador/>
          </>
        ):(
          <Introduce
            imagen={img2}
            titulo='Explore new courses'
            texto='Study and watch all our new courses and there are many of them'
            enlace='/b2'/>
          )}

      </Contenedor>
  )
}
export default Inicio;
