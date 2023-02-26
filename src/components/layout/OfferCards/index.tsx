import React from 'react'
import styled from 'styled-components'

import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'

import { Image } from 'types/image'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import useBreakpoint from 'hooks/useBreakpoint'

export type TileSingle = {
  title: string
  description: string
  link: string
  img: Image
}

type Props = {
  tiles: TileSingle[]
}

const Section = styled.section`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  max-width: 600px;
  margin: 0 auto;

  ${({ theme }) => theme.media.md.min} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 24px;
  }

  ${({ theme }) => theme.media.lg.min} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: unset;
  }

  ${({ theme }) => theme.media.xl.min} {
    gap: 34px;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 5%);
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  ${({ theme }) => theme.media.md.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  &:hover {
    box-shadow: 0px 1px 5px rgb(0 0 0 / 20%);
  }
`

const ImgWrapper = styled.div`
  height: 200px;

  * {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.s.min} {
    height: 250px;
  }

  ${({ theme }) => theme.media.sm.min} {
    height: 300px;
  }

  ${({ theme }) => theme.media.md.min} {
    height: 275px;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  padding: 12px;

  ${({ theme }) => theme.media.md.min} {
    padding: 15px 12px;
  }

  ${({ theme }) => theme.media.xl.min} {
    padding: 20px 65px 20px 15px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ theme }) => theme.media.xl.min} {
    font-size: 13px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const OfferCards: React.FC<Props> = ({ tiles }) => {
  const { xl } = useBreakpoint()

  return (
    <Section title="Oferta">
      <Container>
        <Cards>
          {tiles.map((tile, index) => (
            <CardWrapper key={`tile-${index}`}>
              <ImgWrapper>
                <LazyImage src={tile.img.src} alt={tile.img.alt} />
              </ImgWrapper>
              <BottomWrapper>
                <Heading
                  as="h3"
                  size={26}
                  weight={600}
                  margin="10px"
                  dangerouslySetInnerHTML={{ __html: tile.title }}
                />
                <Text
                  size={xl ? 15 : 13}
                  margin="20px"
                  dangerouslySetInnerHTML={{ __html: tile.description }}
                />
                <StyledButton>Dowiedz się więcej</StyledButton>
              </BottomWrapper>
            </CardWrapper>
          ))}
        </Cards>
      </Container>
    </Section>
  )
}

export default OfferCards
