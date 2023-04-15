import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import LazyImage from 'components/shared/lazyImage'
import Icon from 'components/shared/icon'
import closeIcon from 'assets/icons/close.svg'
import useBreakpoint from 'hooks/useBreakpoint'

import { ImageDataLike } from 'gatsby-plugin-image'
import useOutsideClick from 'hooks/useOutsideClick'

type Props = {
  src: ImageDataLike
  modalVisible: boolean
  closeModal: () => void
}

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background: rgba(0, 0, 0, 0.725);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  z-index: 999;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: 890px;
  }
`
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 50%;
  padding: 5px;

  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }
`
const ZoomedModalImg: React.FC<Props> = ({ src, modalVisible, closeModal }) => {
  useEffect(() => {
    const handleKeyboardNavigation = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyboardNavigation)
    return () => window.removeEventListener('keydown', handleKeyboardNavigation)
  }, [])

  const { xl } = useBreakpoint()

  const imgWrapperRef = useRef(null)

  useOutsideClick({ ref: imgWrapperRef, handler: closeModal })

  return ReactDOM.createPortal(
    <Overlay isVisible={modalVisible}>
      <InnerWrapper ref={imgWrapperRef}>
        <LazyImage src={src} alt="zoomed" objectFit="contain" />
      </InnerWrapper>
      <CloseButton type="button" aria-label="close" onClick={closeModal}>
        <Icon src={closeIcon} size={20} alt="close" />
      </CloseButton>
    </Overlay>,
    document.body
  )
}
export default ZoomedModalImg
