import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'

import type { Image } from 'types/image'

type Props = {
  heading: string
  description: string
  img: Image
}

const StyledHeader = styled.header`
  position: relative;

  margin-top: ${({ theme }) => theme.navbar.height};

  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.navbar.heightLG};
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(60vh - ${({ theme }) => theme.navbar.height});

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 100%;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: calc(60vh - ${({ theme }) => theme.navbar.heightLG});
  }
`

const StyledContainer = styled(Container)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.container.padding};

  z-index: 2;
`

const StyledHeading = styled(Heading)`
  position: relative;
  font-family: 'Montserrat';
  letter-spacing: 1px;
`

const StyledText = styled(Text)``

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1;
`

const Header: React.FC<Props> = ({ heading, description, img }) => {
  return (
    <StyledHeader>
      <ImgWrapper>
        <LazyImage src={img.src} alt={img.alt} loading="eager" />
      </ImgWrapper>
      <StyledContainer>
        <StyledHeading
          size={40}
          themecolor="white"
          transform="uppercase"
          margin="10px"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        <StyledText
          size={16}
          themecolor="white"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </StyledContainer>
      <Overlay />
    </StyledHeader>
  )
}

export default Header
