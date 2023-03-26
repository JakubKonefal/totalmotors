import React, { useContext } from 'react'
import styled from 'styled-components'

import { NavigationContext } from 'contexts/NavigationContext'

import Container from 'components/shared/container'
import Icon from 'components/shared/icon'
import { Text } from 'components/shared/typography'

import exampleLogo from 'assets/icons/logo-placeholder.svg'

import { NAVIGATION_LINKS } from 'constants/links'

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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 15px 4px #6262621a;
  transition: 350ms ease-in-out;
  z-index: 999;

  transform: ${({ active }) =>
    active ? `translate3d(0, 0, 0)` : 'translate3d(0, -250%, 0)'};

  ${({ theme }) => theme.media.lg.min} {
    height: ${({ theme }) => theme.navbar.heightLG};
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.lg.min} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 33px;
  z-index: 3;

  div {
    width: 100%;
    margin-bottom: 6px;
    height: 3px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  div:last-child {
    margin-bottom: 0;
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const InnerWrapper = styled.div`
  display: none;

  align-items: center;

  ${({ theme }) => theme.media.lg.min} {
    display: flex;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
`

const LinkItem = styled.button`
  position: relative;
  height: 100%;
  padding: 0 8px;

  &:hover {
    ${Text} {
      color: ${({ theme }) => theme.colors.tertiary};
      transition: 250ms ease-in-out;
    }
  }

  ${({ theme }) => theme.media.xl.min} {
    padding: 0 12px;
  }

  ${({ theme }) => theme.media.xxl.min} {
    padding: 0 14px;
  }
`

const CallUsButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  margin-left: 20px;
  font-weight: 500;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  letter-spacing: 0.5px;
  transition: 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary100};
  }
`

const Topnav = () => {
  const { lg, xl } = useBreakpoint()
  const { openSidenav } = useContext(NavigationContext)

  const isHidden = useScrollHide(0, 150)

  return (
    <TopnavWrapper active={!isHidden}>
      <StyledContainer fullHeight>
        <Logo href="/">
          <Icon src={exampleLogo} alt="matexi" width={lg ? 135 : 110} />
        </Logo>

        {/* <InnerWrapper> */}
        <Links>
          {NAVIGATION_LINKS.map((link, index) => (
            <LinkItem as="a" href={link.link} key={`navbar-link-${index}`}>
              <Text size={xl ? 16 : 14} themecolor="black">
                {link.label}
              </Text>
            </LinkItem>
          ))}
        </Links>
        <CallUsButton href="tel: 733 002 337" role="button">
          Zadzwoń
        </CallUsButton>
        {/* </InnerWrapper> */}

        {!lg && (
          <MenuButton type="button" onClick={openSidenav}>
            <div />
            <div />
            <div />
          </MenuButton>
        )}
      </StyledContainer>
    </TopnavWrapper>
  )
}

export default Topnav
