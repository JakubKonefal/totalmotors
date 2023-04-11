import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { NavigationContext } from 'contexts/NavigationContext'

import Container from 'components/shared/container'
import LazyImage from 'components/shared/lazyImage'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'

import {
  animation1,
  animation1LG,
  animation2,
  animation2LG,
  animation3,
  animation3LG,
  animationOPACITY,
} from 'constants/hero-animations'

import type { Image } from 'types/image'

type Props = {
  imgCar: Image
  imgMotor: Image
}

const Header = styled.header`
  position: relative;

  margin-bottom: ${({ theme }) => theme.container.marginSM};
  margin-top: ${({ theme }) => theme.navbar.height};

  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.navbar.heightLG};
    margin-top: 0;
    margin-bottom: calc(${({ theme }) => theme.container.marginLG} + 35px);
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.navbar.height});
  height: 100vh;

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 100%;
  }

  .motor-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    animation: ${animationOPACITY} 5s linear 2.5s infinite;

    img {
      object-position: 50% 40% !important;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    /* height: calc(100vh - ${({ theme }) => theme.navbar.heightLG}); */
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  /* height: 100%; */
  transform: translate(-50%, -50%);
  /* padding-top: 140px; */

  z-index: 2;
`

const StyledHeading = styled(Heading)`
  position: relative;
  font-family: 'Montserrat';
  margin-bottom: 50px;
  letter-spacing: 1px;

  .thin {
    font-family: 'Montserrat';
    font-weight: 400;
    margin-left: 8px;
  }

  .animated-heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 40%);
    opacity: 0;
  }

  .first {
    animation: ${animation1} 5s linear infinite;
  }

  .second {
    animation: ${animation1} 5s linear 2.5s infinite;
  }

  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: 100px;
    font-size: 54px;
    text-align: left;

    .animated-heading {
      position: absolute;
      left: 0;
      transform: translate(-3%, 40%);
    }

    .first {
      animation: ${animation1LG} 5s linear infinite;
    }

    .second {
      animation: ${animation1LG} 5s linear 2.5s infinite;
    }
  }
`

const StyledText = styled(Text)`
  margin: 0 auto;

  .hidden {
    visibility: hidden;
  }

  .animated-desc-container {
    position: relative;
  }

  .animated-desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .first {
    animation: ${animation3} 5s linear infinite;
  }

  .second {
    animation: ${animation2} 5s linear 2.5s infinite;
  }

  ${({ theme }) => theme.media.lg.min} {
    font-size: 24px;
    margin: 0 auto 0 0;
    text-align: left;

    .animated-desc {
      transform: translate(-50%, -50%);
    }

    .first {
      animation: ${animation3LG} 5s linear infinite;
    }

    .second {
      animation: ${animation2LG} 5s linear 2.5s infinite;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1;
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.tertiary};

  ${({ theme }) => theme.media.lg.min} {
    left: calc(0% + ${({ theme }) => theme.container.paddingMD});
    transform: translateX(0);
  }
`

const Hero: React.FC<Props> = ({ imgCar, imgMotor }) => {
  const { openModalForm } = useContext(NavigationContext)

  return (
    <Header>
      <ImgWrapper>
        <LazyImage
          className="car-img"
          src={imgCar.src}
          alt={imgCar.alt}
          loading="eager"
        />
        <LazyImage
          className="motor-img"
          src={imgMotor.src}
          alt={imgMotor.alt}
          loading="eager"
        />
      </ImgWrapper>
      {/* <ImgWrapperAnimated></ImgWrapperAnimated> */}

      <StyledContainer>
        <StyledHeading
          size={46}
          themecolor="white"
          align="center"
          transform="uppercase"
        >
          Sprzedaj
          <span className="thin">swój</span>
          <br />
          <span className="animated-heading first">samochód</span>
          <span className="animated-heading second">motocykl</span>
        </StyledHeading>
        <StyledText size={20} themecolor="white" align="center">
          Pomożemy sprzedać Ci
          <span className="animated-desc-container">
            <span className="hidden"> samochód </span>
            <span className="animated-desc first"> samochód, </span>
            <span className="animated-desc second"> motocykl, </span>
          </span>
          <br />
          lub odkupimy go od Ciebie.
        </StyledText>
        <StyledButton type="button" onClick={openModalForm}>
          kontakt
        </StyledButton>
      </StyledContainer>
      <Overlay />
    </Header>
  )
}

export default Hero
