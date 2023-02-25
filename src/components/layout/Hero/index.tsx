import React from 'react'
import styled from 'styled-components'

import HeroSlider from './HeroSlider'
import type { HeroSlide } from './HeroSlider'

type Props = {
  slides: HeroSlide[]
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
      <HeroSlider slides={slides} perView={1} />
    </Header>
  )
}

export default Hero
