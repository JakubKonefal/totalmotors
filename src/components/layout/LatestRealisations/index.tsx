import React from 'react'
import styled from 'styled-components'

import Card, {
  RealisationSingle,
} from 'components/layout/LatestRealisations/Card'
import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'

type Props = {
  heading: string
  description: string
  realisations: RealisationSingle[]
}

const Section = styled.section`
  position: relative;
  margin-bottom: calc(${({ theme }) => theme.container.marginSM} * 2);

  ${Container} {
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: -${({ theme }) => theme.container.marginSM};
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - ${({ theme }) => theme.container.marginSM});
      height: 2px;
      background-color: #00000021;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    /* margin-bottom: calc(${({ theme }) => theme.container.marginLG} * 2); */
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
    gap: 20px;
    max-width: unset;
  }

  ${({ theme }) => theme.media.xl.min} {
    gap: 30px;
  }
`

const LatestRealisations: React.FC<Props> = ({
  heading,
  description,
  realisations,
}) => {
  const { lg } = useBreakpoint()

  return (
    <Section>
      <Container>
        <TextContent>
          <Heading
            as="h1"
            size={30}
            margin="10px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={lg ? 15 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TextContent>
        <Cards>
          {realisations.map(({ img, title, desc }, index) => (
            <Card
              key={`realisation-card-${index}`}
              img={img}
              title={title}
              desc={desc}
              link
            />
          ))}
        </Cards>
      </Container>
    </Section>
  )
}

export default LatestRealisations
