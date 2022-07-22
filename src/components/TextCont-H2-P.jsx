import { TextContainer, H2, P } from '../style/estilos';

function TextContainerH2P({title, text}) {
  return (
    <TextContainer>
        <H2>{title}</H2>
        <P>{text}</P>
    </TextContainer>
  )
}

export default TextContainerH2P;