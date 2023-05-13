import React from 'react'
import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import Container from 'components/shared/container'
import Icon from 'components/shared/icon'
import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'

import troubleshootIcon from 'assets/icons/troubleshoot.svg'
import diagnoseIcon from 'assets/icons/diagnose-2.png'
import towTruckIcon from 'assets/icons/tow-truck.png'

import useBreakpoint from 'hooks/useBreakpoint'
import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

import type { Image } from 'types/image'

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return {
        src: diagnoseIcon,
        alt: 'diagnose',
        sizeSM: 40,
        sizeLG: 64,
      }
    case 1:
      return {
        src: troubleshootIcon,
        alt: 'repair',
        sizeSM: 34,
        sizeLG: 58,
      }
    case 2:
      return {
        src: towTruckIcon,
        alt: 'tow truck',
        sizeSM: 50,
        sizeLG: 84,
      }

    default:
      return {
        src: troubleshootIcon,
        alt: 'repair',
        sizeSM: 50,
        sizeLG: 70,
      }
  }
}

export type AboutSingle = {
  title: string
  description: string
  img: Image
}

type Props = {
  heading: string
  abouts: AboutSingle[]
}

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.container.marginSM};

  ${Heading} {
    width: 100%;
  }

  .heading-container {
    max-width: 515px;
  }

  ${({ theme }) => theme.media.lg.min} {
    .heading-container {
      max-width: ${({ theme }) =>
        `calc(${theme.container.widthXL} + (${theme.container.padding} * 2))`};

      ${({ theme }) => theme.media.xxl.max} {
        max-width: ${({ theme }) =>
          `calc(${theme.container.width} + (${theme.container.padding} * 2))`};
      }
    }

    margin-bottom: ${({ theme }) => theme.container.marginLG};
  }
`

const AboutsWrapper = styled.div`
  display: grid;
  row-gap: 24px;

  ${({ theme }) => theme.media.lg.min} {
    row-gap: 48px;
  }

  ${({ theme }) => theme.media.xl.min} {
    row-gap: 48px;
  }
`

const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.lg.min} {
    display: none;
  }
`

const Dot = styled.div`
  margin: 0 4px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`

const AboutItem = styled(motion.article)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
  }
`

const AboutContent = styled.div<{ imgLeftSide: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media.lg.min} {
    max-width: 450px;
    margin: 0 auto;

    .about-icon {
      margin-top: 24px;
    }

    ${({ imgLeftSide }) =>
      imgLeftSide &&
      css`
        order: 1;
      `}
  }
`

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`

const ImgWrapper = styled.div`
  max-width: 450px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: 0;
    max-width: unset;
  }
`

const About: React.FC<Props> = ({ heading, abouts }) => {
  const { lg } = useBreakpoint()

  const animateAbout1 = useAnimateOnScroll()
  const animateAbout2 = useAnimateOnScroll()
  const animateAbout3 = useAnimateOnScroll()

  const getAnimateAndVariant = (index: number) => {
    switch (index) {
      case 0:
        return animateAbout1
      case 1:
        return animateAbout2
      case 2:
        return animateAbout3

      default:
        return animateAbout1
    }
  }

  return (
    <Section>
      <Container className="heading-container">
        <Heading
          as="h2"
          size={lg ? 36 : 30}
          margin={lg ? '40px' : '20px'}
          align="left"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <AboutsWrapper>
          {abouts.map((about, index) => (
            <AboutItem
              key={`about-${index}`}
              ref={getAnimateAndVariant(index).ref}
              variants={
                index === 1
                  ? variants.fadeInRightToLeft
                  : variants.fadeInLeftToRight
              }
              animate={getAnimateAndVariant(index).control}
            >
              <AboutContent imgLeftSide={index === 0 || index === 2}>
                <AboutHeader>
                  <Heading
                    as="h3"
                    size={lg ? 30 : 26}
                    margin="0"
                    align={lg ? 'center' : 'left'}
                    dangerouslySetInnerHTML={{ __html: about.title }}
                  />
                  {!lg && (
                    <Icon
                      className="about-icon"
                      src={getIcon(index).src}
                      size={getIcon(index).sizeSM}
                      alt={getIcon(index).alt}
                    />
                  )}
                </AboutHeader>
                <Text
                  size={lg ? 17 : 14}
                  align={lg ? 'center' : 'left'}
                  dangerouslySetInnerHTML={{ __html: about.description }}
                />
                {lg && (
                  <Icon
                    className="about-icon"
                    src={getIcon(index).src}
                    size={getIcon(index).sizeLG}
                    alt={getIcon(index).alt}
                  />
                )}
              </AboutContent>
              <ImgWrapper>
                <LazyImage src={about.img.src} alt={about.img.alt} />
              </ImgWrapper>
              {index !== 0 && !lg && (
                <Dots>
                  <Dot />
                  <Dot />
                  <Dot />
                </Dots>
              )}
            </AboutItem>
          ))}
        </AboutsWrapper>
      </Container>
    </Section>
  )
}

export default About
