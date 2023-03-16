import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'

import ServiceSteps, { StepSingle } from './ServiceSteps'

type Props = {
  heading: string
  description: string
  steps: StepSingle[]
}

const Section = styled.section`
  ${({ theme }) => theme.media.lg.min} {
    margin-top: 75px;
    margin-bottom: 50px;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 640px;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    align-items: flex-start;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
  }
`

const About: React.FC<Props> = ({ heading, description, steps }) => {
  return (
    <Section title="About">
      <Container>
        <InnerWrapper>
          <TextContent>
            <Heading
              as="h1"
              size={30}
              margin="15px"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <Text size={14} dangerouslySetInnerHTML={{ __html: description }} />
          </TextContent>
          <ServiceSteps steps={steps} />
        </InnerWrapper>
      </Container>
    </Section>
  )
}

export default About
