import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { NavigationContext } from 'contexts/NavigationContext'
import { NAVIGATION_LINKS } from 'constants/links'

import Container from 'components/shared/container'
import Icon from 'components/shared/icon'
import { Text } from 'components/shared/typography'

import sprzedamLogo from 'assets/icons/logov6.svg'
import phone1Icon from 'assets/icons/phone-1-dark.svg'
import emailIcon from 'assets/icons/mail-dark.svg'

import useBreakpoint from 'hooks/useBreakpoint'
import useScrollHide from 'hooks/useScrollHide'

const TopnavWrapper = styled.nav<{ active?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.navbar.height};
  width: 100%;
  background-color: #0202028a;
  box-shadow: 1px 1px 15px 4px #6262622b;
  transition: 350ms ease-in-out;
  z-index: 999;

  ${({ theme }) => theme.media.lg.min} {
    flex-direction: column;
    height: ${({ theme }) => theme.navbar.heightLG};
    height: ${({ theme }) => theme.navbar.heightLG};
  }

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0);
    `}

  ${({ active }) =>
    !active &&
    css`
      transform: translateY(-51px);
    `}
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.lg.min} {
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledContainerBottom = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  min-height: 40px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 32px;
    width: calc(36% - 64px);
    /* transform: translateX(-50%); */
    height: 1px;
    background-color: #ffffff75;
  }

  ${({ theme }) => theme.media.lg.min} {
    &:after {
      /* display: none; */
    }
  }
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }

  ${Text} {
    font-size: 0.875rem;
  }

  &:hover {
    ${Text} {
      color: ${({ theme }) => theme.colors.tertiary};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }

  ${Text} {
    color: ${({ theme }) => theme.colors.white};
  }

  :first-child {
    margin-right: 15px;
  }
`

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin-left: auto;
  width: 33px;
  z-index: 3;

  div {
    width: 100%;
    margin-bottom: 6px;
    height: 3px;
    min-height: 3px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  div:last-child {
    /* margin-bottom: 0; */
  }

  ${({ theme }) => theme.media.lg.min} {
    display: none;
  }
`

const Logo = styled.a`
  /* display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  width: 60%;
  max-width: 230px;
  /* height: 60px; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26px;
  line-height: 1.3;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
  }

  img {
    /* object-fit: cover !important; */
  }

  span {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`

const Links = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  height: 20px;

  ${({ theme }) => theme.media.lg.min} {
    display: flex;
    margin-left: auto;
    * {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const LinkItem = styled.button<{ blue: boolean }>`
  position: relative;
  /* height: 100%; */
  padding: 0 8px;

  :last-child {
    padding-right: 0;
  }

  &:hover {
    ${Text} {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  ${({ theme }) => theme.media.xl.min} {
    padding: 0 12px;
  }

  ${({ theme }) => theme.media.xxl.min} {
    padding: 0 14px;
  }

  ${({ blue }) =>
    blue &&
    css`
      padding: 0 !important;
      ${Text} {
        background-color: ${({ theme }) => theme.colors.primary200};
        padding: 6px 16px;
        font-weight: 600;
        border-radius: 10px;
        /* color: ${({ theme }) => theme.colors.white}; */
      }

      &:hover {
        ${Text} {
          background-color: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => theme.colors.white};
          transition: 250ms ease-in-out;
        }
      }
    `}
`

const Topnav = () => {
  const { lg, xl } = useBreakpoint()
  const { openSidenav } = useContext(NavigationContext)

  const isHidden = useScrollHide(0, 150)

  return (
    <TopnavWrapper active={!isHidden}>
      <StyledContainer fullHeight>
        <Logo href="/">
          {/* sprzedam <br /> twój <span>samochód</span>.pl */}
          <Icon src={sprzedamLogo} alt="sprzedamtwojsamochod.pl - logo" auto />
        </Logo>

        {/* <InnerWrapper> */}
        <Links>
          {NAVIGATION_LINKS.map((link, index) => (
            <LinkItem
              as="a"
              href={link.link}
              blue={link.label.toLowerCase().includes('realizacje')}
              key={`navbar-link-${index}`}
            >
              <Text size={xl ? 14 : 14} themecolor="black">
                {link.label}
              </Text>
            </LinkItem>
          ))}
        </Links>

        {/* {lg && (
          <CallUsButton href="tel: 733 002 337" role="button">
            Zadzwoń
          </CallUsButton>
        )} */}
        {/* </InnerWrapper> */}

        <MenuButton type="button" onClick={openSidenav}>
          <div />
          <div />
          <div />
        </MenuButton>
      </StyledContainer>
      {lg && (
        <StyledContainerBottom>
          <ContactLink href="tel: 668 074 853">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9995 19.1864V16.4767C21.0105 16.0337 20.858 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0274 14.1176 14.4272 14.9788 13.8405 15.5644C11.5747 14.2785 9.69864 12.4062 8.41026 10.1448C8.99696 9.55929 9.85994 8.96036 10.0429 8.10428C10.2772 7.00777 9.66819 4.24949 8.72138 3.43684C8.38835 3.151 7.96253 2.99577 7.52331 3.00009H4.80817C3.77364 3.00106 2.91294 3.92895 3.00713 4.96919C3.00006 13.935 10.0001 21 19.0265 20.9929C20.0723 21.0873 21.0037 20.2223 20.9995 19.1864Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Text size={12} themecolor="black">
              668 074 853
            </Text>
          </ContactLink>
          <ContactLink href="mailto: biuro@sprzedamtwojsamochod.pl">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Text size={12} themecolor="black">
              biuro@sprzedamtwojsamochod.pl
            </Text>
          </ContactLink>
        </StyledContainerBottom>
      )}
    </TopnavWrapper>
  )
}

export default Topnav
