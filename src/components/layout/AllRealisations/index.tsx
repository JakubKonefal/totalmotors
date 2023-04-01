import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Card from 'components/layout/LatestRealisations/Card'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'

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
  }
`

const RealisationsWrapper = styled.div`
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

  const { lg } = useBreakpoint()

  const handleShowMore = () => {
    setDisplayedCards(displayedCards + 3)
  }

  return (
    <Section title={heading}>
      <Container>
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
        <RealisationsWrapper>
          {realisations
            .slice(0, displayedCards)
            .map(({ img, title, desc }, index) => (
              <Card
                key={`realisation-card-${index}`}
                className="card"
                img={img}
                title={title}
                desc={desc}
                buttonHidden
              />
            ))}
        </RealisationsWrapper>
        <ButtonWrapper hidden={displayedCards >= realisations.length}>
          <StyledButton type="button" onClick={handleShowMore}>
            Więcej
          </StyledButton>
        </ButtonWrapper>
      </Container>
    </Section>
  )
}

export default AllRealisations
