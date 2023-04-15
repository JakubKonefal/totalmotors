import { useEffect } from 'react'

const useCloseOnEscape = (onClose: () => void) => {
  useEffect(() => {
    const handleCloseOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleCloseOnEscape)
    return () => window.removeEventListener('keydown', handleCloseOnEscape)
  }, [onClose])
}

export default useCloseOnEscape
