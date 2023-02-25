import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Icon from 'components/shared/icon'
import LazyImage from 'components/shared/lazyImage'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import arrowLeftIcon from 'assets/icons/arrow-left.svg'
import arrowRightIcon from 'assets/icons/arrow-right.svg'
import type { Image } from 'types/image'

import 'swiper/css'
import useBreakpoint from 'hooks/useBreakpoint'
import { Heading, Text } from 'components/shared/typography'

// import ZoomedModalImg from 'components/shared/ZoomedModalImg'

export type HeroSlide = {
  img: Image
  title: string
  description: string
}

type Props = {
  slides: HeroSlide[]
  perView: number
}

const SlideTextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 110px);
  width: 100%;

  ${({ theme }) => theme.media.s.min} {
    max-width: 360px;
  }

  ${({ theme }) => theme.media.md.min} {
    max-width: 400px;
  }

  ${({ theme }) => theme.media.lg.min} {
    max-width: 520px;
  }

  ${({ theme }) => theme.media.xl.min} {
    max-width: 620px;
  }
`

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;

  .slide-img {
    width: 100%;
    height: 100%;
    * {
      width: 100%;
      height: 100%;
    }
  }
`

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  .swiper {
    height: 100%;
  }

  ${({ theme }) => theme.media.md.min} {
    height: 460px;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 80vh;
    max-height: 900px;
  }
`

const ControlBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  width: 35px;
  height: 35px;
  transform: translateY(-50%);
  background: #ffffff60;
  border-radius: 2px;
  z-index: 2;
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  ${({ theme }) => theme.media.md.min} {
    left: 15px;
  }

  ${({ theme }) => theme.media.xl.min} {
    width: 45px;
    height: 45px;
  }
`

const ControlRight = styled(ControlBtn)`
  left: auto;
  right: 0;

  ${({ theme }) => theme.media.md.min} {
    right: 15px;
  }
`

const Slider: React.FC<Props> = ({ slides, perView = 1 }) => {
  const { lg, xl } = useBreakpoint()

  const swiperRef = useRef<{ swiper: SwiperCore }>(null)

  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <SwiperWrapper>
      <Swiper
        // @ts-ignore
        ref={swiperRef}
        slidesPerView={perView}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        modules={[Autoplay]}
        loop
      >
        {slides.map(({ img, title, description }, index) => (
          <SwiperSlide key={`${img.alt}-image${index}`}>
            <SlideWrapper>
              <LazyImage className="slide-img" src={img.src} alt={img.alt} />
              <SlideTextContent>
                <Heading
                  as={index === 0 ? 'h1' : 'h2'}
                  size={lg ? 38 : 32}
                  weight={600}
                  themecolor="white"
                  align="center"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <Text
                  size={lg ? 18 : 14}
                  weight={500}
                  themecolor="white"
                  align="center"
                  line={xl ? 1.6 : 1.4}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </SlideTextContent>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <>
        <ControlBtn onClick={goPrev} aria-label="slide-left">
          <Icon src={arrowLeftIcon} size={xl ? 26 : 18} alt="arrow-left" />
        </ControlBtn>
        <ControlRight onClick={goNext} aria-label="slide-right">
          <Icon src={arrowRightIcon} size={xl ? 26 : 18} alt="arrow-right" />
        </ControlRight>
      </>
    </SwiperWrapper>
  )
}

export default Slider
