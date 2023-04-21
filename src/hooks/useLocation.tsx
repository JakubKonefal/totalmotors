import { useState, useEffect } from 'react'

const useLocation = () => {
  const [location, setLocation] = useState({ pathname: '', search: '' })

  const locationProperties =
    typeof window !== 'undefined'
      ? { pathname: window.location.pathname, search: window.location.search }
      : { pathname: '', search: '' }

  useEffect(() => {
    setLocation(locationProperties)
  }, [locationProperties.pathname, locationProperties.search])

  return location
}

export default useLocation
