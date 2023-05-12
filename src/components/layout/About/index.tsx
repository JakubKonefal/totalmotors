import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import Container from 'components/shared/container'
import Icon from 'components/shared/icon'
import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'

import heartIcon from 'assets/icons/heart-2.svg'
import experienceIcon from 'assets/icons/experience-2.svg'
import repairIcon from 'assets/icons/repair2.svg'

import useBreakpoint from 'hooks/useBreakpoint'
import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

import type { Image } from 'types/image'

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return {
        src: heartIcon,
        alt: 'passion',
      }
    case 1:
      return {
        src: experienceIcon,
        alt: 'passion',
      }
    case 2:
      return {
        src: repairIcon,
        alt: 'repair',
      }

    default:
      return {
        src: heartIcon,
        alt: 'passion',
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
  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const AboutItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ImgWrapper = styled.div`
  max-width: 450px;
  border-radius: 8px;
  overflow: hidden;

  ${({ theme }) => theme.media.lg.min} {
    height: 100%;
    max-width: unset;
    border-radius: 8px;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`

const About: React.FC<Props> = ({ heading, abouts }) => {
  const { lg } = useBreakpoint()

  const animateAbout = useAnimateOnScroll()

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
            <AboutItem key={`about-${index}`}>
              <AboutContent>
                <Icon src={experienceIcon} alt="experience" />
                <Text
                  size={lg ? 17 : 14}
                  dangerouslySetInnerHTML={{ __html: about.description }}
                />
              </AboutContent>
              <ImgWrapper>
                <LazyImage src={about.img.src} alt={about.img.alt} />
              </ImgWrapper>
            </AboutItem>
          ))}
        </AboutsWrapper>
      </Container>
    </Section>
  )
}

export default About
