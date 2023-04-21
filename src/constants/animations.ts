export const variants = {
  fadeIn: {
    visible: { opacity: 1, scale: 1, translateY: '-50%', translateX: '-50%' },
    hidden: { opacity: 0, scale: 0.85, translateY: '-50%', translateX: '-50%' },
  },
  fadeInLeftToRight: {
    visible: { opacity: 1, translateX: 0 },
    hidden: { opacity: 0, translateX: -25 },
  },
  fadeInRightToLeft: {
    visible: { opacity: 1, translateX: 0 },
    hidden: { opacity: 0, translateX: 25 },
  },
  fadeInTopToBottom: {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -20 },
  },
  fadeInBottomToTop: {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 25 },
  },
  expandLeftToRight: {
    visible: { width: '100%' },
    hidden: { width: '0%' },
  },
}

export const transitions = {
  standard: {
    duration: 0.7,
    ease: 'easeInOut',
  },

  quick: {
    duration: 0.5,
    ease: 'easeIn',
  },
}
