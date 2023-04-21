import React from 'react'
import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import LazyImage from 'components/shared/lazyImage'
import { Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'
import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

import type { Image } from 'types/image'

export type RealisationSingle = {
  img: Image
  title: string
  desc: string
  link?: boolean
  buttonHidden?: boolean
  className?: string
  index?: number
  onZoom?: (index: number) => void
}

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

const Card = styled.article<{ hoverable: boolean }>`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 30px;
  }

  ${({ hoverable }) =>
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        ${TitleWrapper} {
          background-color: ${({ theme }) => theme.colors.tertiary};
        }
        ${DescriptionWrapper} {
          border-color: ${({ theme }) => theme.colors.tertiary};
        }
      }
    `}

  ${({ hoverable }) =>
    !hoverable &&
    css`
      ${ImgWrapper} {
        cursor: zoom-in;
      }
    `}

  ${({ theme }) => theme.media.lg.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const RealisationCard: React.FC<RealisationSingle> = ({
  title,
  img,
  desc,
  link = false,
  className,
  index,
  onZoom,
}) => {
  const { lg } = useBreakpoint()

  const animateAllSteps = useAnimateOnScroll()

  return (
    <Card
      as={link ? motion.a : motion.article}
      href={`/realizacje`}
      className={className}
      hoverable={link}
      ref={animateAllSteps.ref}
      variants={Number(index) > 5 ? variants.fadeInTopToBottom : variants.none}
      initial="hidden"
      animate={animateAllSteps.control}
    >
      <TitleWrapper>
        <Text
          size={lg ? 19 : 18}
          weight={700}
          themecolor="white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </TitleWrapper>
      <ImgWrapper
        onClick={() => {
          if (index && onZoom) {
            onZoom(index!)
          }
        }}
      >
        <LazyImage src={img.src} alt={img.alt} />
      </ImgWrapper>
      {/* <DescriptionWrapper>
        <Text size={lg ? 14 : 13} dangerouslySetInnerHTML={{ __html: desc }} />
      </DescriptionWrapper> */}
    </Card>
  )
}

export default RealisationCard
