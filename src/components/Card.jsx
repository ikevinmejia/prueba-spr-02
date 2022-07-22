import React from "react";
import {StyledCard, H3, TextContainer } from '../style/estilos';
import coin from '../assets/img/coin.png'

function Card() {
  return (
    <>
      <StyledCard>
        <figure className="card-img-container">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
            alt=""
            className="img1"
          />
        </figure>
        <div className="card-details-container">
          <TextContainer noGap>
            <H3>Elementary</H3>
            <p className="p-card">For beginners and intermediates</p>
          </TextContainer>
          <div className="div-header-cont-figure">
            <figure className="coinCard">
              <img src={coin} alt="" />
            </figure>
            <p className="p-card">400</p>
          </div>
        </div>
      </StyledCard>
    </>
  );
}

export default Card;
