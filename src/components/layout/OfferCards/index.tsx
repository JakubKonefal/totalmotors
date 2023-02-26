import React from 'react'
import styled from 'styled-components'

import LazyImage from 'components/shared/lazyImage'
import Icon from 'components/shared/icon'
import { Heading, Text } from 'components/shared/typography'

import { Image } from 'types/image'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import useBreakpoint from 'hooks/useBreakpoint'

import xIcon from 'assets/icons/arrow-right.svg'
import yIcon from 'assets/icons/arrow-right-long.svg'
import zIcon from 'assets/icons/arrow-right-long-2.svg'

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

  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: 60px;
  }
`

const StyledContainer = styled(Container)`
  /* padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.media.lg.min} {
    padding-bottom: 60px;
  } */
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
    max-width: 700px;
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
  box-shadow: 0px 1px 11px 1px rgb(0 0 0 / 20%);
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
    box-shadow: 0px 1px 11px 5px rgb(0 0 0 / 25%);
  }
`

const ImgWrapper = styled.div`
  height: 175px;

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
    height: 220px;
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

const CardButton = styled(Button)`
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

const BigButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  padding-bottom: 30px;
  border-bottom: 2px dotted #b5b4b4;

  ${({ theme }) => theme.media.lg.min} {
    margin-top: 35px;
    padding-bottom: 60px;
  }
`

const BigButton = styled(Button)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 275px;
  height: 56px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;

  .arrow-right {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(120px, -50%);
  }

  ${({ theme }) => theme.media.xl.min} {
    width: 315px;
    font-size: 15px;

    .arrow-right {
      transform: translate(135px, -50%);
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const OfferCards: React.FC<Props> = ({ tiles }) => {
  const { xl } = useBreakpoint()

  return (
    <Section title="Oferta">
      <StyledContainer>
        <Cards>
          {tiles.map((tile, index) => (
            <CardWrapper
              key={`tile-${index}`}
              as="a"
              href={`/oferta#samochod${index + 1}`}
            >
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
                <CardButton>Dowiedz się więcej</CardButton>
              </BottomWrapper>
            </CardWrapper>
          ))}
        </Cards>
        <BigButtonWrapper>
          <BigButton as="a" href="/oferta">
            Zobacz pełną ofertę
            <Icon
              className="arrow-right"
              src={yIcon}
              size={30}
              alt="arrow-right"
            />
          </BigButton>
        </BigButtonWrapper>
      </StyledContainer>
    </Section>
  )
}

export default OfferCards
