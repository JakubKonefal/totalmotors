import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import Icon from 'components/shared/icon'
import LazyImage from 'components/shared/lazyImage'
import { Heading, Text } from 'components/shared/typography'

import heartIcon from 'assets/icons/heart-2.svg'
import experienceIcon from 'assets/icons/experience-2.svg'
import repairIcon from 'assets/icons/repair2.svg'

import useBreakpoint from 'hooks/useBreakpoint'

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

type Benefit = {
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
  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: 45px;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* column-gap: 30px; */
  }
`

const ImgWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`

const Content = styled.div`
  ${({ theme }) => theme.media.lg.min} {
    order: 1;
  }
`

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    column-gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    margin-top: 0;
  }
`

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Text} {
    text-align: center;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 100%;
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

  return (
    <Section>
      <StyledContainer>
        <Content>
          {/* <Heading
            as="h1"
            size={30}
            margin="10px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={lg ? 15 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          /> */}
          {lg && (
            <BenefitsList>
              {benefits.map(({ title, desc }, index) => (
                <BenefitItem key={`benefit-${index}`}>
                  <Icon
                    size={60}
                    src={getIcon(index).src}
                    alt={getIcon(index).alt}
                  />
                  <BenefitItemTextContent>
                    <Text
                      size={18}
                      weight={700}
                      themecolor="primary200"
                      margin="10px"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <Text
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
          <BenefitsList>
            {benefits.map(({ title, desc }, index) => (
              <BenefitItem key={`benefit-${index}`}>
                <Icon
                  size={60}
                  src={getIcon(index).src}
                  alt={getIcon(index).alt}
                />
                <Text
                  size={18}
                  weight={700}
                  themecolor="primary200"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <Text
                  size={12}
                  themecolor="primary200"
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
