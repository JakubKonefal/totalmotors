import { useState, useCallback, useEffect } from 'react'

let timeout: ReturnType<typeof setTimeout>

const useSlider = <T,>(slides: T[], delay: number = 6000, autoplay = true) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = (activeSlide + 1) % slides.length

  const slide = useCallback(() => {
    setActiveSlide(nextSlide)
  }, [activeSlide])

  const changeToSlide = (slideIndex: number) => {
    if (!isAnimating) setActiveSlide(slideIndex)
  }

  const goNext = () => {
    changeToSlide(nextSlide)
  }

  const goPrev = () => {
    if (activeSlide === 0) changeToSlide(slides.length - 1)
    else changeToSlide(activeSlide - 1)
  }

  useEffect(() => {
    const setSlideTimeout = () => {
      clearTimeout(timeout)
      timeout = setTimeout(slide, delay)

      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 700)
    }

    if (slides.length > 1 && autoplay) setSlideTimeout()

    return () => {
      clearTimeout(timeout)
    }
  }, [activeSlide, slide])

  return { activeSlide, nextSlide, changeToSlide, goNext, goPrev }
}

export default useSlider
