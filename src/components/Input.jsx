import React from 'react'
import { StyledInput } from '../style/estilos'

function Input({tipo, placeh, funcion}) {
  return (
    <StyledInput type={tipo} placeholder={placeh} required autoComplete='true' onChange={funcion}/>
  )
}

export default Input