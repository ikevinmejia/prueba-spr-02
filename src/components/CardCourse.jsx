
import { H3, StyledCard, TextContainer } from "../style/estilos";


function CardCourse({img, descripcion, duracion, titulo}) {
  


 
    return (
      <>
        
          <StyledCard >
            <div className="card-details-container2">
              <figure className="card-img-container2">
                <img src={img} alt="" className="img2" />
              </figure>
              <TextContainer noGap>
                <H3>{titulo}</H3>
                <p className="p-card">{descripcion}</p>
              </TextContainer>
            </div>
            <div className="div-header-cont-figure">
              <p className="p-card">{`${duracion}Min`}</p>
            </div>
          </StyledCard> 
        
      </>
    );
  
}

export default CardCourse;
