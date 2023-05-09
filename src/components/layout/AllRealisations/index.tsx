import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import ClientOnly from 'components/shared/ClientOnly'

import Card from 'components/layout/LatestRealisations/Card'
import ZoomedModalImg from 'components/shared/ZoomedModalImg'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'
import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

import type { RealisationSingle } from 'components/layout/LatestRealisations/Card'

type Props = {
  heading: string
  description: string
  realisations: RealisationSingle[]
}

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.container.marginSM};

  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: ${({ theme }) => theme.container.marginLG};

    ${Text} {
      max-width: unset;
    }
  }
`

const RealisationsWrapper = styled(motion.div)`
  display: grid;
  margin-top: 30px;

  ${({ theme }) => theme.media.md.min} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .card {
      margin-bottom: 0 !important;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.media.xl.min} {
    gap: 30px;
  }
`

const ButtonWrapper = styled.div<{ hidden: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`

const StyledButton = styled(Button)``

const AllRealisations: React.FC<Props> = ({
  heading,
  description,
  realisations,
}) => {
  const [displayedCards, setDisplayedCards] = useState(6)
  const [zoomedImgIndex, setZoomedImgIndex] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  const { lg } = useBreakpoint()

  const animateCards = useAnimateOnScroll()

  const handleShowMore = () => {
    setDisplayedCards(displayedCards + 3)
  }

  const handleZoom = (index: number) => {
    setZoomedImgIndex(index)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return (
    <Section title={heading}>
      <Container>
        <Heading
          as="h2"
          size={lg ? 36 : 30}
          margin="10px"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <Text
          size={lg ? 17 : 14}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <RealisationsWrapper
          as={motion.div}
          ref={animateCards.ref}
          variants={variants.fadeInLeftToRight}
          initial="hidden"
          animate={animateCards.control}
        >
          {realisations
            .slice(0, displayedCards)
            .map(({ img, title, desc }, index) => (
              <Card
                key={`realisation-card-${index}`}
                className="card"
                img={img}
                title={title}
                desc={desc}
                index={index}
                onZoom={handleZoom}
              />
            ))}
        </RealisationsWrapper>
        <ButtonWrapper hidden={displayedCards >= realisations.length}>
          <StyledButton type="button" onClick={handleShowMore}>
            Więcej
          </StyledButton>
        </ButtonWrapper>
      </Container>
      <ClientOnly>
        <ZoomedModalImg
          src={realisations[zoomedImgIndex].img.src}
          modalVisible={modalVisible}
          closeModal={handleModalClose}
        />
      </ClientOnly>
    </Section>
  )
}

export default AllRealisations
