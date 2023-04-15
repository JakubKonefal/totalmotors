// @ts-nocheck

import React, { useEffect, useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { Heading, Text } from 'components/shared/typography'
import LazyImage from 'components/shared/lazyImage'
import useSlider from 'hooks/useSlider'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import { NavigationContext } from 'contexts/NavigationContext'

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  margin-top: ${({ theme }) => theme.navbar.height};
  margin-bottom: ${({ theme }) => theme.container.marginSM};
  height: calc(100vh - ${({ theme }) => theme.navbar.height});

  ${({ theme }) => theme.media.lg.min} {
    height: 100vh;
    margin-top: 0;
    margin-bottom: calc(${({ theme }) => theme.container.marginLG} + 35px);
  }
`

const StyledContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  text-align: ${({ align }) => align || 'left'};
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  visibility: hidden;
  transition: all 1s ease-in-out;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    * {
      width: 100%;
      height: 100%;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const SlideInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`

const Slide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  transform: translateX(1%);
  opacity: 0;
  z-index: 3;
  width: 100%;
  color: #fff;
  transition: 0.7s;
  visibility: hidden;

  ${Text} {
    max-width: unset;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0%);
      transition-delay: 0.4s;
    `}

  ${({ theme }) => theme.media.lg.min} {
    ${Text} {
      text-align: left;
    }
  }
`

const StyledHeading = styled(Heading)`
  position: relative;
  font-family: 'Montserrat';
  margin-bottom: 15px;
  letter-spacing: 1px;

  span {
    font-family: 'Montserrat';
    font-size: inherit;
    font-weight: 400;
  }

  ${({ theme }) => theme.media.lg.min} {
    font-size: 54px;
    text-align: left;
  }
`

const ButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  ${({ theme }) => theme.media.lg.min} {
    top: 25%;
    transform: translate(-50%, 235px);
    justify-content: flex-start;
  }
`

const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

const HomeHeader = ({ slides }) => {
  const { openModalForm } = useContext(NavigationContext)
  const { activeSlide, changeToSlide } = useSlider(slides)

  return (
    <Wrapper>
      <SlideWrapper>
        <SlideInnerWrapper>
          {slides.map(({ src, alt, title, subtitle }, index) => {
            return (
              <Slide key={index}>
                <TitleWrapper isActive={activeSlide === index} openDays>
                  <StyledContainer id="title-container">
                    <StyledHeading
                      size={46}
                      themecolor="white"
                      align="center"
                      transform="uppercase"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <Text
                      size={20}
                      themecolor="white"
                      align="center"
                      dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                  </StyledContainer>
                </TitleWrapper>
                <ImageWrapper isActive={activeSlide === index}>
                  <LazyImage
                    src={src}
                    alt={alt || `hero image ${index}`}
                    cover
                    loading="eager"
                  />
                </ImageWrapper>
              </Slide>
            )
          })}
          <ButtonContainer>
            <StyledButton type="button" onClick={openModalForm}>
              kontakt
            </StyledButton>
          </ButtonContainer>
        </SlideInnerWrapper>
      </SlideWrapper>
    </Wrapper>
  )
}

export default HomeHeader