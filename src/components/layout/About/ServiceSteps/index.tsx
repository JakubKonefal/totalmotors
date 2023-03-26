import React from 'react'
import styled from 'styled-components'

import Icon from 'components/shared/icon'
import { Heading, Text } from 'components/shared/typography'

import Button from 'components/shared/button'
import useBreakpoint from 'hooks/useBreakpoint'

import xIcon from 'assets/icons/arrow-right.svg'
import yIcon from 'assets/icons/arrow-right-long.svg'
import zIcon from 'assets/icons/arrow-right-long-2.svg'

export type StepSingle = {
  description: string
}

type Props = {
  steps: StepSingle[]
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  /* margin-bottom: 30px; */
  padding: 0 25px;

  ${({ theme }) => theme.media.lg.min} {
    margin: 0;
  }
`

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  max-width: 450px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.primarydark};
  border-radius: 8px;

  ${({ theme }) => theme.media.lg.min} {
    justify-self: center;
    /* max-width: unset; */
  }

  ${({ theme }) => theme.media.xl.min} {
  }
`

const StepNumber = styled.div`
  position: absolute;
  top: 0;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  ${({ theme }) => theme.media.lg.min} {
    width: 70px;
    height: 70px;
  }
`

const StepNumberOuter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primarydark};
`

const StepNumberInner = styled.div`
  width: 70%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary200};
  box-shadow: 0px 1px 11px 1px rgb(0 0 0 / 20%);
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  ${Text} {
    letter-spacing: 1px;
  }
`

const StepWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 30px;
  padding-left: 30px;

  ${Text} {
    line-height: 1.5;
  }

  :nth-child(odd) {
    ${StepNumber} {
      left: 0;
      transform: translate(-50%, -50%);

      /* div {
        div {
          background-color: ${({ theme }) => theme.colors.primary300};
        }
      } */
    }
  }

  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primarydark100};

    ${StepNumber} {
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  :last-child {
    border-radius: 0 0 8px 8px;
  }

  ${({ theme }) => theme.media.lg.min} {
    padding-right: 45px;
    padding-left: 45px;
  }

  /* &:hover {
    box-shadow: 0px 1px 11px 5px rgb(0 0 0 / 25%);
  } */
`

// const BottomWrapper = styled.div`
//   width: 100%;
//   padding: 12px;

//   ${({ theme }) => theme.media.md.min} {
//     padding: 15px 12px;
//   }

//   ${({ theme }) => theme.media.xl.min} {
//     padding: 20px 65px 20px 15px;
//   }
// `

// const CardButton = styled(Button)`
//   background-color: ${({ theme }) => theme.colors.primary200};
//   color: ${({ theme }) => theme.colors.white};
//   font-size: 11px;
//   font-weight: 600;
//   text-transform: uppercase;

//   ${({ theme }) => theme.media.xl.min} {
//     font-size: 13px;
//   }

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//   }
// `

// const BigButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 30px;

//   padding-bottom: 30px;
//   border-bottom: 2px dotted #b5b4b4;

//   ${({ theme }) => theme.media.lg.min} {
//     margin-top: 35px;
//     padding-bottom: 60px;
//   }
// `

// const BigButton = styled(Button)`
//   position: relative;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   width: 275px;
//   height: 56px;
//   margin: 0 auto;
//   background-color: ${({ theme }) => theme.colors.primary200};
//   color: ${({ theme }) => theme.colors.white};
//   font-size: 13px;
//   font-weight: 600;
//   text-transform: uppercase;

//   .arrow-right {
//     position: absolute;
//     top: 50%;
//     right: 50%;
//     transform: translate(120px, -50%);
//   }

//   ${({ theme }) => theme.media.xl.min} {
//     width: 315px;
//     font-size: 15px;

//     .arrow-right {
//       transform: translate(135px, -50%);
//     }
//   }

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//   }
// `

const ServiceSteps: React.FC<Props> = ({ steps }) => {
  const { lg } = useBreakpoint()

  return (
    <Wrapper>
      <Steps>
        {steps.map((step, index) => (
          <StepWrapper key={`step-${index}`}>
            <StepNumber>
              <StepNumberOuter>
                <StepNumberInner>
                  <Text
                    size={lg ? 20 : 18}
                    weight={600}
                    themecolor="white"
                    margin="0"
                  >
                    {`0${index + 1}`}
                  </Text>
                </StepNumberInner>
              </StepNumberOuter>
            </StepNumber>
            <Text
              size={lg ? 15 : 14}
              themecolor="white"
              margin="0"
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </StepWrapper>
        ))}
      </Steps>
      {/* <BigButtonWrapper>
        <BigButton as="a" href="/oferta">
          Zobacz pełną ofertę
          <Icon
            className="arrow-right"
            src={yIcon}
            size={30}
            alt="arrow-right"
          />
        </BigButton>
      </BigButtonWrapper> */}
    </Wrapper>
  )
}

export default ServiceSteps
