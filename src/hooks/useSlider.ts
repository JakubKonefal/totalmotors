// @ts-nocheck

import { useState, useRef, useCallback, useEffect } from 'react'

const useSlider = (slides, timeout = 3800) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef(null)

  const slide = useCallback(() => {
    const nextSlide = (activeSlide + 1) % slides.length
    setActiveSlide(nextSlide)
  }, [activeSlide])

  const changeToSlide = (slideIndex) => {
    if (!isAnimating) setActiveSlide(slideIndex)
  }

  const goNext = () => {
    const nextSlide = (activeSlide + 1) % slides.length
    changeToSlide(nextSlide)
  }

  const goPrev = () => {
    if (activeSlide === 0) changeToSlide(slides.length - 1)
    else changeToSlide(activeSlide - 1)
  }

  useEffect(() => {
    const setSlideTimeout = () => {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(slide, timeout)

      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }

    if (slides.length > 1) {
      setSlideTimeout()
    }

    return () => {
      clearTimeout(timeoutRef.current)
      clearTimeout(setSlideTimeout)
    }
  }, [activeSlide, slide])

  return { activeSlide, changeToSlide, goNext, goPrev }
}

export default useSlider
