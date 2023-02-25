import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Icon from 'components/shared/icon'
import LazyImage from 'components/shared/lazyImage'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import arrowLeftIcon from 'assets/icons/arrow-left.svg'
import arrowRightIcon from 'assets/icons/arrow-right.svg'
import type { Image } from 'types/image'

import 'swiper/css'
import useBreakpoint from 'hooks/useBreakpoint'

import ZoomedModalImg from 'components/shared/ZoomedModalImg'

type Slide = {
  img: Image
  title: string
}

type Props = {
  slides: Slide[]
  perView: number
}

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;

  * {
    width: 100%;
    height: 100%;
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
    height: 520px;
  }
`

const ControlBtn = styled.button`
  position: absolute;
  top: 50%;
  left: -7px;
  width: 44px;
  height: 50px;
  transform: translateY(-50%);
  background: transparent;
  z-index: 2;
  cursor: pointer;

  ${({ theme }) => theme.media.lg.min} {
    width: 44px;
    height: 50px;
  }
`

const ControlRight = styled(ControlBtn)`
  left: auto;
  right: -7px;
`

const Slider: React.FC<Props> = ({ slides, perView = 1 }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [zoomedImgIndex, setZoomedImgIndex] = useState(0)

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

  const handleZoom = (index: number) => {
    setZoomedImgIndex(index)
    setModalVisible(true)
  }

  const handleUnzoom = () => setModalVisible(false)

  return (
    <SwiperWrapper>
      <Swiper
        // @ts-ignore
        ref={swiperRef}
        slidesPerView={perView}
        spaceBetween={lg ? 18 : 8}
        allowSlideNext
        loop
      >
        {slides.map(({ img, title }, index) => (
          <SwiperSlide
            key={`${img.alt}-image${index}`}
            onClick={() => handleZoom(index)}
          >
            <SlideWrapper>
              <LazyImage src={img.src} alt={img.alt} />
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <>
        <ControlBtn onClick={goPrev} aria-label="slide-left">
          <Icon src={arrowLeftIcon} size={xl ? 26 : 16} alt="arrow-left" />
        </ControlBtn>
        <ControlRight onClick={goNext} aria-label="slide-right">
          <Icon src={arrowRightIcon} size={xl ? 26 : 16} alt="arrow-right" />
        </ControlRight>
      </>
      <ZoomedModalImg
        src={images[zoomedImgIndex].src}
        modalVisible={modalVisible}
        closeModal={handleUnzoom}
      /> */}
    </SwiperWrapper>
  )
}

export default Slider
