import React, { useState } from 'react'
import styled, { css } from 'styled-components'
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

const Indicators = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  ${({ theme }) => theme.media.lg.min} {
    bottom: 25px;
  }
`

const IndicatorButton = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);

  ${({ theme }) => theme.media.lg.min} {
    width: 12px;
    height: 12px;
    background-color: rgb(255 255 255 / 31%);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};

      ${({ theme }) => theme.media.lg.min} {
        background-color: rgb(255 255 255 / 86%);
    `}
`

const Slider: React.FC<Props> = ({ slides, perView = 1 }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const { lg, xl } = useBreakpoint()

  const goPrev = () => {
    swiper?.slidePrev()
  }

  const goNext = () => {
    swiper?.slideNext()
  }

  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={perView}
        onSwiper={(initSwiper) => setSwiper(initSwiper)}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        modules={[Autoplay]}
        onSlideChange={(swiperInstance) =>
          setActiveSlideIndex(swiperInstance.realIndex)
        }
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
      <Indicators>
        {slides.map((i, index) => (
          <IndicatorButton
            type="button"
            key={`indicator-button-${index}`}
            active={activeSlideIndex === index}
            onClick={() => {
              swiper?.slideTo(index)
              setActiveSlideIndex(index)
            }}
          />
        ))}
      </Indicators>
    </SwiperWrapper>
  )
}

export default Slider
