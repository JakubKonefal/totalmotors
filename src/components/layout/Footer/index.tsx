import { Text } from 'components/shared/typography'
import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'

import phone1Icon from 'assets/icons/phone-1.svg'
import phone2Icon from 'assets/icons/phone-2.svg'
import emailIcon from 'assets/icons/mail.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'

// import ContactMeans from 'components/layout/Contact/ContactMeans'

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 2rem;
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 12px 0;
  background: rgb(52, 52, 52);

  transition: 150ms ease-in-out margin;

  ${({ theme }) => theme.media.lg.min} {
    position: relative;
    z-index: 100;
  }
`

const TopWrapper = styled.div`
  width: 100%;
  padding: 32px 0;
  background: rgb(29, 29, 29);
`

const TopGrid = styled.div`
  display: grid;
  row-gap: 24px;

  ${({ theme }) => theme.media.lg.min} {
    display: flex;
  }
`

const TopGridItem = styled.div`
  width: 100%;

  ${Text} {
    :not(:first-child) {
      font-family: 'Fira Sans';
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    width: auto;

    :first-child {
      max-width: 320px;
      margin-right: auto;
    }

    :not(:first-child) {
      margin-left: 32px;
    }
  }
`

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray500};
  :not(:last-child) {
    margin-bottom: 16px;
  }

  .button-link-icon {
    margin-right: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary200};
  }
`

// const Logo = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   & > div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `

const Footer = () => {
  const { lg, xl } = useBreakpoint()

  return (
    <FooterWrapper>
      <TopWrapper>
        <Container>
          <TopGrid>
            <TopGridItem>
              {/* <Logo href="/">
                <Icon src={exampleLogo} alt="matexi" width={lg ? 135 : 135} />
              </Logo> */}
              <Text
                size={xl ? 21 : 19}
                weight={600}
                margin="16px"
                themecolor="white"
              >
                Daniel Synoś Cars
              </Text>
              <Text size={xl ? 16 : 14} weight={300} themecolor="gray500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                perspiciatis similique facere! Repellendus explicabo nam ducimus
                culpa voluptas necessitatibus aliquam?
              </Text>
            </TopGridItem>
            <TopGridItem>
              <Text
                size={xl ? 21 : 19}
                weight={600}
                margin="16px"
                themecolor="white"
              >
                Kontakt
              </Text>
              <ButtonLink href="tel: 733 002 337" role="button">
                <Icon
                  className="button-link-icon"
                  src={phone1Icon}
                  size={26}
                  alt="phone"
                />
                Tel.: 733 002 337
              </ButtonLink>
              <ButtonLink href="mailto: test@email.com" role="button">
                <Icon
                  className="button-link-icon"
                  src={emailIcon}
                  size={26}
                  alt="email"
                />
                test@email.com
              </ButtonLink>
            </TopGridItem>
            <TopGridItem>
              <Text
                size={xl ? 21 : 19}
                weight={600}
                margin="16px"
                themecolor="white"
              >
                Adres
              </Text>
              <Text size={16} weight={300} line={2} themecolor="gray500">
                Ul. Podkarpacka 1/1 <br /> Rzeszów <br /> 35-555
              </Text>
            </TopGridItem>
          </TopGrid>
        </Container>
      </TopWrapper>
      <BottomWrapper>
        <Container>
          <Text size={lg ? 12 : 11} themecolor="white">
            &copy; {new Date().getFullYear()} Daniel Synoś | Wszystkie prawa
            zastrzeżone.
          </Text>
        </Container>
      </BottomWrapper>
      {/* <ContactMeans inFooter /> */}
    </FooterWrapper>
  )
}

export default Footer
