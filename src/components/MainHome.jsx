import React from 'react'
import { H2, MainHome, P, TextContainer } from '../style/estilos'
import coin from '../assets/img/coin.png'
import bell from '../assets/img/bell.png'

function HeaderHome({ name, coins }) {
  return (
    <>
        <MainHome>
            <TextContainer>
                <H2>Hi, {name}</H2>
                <P>Let's start learning</P>
            </TextContainer>
            <div className='div-header'>
                <div className='div-header-coin'>
                    <div className='div-header-cont-figure'>
                        <figure>
                            <img src={coin} alt="" />
                        </figure>
                        <P>{coins}</P>
                    </div>
                    <a href="">
                        <img src={bell} alt="" />
                    </a>
                </div>
            </div>
        </MainHome>
    </>
  )
}

export default HeaderHome