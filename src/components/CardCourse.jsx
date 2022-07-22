import React, { useEffect, useState } from "react";
import { H3, StyledCard, TextContainer } from "../style/estilos";
import { urlQuiz } from "../modules/url";

function CardCourse() {
  const [courseCard, setCourseCard] = useState([]);

  console.log(courseCard);
  console.log(setCourseCard);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(urlQuiz)
      .then((resp) => resp.json())
      .then((json) => setCourseCard(json))
      .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <>
      {courseCard.map((element) => ( 
        <StyledCard courses key={element.id}>
          <div className="card-details-container2">
            <figure className="card-img-container2">
              <img src={element.imgen} alt="" className="img2" />
            </figure>
            <TextContainer noGap>
              <H3>{element.titulo}</H3>
              <p className="p-card">{element.descripcion}</p>
            </TextContainer>
          </div>
          <div className="div-header-cont-figure">
            <p className="p-card">{`${element.duracion}Min`}</p>
          </div>
        </StyledCard>
      ))}
    </>
  );
}

export default CardCourse;
