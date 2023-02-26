import { Text } from 'components/shared/typography'
import React from 'react'
import styled from 'styled-components'

// import ContactMeans from 'components/layout/Contact/ContactMeans'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 7rem;
  padding: 15px 20px;
  border-top: 2px solid rgb(66, 84, 73);
  background: ${({ theme }) => theme.colors.primary200};

  transition: 150ms ease-in-out margin;

  ${({ theme }) => theme.media.lg.min} {
    margin-top: 10rem;
    position: relative;
    z-index: 100;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: -30px;
      height: 30px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: -3px -5px 7px 1px #ffffff7a;
    }
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Text themecolor="white">
        &copy; '2022 Paweł Kulik | Wszystkie prawa zastrzeżone.'
      </Text>
      {/* <ContactMeans inFooter /> */}
    </FooterWrapper>
  )
}

export default Footer
