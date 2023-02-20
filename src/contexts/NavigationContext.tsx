import React, { createContext, useState, useEffect } from 'react'

type NavigationProviderProps = {
  children: React.ReactNode
}

type NavigationContextType = {
  isDesktopNavHidden: boolean
  isSidenavVisible: boolean
  hideNav: () => void
  closeSidenav: () => void
  openSidenav: () => void
  initialSearchParam: string
}

const defaultContextValues = {
  isDesktopNavHidden: false,
  isSidenavVisible: false,
  hideNav: () => null,
  closeSidenav: () => null,
  openSidenav: () => null,
  initialSearchParam: '',
}

export const NavigationContext =
  createContext<NavigationContextType>(defaultContextValues)

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [isDesktopNavHidden, setIsDesktopNavHidden] = useState(false)
  const [isSidenavVisible, setIsSidenavVisible] = useState(false)
  const [initialSearchParam, setInitialSearchParam] = useState('')

  let prevScroll = 0

  const handleScroll = (e: Event) => {
    const window = e.currentTarget as Window

    if (prevScroll > window.scrollY) {
      setIsDesktopNavHidden(false)
    } else if (window.scrollY >= 100) {
      setIsDesktopNavHidden(true)
    }
    prevScroll = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e))
    setInitialSearchParam(window.location.search)
    return () => {
      window.removeEventListener('scroll', (e) => handleScroll(e))
    }
  }, [])

  const hideNav = () => {
    if (window.scrollY >= 100) setIsDesktopNavHidden(true)
  }

  const closeSidenav = () => {
    if (isSidenavVisible) {
      setIsSidenavVisible(false)
      setTimeout(hideNav, 800)
      document.body.style.overflow = 'auto'
    }
  }

  const openSidenav = () => {
    if (!isSidenavVisible) {
      setIsSidenavVisible(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        isDesktopNavHidden,
        isSidenavVisible,
        hideNav,
        closeSidenav,
        openSidenav,
        initialSearchParam,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
