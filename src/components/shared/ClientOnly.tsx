import { useState, useEffect } from 'react'

type Props = {
  children: JSX.Element | null
}

const ClientOnly = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return children
}

export default ClientOnly
