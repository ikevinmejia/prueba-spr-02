import React from "react";
import { Figure, Img, Contenedor, StyledLink } from "../style/estilos";
import notFound from "../assets/img/not-found.png";

function NotFoundPage() {
  return (
    <Contenedor column>
        <Figure>
            <Img src={notFound} />
        </Figure>
        <StyledLink to="/">Come back to home</StyledLink>
    </Contenedor>
  );
}

export default NotFoundPage;
