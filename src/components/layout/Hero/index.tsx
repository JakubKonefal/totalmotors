import React from 'react'
import styled, { keyframes } from 'styled-components'

import Container from 'components/shared/container'
import LazyImage from 'components/shared/lazyImage'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'

import type { Image } from 'types/image'

const animation1 = keyframes`
0% {
opacity: 0;
transform: translate(-60%, 40%);
}

5% {
  opacity: 1;
  transform: translate(-50%, 40%);
}



45% {
    opacity: 1;
    transform: translate(-50%, 40%);
  }


  50%{
  opacity: 0;


}

100% {
  opacity: 0;
}

`

const animation2 = keyframes`
0% {
opacity: 0;
transform: translate(-60%, -50%);
}

5% {
  opacity: 1;
  transform: translate(-50%, -50%);
}



45% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }


  50%{
  opacity: 0;


}

100% {
  opacity: 0;
}

`

const animation3 = keyframes`
0% {
opacity: 0;
transform: translate(-60%, -50%);
}

5% {
  opacity: 1;
  transform: translate(-45%, -50%);
}



45% {
    opacity: 1;
    transform: translate(-45%, -50%);
  }


  50%{
  opacity: 0;


}

100% {
  opacity: 0;
}

`

type Props = {
  img: Image
}

const Header = styled.header`
  position: relative;

  margin-bottom: 30px;
  margin-top: ${({ theme }) => theme.navbar.height};

  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.navbar.heightLG};
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.navbar.height});
  max-height: 700px;

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 100%;
  }
`

const StyledContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 140px;

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
`

const StyledText = styled(Text)`
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

const Hero2: React.FC<Props> = ({ img }) => {
  return (
    <Header>
      <ImgWrapper>
        <LazyImage src={img.src} alt={img.alt} loading="eager" />
      </ImgWrapper>
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
      </StyledContainer>
      <Overlay />
    </Header>
  )
}

export default Hero2
