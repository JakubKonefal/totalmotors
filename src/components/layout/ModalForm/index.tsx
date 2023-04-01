import React from 'react'
import styled, { css } from 'styled-components'

import { NavigationContext } from 'contexts/NavigationContext'
import ContactForm from 'components/layout//Forms/CarForm'

import Icon from 'components/shared/icon'
import closeIcon from 'assets/icons/close.svg'

import useOutsideClick from 'hooks/useOutsideClick'

const Overlay = styled.aside<{
  visible: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);

  transition: opacity 0.25s ease-in-out;

  opacity: 0;
  visibility: hidden;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

const ModalBody = styled.div`
  position: relative;

  width: 100%;
  max-width: 450px;
  padding-left: ${({ theme }) => theme.container.padding};
  padding-right: ${({ theme }) => theme.container.padding};

  .form-inner-wrapper {
    max-width: unset;
  }

  ${({ theme }) => theme.media.lg.min} {
    max-width: 840px;
  }
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.container.padding};
  transform: translate(0, -135%);
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 50%;
  padding: 5px;

  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }

  ${({ theme }) => theme.media.lg.min} {
    transform: translate(120%, -120%);
  }
`

const Modal: React.FC = () => {
  const { isModalFormVisible, closeModalForm } =
    React.useContext(NavigationContext)

  const modalBodyRef = React.useRef<HTMLDivElement>(null)

  useOutsideClick({ ref: modalBodyRef, handler: closeModalForm })

  return (
    <Overlay visible={isModalFormVisible}>
      <ModalBody ref={modalBodyRef}>
        <ContactForm heading="Zapytaj o sprzedaż" centerHeading />
        <CloseButton type="button" aria-label="close" onClick={closeModalForm}>
          <Icon src={closeIcon} size={20} alt="close" />
        </CloseButton>
      </ModalBody>
    </Overlay>
  )
}

export default Modal
