import React from 'react'
import styled, { css } from 'styled-components'

import LazyImage from 'components/shared/lazyImage'
import { Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'

import type { Image } from 'types/image'

export type RealisationSingle = {
  img: Image
  title: string
  desc: string
  link?: boolean
  buttonHidden?: boolean
  className?: string
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

const Card = styled.article<{ hoverable: boolean }>`
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

  ${({ theme }) => theme.media.lg.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
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

const RealisationCard: React.FC<RealisationSingle> = ({
  title,
  img,
  desc,
  link = false,
  buttonHidden = false,
  className,
}) => {
  const { lg } = useBreakpoint()

  return (
    <Card
      as={link ? 'a' : 'article'}
      href={`/realizacje`}
      className={className}
      hoverable={link}
    >
      <TitleWrapper>
        <Text
          size={lg ? 19 : 18}
          weight={700}
          themecolor="white"
          // align="center"
          dangerouslySetInnerHTML={{ __html: title }}
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
        {/* {!buttonHidden && (
          <StyledButton>
            zobacz więcej
            <ArrowIconWrapper>
              <Icon src={arrowIcon} size={20} alt="arrow-right" />
            </ArrowIconWrapper>
          </StyledButton>
        )} */}
      </DescriptionWrapper>
    </Card>
  )
}

export default RealisationCard
