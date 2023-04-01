import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import LazyImage from 'components/shared/lazyImage'
import Icon from 'components/shared/icon'
import { Heading, Text } from 'components/shared/typography'
import Button from 'components/shared/button'
import arrowIcon from 'assets/icons/arrow-right-long.svg'

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
        {!buttonHidden && (
          <StyledButton>
            zobacz więcej
            <ArrowIconWrapper>
              <Icon src={arrowIcon} size={20} alt="arrow-right" />
            </ArrowIconWrapper>
          </StyledButton>
        )}
      </DescriptionWrapper>
    </Card>
  )
}

export default RealisationCard
