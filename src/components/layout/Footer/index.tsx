import { Text } from 'components/shared/typography'
import React from 'react'
import styled, { css } from 'styled-components'

import { seoProps } from 'constants/seoProps'

import Container from 'components/shared/container'

import phone1Icon from 'assets/icons/phone-1.svg'
import emailIcon from 'assets/icons/mail.svg'
import locationIcon from 'assets/icons/location.svg'
import location2Icon from 'assets/icons/location2.svg'
import facebookIcon from 'assets/icons/facebook.svg'
import instagramIcon from 'assets/icons/instagram.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import Icon from 'components/shared/icon'

// import ContactMeans from 'components/layout/Contact/ContactMeans'

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: ${({ theme }) => theme.container.marginSM};
  ${({ theme }) => theme.media.lg.min} {
    margin-top: ${({ theme }) => theme.container.marginLG};
  }
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

    ${Container} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const TopWrapper = styled.div`
  width: 100%;
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.darkgray};
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

  b {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 16px;
  }

  ${Text} {
    :not(:first-child) {
      font-family: 'Fira Sans';
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    width: auto;

    b {
      font-size: 18px;
    }

    :first-child {
      max-width: 380px;
      margin-right: auto;
    }

    :not(:first-child) {
      margin-left: 32px;
    }
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  a {
    :first-child {
      margin-right: 10px;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    margin-top: 0;
  }
`

const ButtonLink = styled.a<{ nohover?: boolean }>`
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
    /* color: ${({ theme }) => theme.colors.primary200}; */
    color: ${({ theme }) => theme.colors.tertiary};
  }

  ${({ nohover }) =>
    nohover &&
    css`
      &:hover {
        color: ${({ theme }) => theme.colors.gray500};
      }
    `}
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
                O firmie
              </Text>
              <Text size={xl ? 16 : 14} weight={300} themecolor="gray500">
                Firma powstała, aby ułatwić ludziom proces sprzedaży samochodu.
                Najczęstszymi problemami są brak czasu na zajęcie się sprzedażą,
                brak fachowej wiedzy czy też nikła znajomość rynku.
                <br />
                <br />
                Pomagam przeprowadzić cały proces sprzedażowy od A do Z, a Ty
                zyskujesz czas i energię na inne sprawy.
                <br />
                <br />
                Region działalności: <br />
                <b>Województwo podkarpackie</b>
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
              <ButtonLink as="div" nohover>
                <Icon
                  className="button-link-icon"
                  src={locationIcon}
                  size={26}
                  alt="email"
                />
                Klęczany 299A, 39-127 Będziemyśl <br />
                (15 km od Rzeszowa)
              </ButtonLink>
            </TopGridItem>
          </TopGrid>
        </Container>
      </TopWrapper>
      <BottomWrapper>
        <Container>
          <Text size={lg ? 12 : 11} themecolor="white">
            &copy; {new Date().getFullYear()} Sprzedamtwojsamochód | Wszystkie
            prawa zastrzeżone.
          </Text>
          <SocialMedia>
            <a
              href={seoProps.facebookLink}
              target="blank"
              rel="noopener noreferrer nofollow"
              role="button"
            >
              <Icon src={facebookIcon} size={30} alt="facebook" />
            </a>
            <a
              href={seoProps.instagramLink}
              target="blank"
              rel="noopener noreferrer nofollow"
              role="button"
            >
              <Icon src={instagramIcon} size={30} alt="instagram" />
            </a>
          </SocialMedia>
        </Container>
      </BottomWrapper>
      {/* <ContactMeans inFooter /> */}
    </FooterWrapper>
  )
}

export default Footer
