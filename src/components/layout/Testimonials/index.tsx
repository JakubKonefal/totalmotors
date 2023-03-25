import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import arrowLeftIcon from 'assets/icons/arrow-left.svg'
import arrowRightIcon from 'assets/icons/arrow-right.svg'

import Container from 'components/shared/container'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'
// import arrowIcon from 'assets/icons/arrow-right-long-2.svg'
import Icon from 'components/shared/icon'
import arrowIcon from 'assets/icons/arrow-right-long.svg'
import scrollToSection from 'utils/scrollToSection'
import LazyImage from 'components/shared/lazyImage'
import useBreakpoint from 'hooks/useBreakpoint'

import type { Image } from 'types/image'

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
  perView: number
}

const Section = styled.section`
  margin-top: 45px;
  margin-bottom: 45px;

  ${({ theme }) => theme.media.lg.min} {
  }
`

const TextContent = styled.div`
  max-width: 450px;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
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
    height: 100%;
    width: 50%;
  }
`

const ImgWrapper = styled.div`
  height: 185px;
  width: 100%;
  /* border-radius: 8px; */
  overflow: hidden;

  * {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.s.min} {
    height: 215px;
  }

  ${({ theme }) => theme.media.lg.min} {
    height: 215px;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.primary200};
  /* border: 1px solid #2f6fad8a; */
  /* border-bottom: none; */
  border-radius: 8px 8px 0 0;
`

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #2f6fad8a;
  border-top: none;
  border-radius: 0 0 8px 8px;
  /* background-color: ${({ theme }) => theme.colors.primary200}; */
`

const ArrowIconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(250%, -50%);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    margin-left: 10px;
  }
`

const StyledButton = styled(Button)`
  width: 165px;
  height: 37px;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  &:hover {
    ${ArrowIconWrapper} {
      display: block;
    }
  }
`

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

const InnerWrapper = styled.div`
  display: flex;
  height: 420px;
`

const TestimonialsList = styled.div`
  width: 50%;
`

const ListItem = styled.div<{ active: boolean }>`
  padding: 30px 15px;

  &:hover {
    box-shadow: 1px 1px 1px 1px black;
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: 1px 1px 1px 1px black;
    `}
`

const ListItemContent = styled.div`
  display: flex;
  align-items: center;
`

const ThumbnailWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 30px;
`

const LiItemTextContent = styled.div``

const Testimonials: React.FC<Props> = ({
  heading,
  description,
  testimonials,
  perView = 1,
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
            size={30}
            margin="10px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={lg ? 15 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TextContent>
        {lg ? (
          <InnerWrapper>
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
                {testimonials.map(({ img, carName, desc }, index) => (
                  <SwiperSlide key={`${img.alt}-image${index}`}>
                    <SlideWrapper>
                      {/* <LazyImage
                      className="slide-img"
                      src={img.src}
                      alt={img.alt}
                    /> */}
                      <SlideTextContent>
                        <Heading
                          as={index === 0 ? 'h1' : 'h2'}
                          size={lg ? 38 : 32}
                          weight={600}
                          themecolor="black"
                          align="center"
                          dangerouslySetInnerHTML={{ __html: carName }}
                        />
                        <Text
                          size={lg ? 18 : 14}
                          weight={500}
                          themecolor="black"
                          align="center"
                          line={xl ? 1.6 : 1.4}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      </SlideTextContent>
                    </SlideWrapper>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <>
            <ControlBtn onClick={goPrev} aria-label="slide-left">
              <Icon src={arrowLeftIcon} size={xl ? 26 : 18} alt="arrow-left" />
            </ControlBtn>
            <ControlRight onClick={goNext} aria-label="slide-right">
              <Icon
                src={arrowRightIcon}
                size={xl ? 26 : 18}
                alt="arrow-right"
              />
            </ControlRight>
          </> */}
            </SwiperWrapper>
            <TestimonialsList>
              {testimonials.map(({ img, carName, carYear, desc }, index) => (
                <ListItem key={`list-item-${index}`} active={index === 0}>
                  <ListItemContent>
                    <ThumbnailWrapper>
                      <LazyImage src={img.src} alt={img.alt} />
                    </ThumbnailWrapper>
                    <LiItemTextContent>
                      <Text
                        weight={600}
                        size={lg ? 15 : 14}
                        dangerouslySetInnerHTML={{ __html: carName }}
                      />
                      <Text
                        size={lg ? 15 : 14}
                        themecolor="black100"
                        dangerouslySetInnerHTML={{ __html: carYear }}
                      />
                    </LiItemTextContent>
                  </ListItemContent>
                </ListItem>
              ))}
            </TestimonialsList>
          </InnerWrapper>
        ) : (
          <></>
        )}
        {/* <Cards>
          {testimonials.map(({ img, clientName, desc }, index) => (
            <Card
              key={`realisation-${index}`}
              as="a"
              href={`/realizacje/samochod-${index + 1}`}
            >
              <TitleWrapper>
                <Text
                  size={lg ? 19 : 18}
                  weight={700}
                  themecolor="white"
                  // align="center"
                  dangerouslySetInnerHTML={{ __html: clientName }}
                />
              </TitleWrapper>
              <ImgWrapper>
                <LazyImage src={img.src} alt={img.alt} />
              </ImgWrapper>
              <DescriptionWrapper>
                <Text
                  size={lg ? 14 : 13}
                  // themecolor="primary200"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
                <StyledButton>
                  zobacz więcej
                  <ArrowIconWrapper>
                    <Icon src={arrowIcon} size={20} alt="arrow-right" />
                  </ArrowIconWrapper>
                </StyledButton>
              </DescriptionWrapper>
            </Card>
          ))}
        </Cards> */}
      </Container>
    </Section>
  )
}

export default Testimonials
