import React from 'react'
import styled from 'styled-components'

import ServiceSteps, { StepSingle } from 'components/layout/About/ServiceSteps'

import Container from 'components/shared/container'
// import Icon from 'components/shared/icon'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'
// import arrowIcon from 'assets/icons/arrow-right-long-2.svg'

import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'
import arrowIcon from 'assets/icons/arrow-right-long.svg'

type Props = {
  heading: string
  description: string
  steps: StepSingle[]
}

const Section = styled.section`
  ${({ theme }) => theme.media.lg.min} {
    margin-top: 90px;
    margin-bottom: 65px;
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
    justify-self: center;
    height: 100%;
    max-width: 500px;

    ${Text} {
      line-height: 1.55;
    }
  }
`

const ArrowIconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(135%, -50%);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    margin-left: 10px;
  }

  ${({ theme }) => theme.media.lg.min} {
    transform: translate(180%, -50%);
  }
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.primary200};

  &:hover {
    ${ArrowIconWrapper} {
      display: block;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    width: 52.5%;
    margin-top: 30px;
  }
`

// const ArrowIconWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: calc(50% + 120px);
//   transform: translate(-50%, -50%) rotate(90deg);
// `

const About: React.FC<Props> = ({ heading, description, steps }) => {
  const { lg } = useBreakpoint()
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
            <Text
              size={lg ? 15 : 14}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <StyledButton>
              Skontaktuj się z nami!
              {/* <ArrowIconWrapper>
                <Icon src={arrowIcon} size={18} alt="arrow-down" />
              </ArrowIconWrapper> */}
              <ArrowIconWrapper>
                <Icon src={arrowIcon} size={22} alt="arrow-right" />
              </ArrowIconWrapper>
            </StyledButton>
          </TextContent>
          <ServiceSteps steps={steps} />
        </InnerWrapper>
      </Container>
    </Section>
  )
}

export default About
