import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import ServiceSteps, { StepSingle } from 'components/layout/Steps/ServiceSteps'

import Container from 'components/shared/container'
// import Icon from 'components/shared/icon'
import Button from 'components/shared/button'
import { Heading, Text } from 'components/shared/typography'
// import arrowIcon from 'assets/icons/arrow-right-long-2.svg'

import useAnimateOnScroll from 'hooks/useAnimateOnScroll'
import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'
import arrowIcon from 'assets/icons/arrow-right-long.svg'
import scrollToSection from 'utils/scrollToSection'

type Props = {
  heading: string
  description: string
  steps: StepSingle[]
}

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.container.marginSM};
  ${({ theme }) => theme.media.lg.min} {
    margin-bottom: ${({ theme }) => theme.container.marginLG};

    ${Container} {
      /* padding-left: 0; */
      padding-right: 0;
    }
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

const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
`

const Dot = styled.div`
  margin: 0 4px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;

  .description {
    font-weight: 600;
    color: #000000c2;
    span {
      font-weight: 800;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    position: relative;
    justify-self: center;
    justify-content: center;
    height: 100%;
    max-width: unset;

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
  /* background-color: ${({ theme }) => theme.colors.primary200}; */
  background-color: ${({ theme }) => theme.colors.tertiary};

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

const Steps: React.FC<Props> = ({ heading, description, steps }) => {
  const { lg } = useBreakpoint()

  const { control, ref } = useAnimateOnScroll()

  return (
    <Section title={heading}>
      <Container
      // as={motion.div}
      // ref={ref}
      // variants={variants.fadeIn}
      // initial="hidden"
      // animate={control}
      // transition={transitions.quick}
      >
        <InnerWrapper>
          <TextContent>
            <Heading
              as="h2"
              size={lg ? 36 : 30}
              margin="15px"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <Text
              className="description"
              size={lg ? 17 : 14}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <StyledButton
              type="button"
              onClick={() => scrollToSection('#car-form')}
            >
              Skontaktuj się z nami!
              {/* <ArrowIconWrapper>
                <Icon src={arrowIcon} size={18} alt="arrow-down" />
              </ArrowIconWrapper> */}
              <ArrowIconWrapper>
                <Icon src={arrowIcon} size={22} alt="arrow-right" />
              </ArrowIconWrapper>
            </StyledButton>

            {/* {lg && (
              <Dots>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </Dots>
            )} */}
          </TextContent>
          <ServiceSteps
            heading="Jak odbywa się <br/> proces sprzedaży?"
            steps={steps}
          />
        </InnerWrapper>
      </Container>
    </Section>
  )
}

export default Steps
