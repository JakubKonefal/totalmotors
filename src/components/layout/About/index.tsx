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

const Section = styled.section``

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 640px;
  margin: 0 auto;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

const About: React.FC<Props> = ({ heading, description, steps }) => {
  return (
    <Section title="About">
      <Container>
        <InnerWrapper>
          <TextContent>
            <Heading
              as="h1"
              size={34}
              margin="15px"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <Text size={15} dangerouslySetInnerHTML={{ __html: description }} />
          </TextContent>
        </InnerWrapper>
        <ServiceSteps steps={steps} />
      </Container>
    </Section>
  )
}

export default About
