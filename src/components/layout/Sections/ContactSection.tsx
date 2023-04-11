import React from 'react'
import styled from 'styled-components'

import CarForm from 'components/layout/Forms/CarForm'

import phone1Icon from 'assets/icons/phone-1.svg'
import emailIcon from 'assets/icons/mail.svg'
import Icon from 'components/shared/icon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding: 30px 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  ${({ theme }) => theme.media.lg.min} {
    flex-direction: row;
    justify-content: space-between;
    max-width: unset;
    padding: 30px;
  }
`

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  :not(:last-child) {
    margin-bottom: 16px;
  }

  .button-link-icon {
    margin-right: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  ${({ theme }) => theme.media.lg.min} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const ContactSection = () => {
  return (
    <Wrapper>
      <CarForm heading="Zapytaj o sprzedaż" />
      <BottomWrapper>
        <ButtonLink href="tel: 668 074 853" role="button">
          <Icon
            className="button-link-icon"
            src={phone1Icon}
            size={26}
            alt="phone"
          />
          Tel.: 668 074 853
        </ButtonLink>
        <ButtonLink href="mailto: biuro@sprzedamtwojsamochod.pl" role="button">
          <Icon
            className="button-link-icon"
            src={emailIcon}
            size={26}
            alt="email"
          />
          biuro@sprzedamtwojsamochod.pl
        </ButtonLink>
      </BottomWrapper>
    </Wrapper>
  )
}

export default ContactSection
