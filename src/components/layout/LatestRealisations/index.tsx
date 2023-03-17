import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
// import Icon from 'components/shared/icon'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'
// import arrowIcon from 'assets/icons/arrow-right-long-2.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'
import arrowIcon from 'assets/icons/arrow-right-long.svg'
import scrollToSection from 'utils/scrollToSection'
import type { Image } from 'types/image'
import LazyImage from 'components/shared/lazyImage'

type RealisationSingle = {
  img: Image
  title: string
  desc: string
}

type Props = {
  heading: string
  description: string
  realisations: RealisationSingle[]
}

const Section = styled.section`
  margin-top: 45px;
  margin-bottom: 45px;

  ${({ theme }) => theme.media.lg.min} {
  }
`

const TextContent = styled.div`
  max-width: 450px;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  margin: 30px auto 0;

  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    max-width: unset;
  }
`

const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 30px;
  }

  &:hover {
    box-shadow: 1px 1px 10px 1px #2f6fad24;
  }

  ${({ theme }) => theme.media.lg.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const ImgWrapper = styled.div`
  height: 185px;
  width: 100%;
  /* border-radius: 8px; */
  overflow: hidden;

  * {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.s.min} {
    height: 215px;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 215px;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.primary200};
  /* border: 1px solid #2f6fad8a; */
  /* border-bottom: none; */
  border-radius: 8px 8px 0 0;
`

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #2f6fad8a;
  border-top: none;
  border-radius: 0 0 8px 8px;
  /* background-color: ${({ theme }) => theme.colors.primary200}; */
`

const ArrowIconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(250%, -50%);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    margin-left: 10px;
  }
`

const StyledButton = styled(Button)`
  width: 165px;
  height: 37px;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    ${ArrowIconWrapper} {
      display: block;
    }
  }
`

const LatestRealisations: React.FC<Props> = ({
  heading,
  description,
  realisations,
}) => {
  const { lg } = useBreakpoint()

  return (
    <Section>
      <Container>
        <TextContent>
          <Heading
            as="h1"
            size={30}
            margin="10px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={lg ? 15 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TextContent>
        <Cards>
          {realisations.map(({ img, title, desc }, index) => (
            <Card
              key={`realisation-${index}`}
              as="a"
              href={`/realizacje/samochod-${index + 1}`}
            >
              <TitleWrapper>
                <Text
                  size={lg ? 19 : 18}
                  weight={700}
                  themecolor="white"
                  // align="center"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </TitleWrapper>
              <ImgWrapper>
                <LazyImage src={img.src} alt={img.alt} />
              </ImgWrapper>
              <DescriptionWrapper>
                <Text
                  size={lg ? 14 : 13}
                  // themecolor="primary200"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
                <StyledButton>
                  zobacz więcej
                  <ArrowIconWrapper>
                    <Icon src={arrowIcon} size={20} alt="arrow-right" />
                  </ArrowIconWrapper>
                </StyledButton>
              </DescriptionWrapper>
            </Card>
          ))}
        </Cards>
      </Container>
    </Section>
  )
}

export default LatestRealisations
