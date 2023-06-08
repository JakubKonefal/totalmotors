import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { NavigationContext } from 'contexts/NavigationContext'

import { Text } from 'components/shared/typography'

import useLocation from 'hooks/useLocation'

import { NAVIGATION_LINKS } from 'constants/links'
import useScrollHide from 'hooks/useScrollHide'

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

  ${({ theme }) => theme.media.sm.min} {
    padding: 0 32px 20px 32px;
  }
`

const Sidenav: React.FC = () => {
  const { isSidenavVisible, closeSidenav } = useContext(NavigationContext)

  const pathname = useLocation()

  const isHidden = useScrollHide(0, 150)

  useEffect(() => {
    if (isHidden) {
      closeSidenav()
    }
  }, [isHidden])

  return (
    <Overlay isVisible={isSidenavVisible && !isHidden}>
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
