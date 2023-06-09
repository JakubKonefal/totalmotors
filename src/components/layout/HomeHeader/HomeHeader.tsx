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
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.container.marginSM};
  height: 100vh;

  ${({ theme }) => theme.media.lg.min} {
    height: 100vh;
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.container.marginLG};
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

const TitleWrapper = styled.div<{
  shiftedBottom?: boolean
  shiftedBottom2?: boolean
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  width: 100%;

  opacity: 0;
  z-index: 3;
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
      transform: translate(-50%, -50%);
      transition-delay: 0.4s;
    `}

  ${({ shiftedBottom }) =>
    shiftedBottom &&
    css`
      br {
        :nth-of-type(2) {
          display: none;
        }
      }
    `}

  ${({ shiftedBottom2 }) =>
    shiftedBottom2 &&
    css`
      top: 55%;
    `}



  ${({ theme }) => theme.media.md.min} {
    ${Text} {
      text-align: left;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    ${({ shiftedBottom }) =>
      shiftedBottom &&
      css`
        top: 55%;

        br {
          :nth-of-type(1) {
            display: none;
          }
          :nth-of-type(2) {
            display: block;
          }
        }
      `}
  }
`

const StyledHeading = styled(Heading)`
  position: relative;
  font-family: 'Montserrat';
  margin-bottom: 1rem;
  letter-spacing: 1px;

  span {
    font-family: 'Montserrat';
    font-size: inherit;
    font-weight: 400;
  }

  ${({ theme }) => theme.media.md.min} {
    text-align: left;
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
  display: block;
  /* margin-inline: auto; */
  width: 180px;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 32px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary200};
  }

  ${({ theme }) => theme.media.md.min} {
    margin-inline: 0;
    margin-right: auto;
  }

  ${({ theme }) => theme.media.lg.min} {
    margin-top: 32px;
  }
`

const HomeHeader = ({ slides }) => {
  const slidez = slides.slice(0, 3)

  const { openModalForm } = useContext(NavigationContext)
  const { activeSlide, changeToSlide } = useSlider(slidez, 3000)

  return (
    <Wrapper>
      <SlideWrapper>
        <SlideInnerWrapper>
          {slidez.map(({ src, alt, title, subtitle }, index) => {
            return (
              <Slide key={index}>
                <ImageWrapper isActive={activeSlide === index}>
                  <LazyImage
                    src={src}
                    alt={alt || `hero image ${index}`}
                    cover
                    loading="eager"
                  />
                </ImageWrapper>

                <TitleWrapper
                  isActive={activeSlide === index}
                  openDays
                  shiftedBottom={index === 1}
                  shiftedBottom2={index === 2}
                >
                  <StyledContainer id="title-container">
                    <StyledHeading
                      as={index === 0 ? 'h1' : 'h2'}
                      size={42}
                      themecolor="white"
                      // align="center"
                      transform="uppercase"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <Text
                      size={24}
                      themecolor="white"
                      // align="center"
                      dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                    <StyledButton type="button" onClick={openModalForm}>
                      kontakt
                    </StyledButton>
                  </StyledContainer>
                </TitleWrapper>
              </Slide>
            )
          })}
          {/* <ButtonContainer>
            <StyledButton type="button" onClick={openModalForm}>
              kontakt
            </StyledButton>
          </ButtonContainer> */}
        </SlideInnerWrapper>
      </SlideWrapper>
    </Wrapper>
  )
}

export default HomeHeader
