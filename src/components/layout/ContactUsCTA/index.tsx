import { Heading, Text } from 'components/shared/typography'
import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'

import phone1Icon from 'assets/icons/phone-1.svg'
import phone2Icon from 'assets/icons/phone-2.svg'
import yIcon from 'assets/icons/arrow-right-long.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'
import Button from 'components/shared/button'
import CarForm from 'components/layout/Forms/CarForm'

const Section = styled.section`
  width: 100%;
  padding: 0 0 30px;

  ${({ theme }) => theme.media.lg.min} {
    padding: 0 0 60;
  }
`

const GrayWrapper = styled.div`
  width: 100%;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.gray400};

  ${({ theme }) => theme.media.lg.min} {
    padding: 65px 24px;

    & > * {
      margin-bottom: 26px;
    }
  }
`

const ButtonCTA = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 275px;
  height: 56px;
  margin: 36px auto 0;
  background-color: ${({ theme }) => theme.colors.primary200};
  text-transform: uppercase;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;

  .arrow-right {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(127px, -50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.xl.min} {
    width: 315px;
    font-size: 15px;

    .arrow-right {
      transform: translate(145px, -50%);
    }
  }
`

const ContactUsCTA = () => {
  const { lg } = useBreakpoint()

  return (
    <Section title="Kontakt">
      <Container>
        <GrayWrapper>
          <Heading
            as="h4"
            size={30}
            themecolor="black"
            transform="uppercase"
            align="center"
          >
            skontaktuj się z nami
          </Heading>
          <Text size={lg ? 22 : 16} align="center">
            Chcesz wiedzieć więcej o samochodach, lub firmie ABC?
          </Text>
          <ButtonCTA as="a" href="/kontakt">
            formularz kontaktowy
            <Icon
              className="arrow-right"
              src={yIcon}
              size={30}
              alt="arrow-right"
            />
          </ButtonCTA>
        </GrayWrapper>
      </Container>
    </Section>
  )
}

export default ContactUsCTA
