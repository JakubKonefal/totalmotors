import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { NavigationContext } from 'contexts/NavigationContext'

import Icon from 'components/shared/icon'
import { Text } from 'components/shared/typography'

import sprzedamLogo from 'assets/icons/sprzedamlogolatest.svg'

import sprzedamLogo1 from 'assets/icons/logosSvg/logo1.svg'
import sprzedamLogo1V2 from 'assets/icons/logosSvg/logo1V2.svg'
import sprzedamLogo2 from 'assets/icons/logosSvg/logo2.svg'
import sprzedamLogo2V2 from 'assets/icons/logosSvg/logo2V2.svg'
import sprzedamLogo2V3 from 'assets/icons/logosSvg/logo2V3.svg'
import sprzedamLogo2V4 from 'assets/icons/logosSvg/logo2V4.svg'
import sprzedamLogo2V5 from 'assets/icons/logosSvg/logo2V5.svg'
import sprzedamLogo3 from 'assets/icons/logosSvg/logo3.svg'

import closeIcon from 'assets/icons/close-white.svg'

import useLocation from 'hooks/useLocation'

import { NAVIGATION_LINKS } from 'constants/links'

const SidenavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  top: ${({ theme }) => theme.navbar.height};
  /* bottom: 0; */
  right: 0;
  z-index: 14;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  will-change: transform;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: #0202028a;
  color: ${({ theme }) => theme.colors.black};
  transform: translateX(100vw);
  ${({ theme }) => theme.media.s.min} {
    width: 400px;
    transform: translateX(400px);
  }
`

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.navbar.height};
  left: 0;
  right: 0;
  /* bottom: 0; */
  background: rgba(255, 255, 255, 0.35);
  z-index: 11000;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      & > ${SidenavWrapper} {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }
    `}
`

const NavHeading = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 0px 10px 0px 20px;
  border-bottom: 2px solid #80808070; */

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 50px 20px;
  border-bottom: 2px solid #80808070;
  background-color: rgb(52, 52, 52);
`

const Logo = styled.a`
  display: block;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
`

const LinkItem = styled.button<{ active: boolean }>`
  position: relative;
  height: 100%;
  width: fit-content;
  margin: 14px 0;

  :first-child {
    /* margin-top: 25px; */
  }

  ${({ active }) =>
    active &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: -12px;
        width: 6px;
        min-width: 6px;
        min-height: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.tertiary};
        transform: translateY(-50%);
      }
    `}

  &:hover {
    ${Text} {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  width: 100%;
  height: 100%;
`

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;

  cursor: pointer;
`

const Shader = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: 1px -7px 20px 30px #0a06066d;
`

const Sidenav: React.FC = () => {
  const { isSidenavVisible, closeSidenav } = useContext(NavigationContext)

  const pathname = useLocation()

  return (
    <Overlay isVisible={isSidenavVisible}>
      <SidenavWrapper>
        {/* <NavHeading>
          <Logo href="/">
            <Icon src={sprzedamLogo} alt="matexi" width={260} />
          </Logo>
          <CloseBtn type="button" aria-label="close" onClick={closeSidenav}>
            <Icon src={closeIcon} alt="close" size={34} />
          </CloseBtn>
        </NavHeading> */}
        <InnerWrapper>
          <Links>
            {NAVIGATION_LINKS.map((link, index) => (
              <LinkItem
                key={`sidenav-link-${index}`}
                as="a"
                href={link.link}
                type="button"
                active={link.link === pathname}
              >
                <Text size={18} themecolor="white">
                  {link.label}
                </Text>
              </LinkItem>
            ))}
          </Links>
        </InnerWrapper>
        {/* <Shader /> */}
      </SidenavWrapper>
    </Overlay>
  )
}

export default Sidenav
