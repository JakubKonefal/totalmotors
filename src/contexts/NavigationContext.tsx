import React, { createContext, useState, useEffect } from 'react'

type NavigationProviderProps = {
  children: React.ReactNode
}

type NavigationContextType = {
  isDesktopNavHidden: boolean
  isSidenavVisible: boolean
  isModalFormVisible: boolean
  hideNav: () => void
  closeSidenav: () => void
  openSidenav: () => void
  closeModalForm: () => void
  openModalForm: () => void
}

const defaultContextValues = {
  isDesktopNavHidden: false,
  isSidenavVisible: false,
  isModalFormVisible: false,
  hideNav: () => null,
  closeSidenav: () => null,
  openSidenav: () => null,
  closeModalForm: () => null,
  openModalForm: () => null,
}

export const NavigationContext =
  createContext<NavigationContextType>(defaultContextValues)

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [isDesktopNavHidden, setIsDesktopNavHidden] = useState(false)
  const [isSidenavVisible, setIsSidenavVisible] = useState(false)
  const [isModalFormVisible, setIsModalFormVisible] = useState(false)

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

  const closeModalForm = () => {
    if (isModalFormVisible) {
      setIsModalFormVisible(false)
      setTimeout(hideNav, 800)
      document.body.style.overflow = 'auto'
    }
  }

  const openModalForm = () => {
    if (!isModalFormVisible) {
      setIsModalFormVisible(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        isDesktopNavHidden,
        isSidenavVisible,
        isModalFormVisible,
        hideNav,
        closeSidenav,
        openSidenav,
        closeModalForm,
        openModalForm,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
