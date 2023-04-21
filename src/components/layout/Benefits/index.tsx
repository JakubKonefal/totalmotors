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

export type Benefit = {
  title: string
  desc: string
}

type Props = {
  img: Image
  heading: string
  description: string
  benefits: Benefit[]
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

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* column-gap: 30px; */
  }
`

const ImgWrapper = styled.div`
  max-width: 450px;
  border-radius: 8px 8px 0 0;
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

const Content = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.lg.min} {
    height: 100%;
    order: 1;
  }
`

const BenefitsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;
  padding: 15px;
  border-radius: 0 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.gray};

  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    max-width: unset;
    margin-top: 0;
    padding: 0;
    background-color: transparent;
    border-radius: unset;
  }
`

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  max-width: 450px;

  ${Text} {
    text-align: center;
  }

  .title {
    color: ${({ theme }) => theme.colors.primary200} !important;
  }

  ${({ theme }) => theme.media.lg.min} {
    .title {
      font-size: 1.325rem;
      color: ${({ theme }) => theme.colors.primary200} !important;
    }

    .desc {
      font-size: 1rem;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 100%;
    max-width: unset;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;

    ${Text} {
      text-align: left;
    }

    &:nth-child(odd) {
      /* background-color: gray; */
    }
    &:nth-child(even) {
      border-radius: 0 8px 8px 0;
      background-color: ${({ theme }) => theme.colors.gray100};
    }
  }
`

const BenefitItemTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

const Benefits: React.FC<Props> = ({ img, heading, description, benefits }) => {
  const { lg } = useBreakpoint()

  const animateBenefits = useAnimateOnScroll()

  return (
    <Section>
      <Container className="heading-container">
        <Heading
          as="h2"
          size={30}
          margin={lg ? '40px' : '20px'}
          align="left"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      </Container>
      <StyledContainer>
        <Content>
          {lg && (
            <BenefitsList
              ref={animateBenefits.ref}
              variants={variants.fadeInRightToLeft}
              initial="hidden"
              animate={animateBenefits.control}
              transition={transitions.quicker}
            >
              {benefits.map(({ title, desc }, index) => (
                <BenefitItem key={`benefit-${index}`}>
                  <Icon
                    size={60}
                    src={getIcon(index).src}
                    alt={getIcon(index).alt}
                  />
                  <BenefitItemTextContent>
                    <Text
                      className="title"
                      size={18}
                      weight={700}
                      themecolor="primary200"
                      margin="10px"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <Text
                      className="desc"
                      size={14}
                      themecolor="black"
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  </BenefitItemTextContent>
                </BenefitItem>
              ))}
            </BenefitsList>
          )}
        </Content>
        <ImgWrapper>
          <LazyImage src={img.src} alt={img.alt} />
        </ImgWrapper>
        {!lg && (
          <BenefitsList
            ref={animateBenefits.ref}
            variants={variants.fadeInRightToLeft}
            initial="hidden"
            animate={animateBenefits.control}
            transition={transitions.quicker}
          >
            {benefits.map(({ title, desc }, index) => (
              <BenefitItem key={`benefit-${index}`}>
                <Icon
                  size={60}
                  src={getIcon(index).src}
                  alt={getIcon(index).alt}
                />
                <Text
                  className="title"
                  size={18}
                  weight={700}
                  themecolor="black"
                  margin="10px"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <Text
                  className="desc"
                  size={13}
                  themecolor="black"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </BenefitItem>
            ))}
          </BenefitsList>
        )}
      </StyledContainer>
    </Section>
  )
}

export default Benefits
