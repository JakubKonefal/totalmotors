import React from 'react'
import styled from 'styled-components'

import Slider from 'components/shared/Swiper'

import type { Image } from 'types/image'

type Slide = {
  img: Image
  title: string
}

type Props = {
  slides: Slide[]
}

const Header = styled.header`
  margin-top: ${({ theme }) => theme.navbar.height};

  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.navbar.heightLG};
  }
`

const Hero: React.FC<Props> = ({ slides }) => {
  return (
    <Header>
      <Slider slides={slides} perView={1} />
    </Header>
  )
}

export default Hero
