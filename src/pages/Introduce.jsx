import React from 'react'
import TextContainerH2P from '../components/TextCont-H2-P'
import { Contenedor, Figure, Img, StyledLink} from '../style/estilos'


function Introduce({imagen, titulo, texto, enlace}) {
  return (
    <Contenedor column gap spaceAround>
        <Figure>
            <Img src={imagen} />
        </Figure>
        <TextContainerH2P title={titulo} text={texto}/>
        <StyledLink to={enlace}>Next</StyledLink>
    </Contenedor>
  )
}

export default Introduce