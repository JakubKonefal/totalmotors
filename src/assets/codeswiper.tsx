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

type Props = {
  images: Image[]
  perView: number
}

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 624px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.paddingMD};

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
  }

  ${({ theme }) => theme.media.xl.min} {
    padding: 0 50px;
  }
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: zoom-in;

  // rmiz element styles
  & > div {
    height: 100%;
    & > div {
      height: 100%;
    }
  }

  [data-rmiz-wrap='visible'] {
    height: 100%;

    & > div {
      height: 100%;
    }
  }
  // rmiz element styles

  .gatsby-image-wrapper {
    height: 100%;
  }

  ${({ theme }) => theme.media.sm.min} {
    height: 150px;
  }

  ${({ theme }) => theme.media.md.min} {
    height: 190px;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 190px;
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

const Slider: React.FC<Props> = ({ images, perView }) => {
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
        {images.map(({ src, alt }, index) => (
          <SwiperSlide
            key={`${alt}-image${index}`}
            onClick={() => handleZoom(index)}
          >
            <SlideWrapper>
              <LazyImage src={src} alt={alt} />
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <>
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
      />
    </SwiperWrapper>
  )
}

export default Slider
