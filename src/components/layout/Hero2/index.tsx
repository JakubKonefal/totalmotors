import Button from 'components/shared/button'
import Container from 'components/shared/container'
import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'
import useBreakpoint from 'hooks/useBreakpoint'
import React from 'react'
import styled from 'styled-components'
import { Image } from 'types/image'

type Props = {
  heading: string
  description: string
  imgMobile: Image
  imgDesktop: Image
}

const Header = styled.header`
  margin-bottom: 30px;
  margin-top: ${({ theme }) => theme.navbar.height};

  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.navbar.heightLG};
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  max-height: 700px;

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 100%;
  }
`

const StyledContainer = styled(Container)``

const Hero2: React.FC<Props> = ({
  heading,
  description,
  imgMobile,
  imgDesktop,
}) => {
  const { lg } = useBreakpoint()

  return (
    <Header>
      <ImgWrapper>
        <LazyImage
          src={lg ? imgDesktop.src : imgMobile.src}
          alt={lg ? imgDesktop.alt : imgMobile.alt}
          loading="eager"
        />
        <StyledContainer>
          <Heading
            size={50}
            themecolor="white"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={20}
            themecolor="white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </StyledContainer>
      </ImgWrapper>
    </Header>
  )
}

export default Hero2
