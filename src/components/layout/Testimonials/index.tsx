import React, { useState } from 'react'
import styled from 'styled-components'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'
import LazyImage from 'components/shared/lazyImage'
import useBreakpoint from 'hooks/useBreakpoint'

import type { Image } from 'types/image'

import 'swiper/css'

export type Testimonial = {
  img: Image
  clientName: string
  carName: string
  carYear: string
  desc: string
}

type Props = {
  heading: string
  description: string
  testimonials: Testimonial[]
}

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.container.marginSM};
  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: ${({ theme }) => theme.container.marginLG};
  }
`

const TextContent = styled.div`
  max-width: 450px;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;

    .description {
      max-width: 650px;
    }
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  margin: 30px auto 0;

  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    max-width: unset;
  }
`

const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 30px;
  }

  &:hover {
    box-shadow: 1px 1px 10px 1px #2f6fad24;
  }

  ${({ theme }) => theme.media.lg.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  /* box-sizing: border-box; */
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

const SlideCard = styled.article`
  position: relative;

  width: 100%;
  height: calc(100% - 60px);
  margin-top: auto;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.gray100};
`

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 350px;
  margin: 15px auto 0;

  .swiper {
    height: 100%;
  }

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
    margin: 30px auto 0;
  }
`

const SlideTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 60px;
  padding: 0 30px 30px;
  box-sizing: border-box;

  ${Text} {
    &:first-child {
      font-style: italic;
      font-size: 0.925rem;

      span {
        font-size: 36px;
        line-height: 0.2;
        font-family: 'Ruge Boogie';
        color: ${({ theme }) => theme.colors.primary200};
        font-weight: 700;
        transform: translateY(8px);
        letter-spacing: 1px;
        display: inline-block;

        &:first-of-type {
          margin-right: 8px;
        }

        &:last-of-type {
          margin-left: 8px;
        }
      }
    }

    :nth-child(2) {
      margin-top: 15px;

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary200};
      }
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    ${Text} {
      &:first-child {
        font-size: 1rem;
      }
    }
  }
`

const ThumbnailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* margin-right: 30px; */
  border: 5px solid ${({ theme }) => theme.colors.white};

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  overflow: hidden;
  z-index: 1;
`

const Testimonials: React.FC<Props> = ({
  heading,
  description,
  testimonials,
}) => {
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
    <Section>
      <Container>
        <TextContent>
          <Heading
            as="h2"
            size={lg ? 36 : 30}
            margin="15px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            className="description"
            size={lg ? 17 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TextContent>
        <SwiperWrapper>
          <Swiper
            slidesPerView={lg ? 3 : 1}
            onSwiper={(initSwiper) => setSwiper(initSwiper)}
            autoplay={{
              delay: 3500,
            }}
            speed={1000}
            modules={[Autoplay]}
            spaceBetween={lg ? 30 : 10}
            onSlideChange={(swiperInstance) =>
              setActiveSlideIndex(swiperInstance.realIndex)
            }
            loop
          >
            {testimonials.map(
              ({ img, carName, clientName, carYear, desc }, index) => (
                <SwiperSlide key={`${img.alt}-image${index}`}>
                  <SlideWrapper>
                    <SlideCard>
                      <ThumbnailWrapper>
                        <LazyImage src={img.src} alt={img.alt} />
                      </ThumbnailWrapper>

                      <SlideTextContent>
                        <Text
                          size={lg ? 14 : 13}
                          weight={500}
                          themecolor="black"
                          align="center"
                          line={1.6}
                          dangerouslySetInnerHTML={{
                            __html: `<span>''</span>${desc}<span>''</span>`,
                          }}
                        />
                        <Text
                          size={lg ? 16 : 14}
                          weight={500}
                          themecolor="black"
                          align="center"
                          line={1.6}
                          dangerouslySetInnerHTML={{
                            __html: `<span>${clientName}</span> ${carName}`,
                          }}
                        />
                      </SlideTextContent>
                    </SlideCard>
                  </SlideWrapper>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </SwiperWrapper>
      </Container>
    </Section>
  )
}

export default Testimonials
