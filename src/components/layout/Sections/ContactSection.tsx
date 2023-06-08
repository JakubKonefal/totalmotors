import React from 'react'
import styled from 'styled-components'

import CarForm from 'components/layout/Forms/CarForm'

import phone1Icon from 'assets/icons/phone-1.svg'
import emailIcon from 'assets/icons/mail.svg'
import locationIcon from 'assets/icons/locationv2.svg'
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
    max-width: unset;
    padding: 30px;
  }
`

const LinksTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin-bottom: 15px;

  ${({ theme }) => theme.media.lg.min} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  min-width: max-content;

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

const NonLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  .icon {
    margin-right: 8px;
  }
`

const ContactSection = () => {
  return (
    <Wrapper>
      <CarForm heading="Zapytaj o sprzedaż" />
      <BottomWrapper>
        <LinksTop>
          <ButtonLink href="tel: 668 074 853" role="button">
            <Icon
              className="button-link-icon"
              src={phone1Icon}
              size={26}
              alt="phone"
            />
            Tel.: 668 074 853
          </ButtonLink>
          <ButtonLink
            href="mailto: biuro@sprzedamtwojsamochod.pl"
            role="button"
          >
            <Icon
              className="button-link-icon"
              src={emailIcon}
              size={26}
              alt="email"
            />
            biuro@sprzedamtwojsamochod.pl
          </ButtonLink>
        </LinksTop>
        <NonLink>
          <Icon className="icon" src={locationIcon} size={26} alt="email" />
          Klęczany 299A, 39-127 Będziemyśl <br />
          (15 km od Rzeszowa)
        </NonLink>
      </BottomWrapper>
    </Wrapper>
  )
}

export default ContactSection
