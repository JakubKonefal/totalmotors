import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Heading, Text } from 'components/shared/typography'
import Spinner from 'components/shared/Spinner'

// import emailjs from '@emailjs/browser'
import useBreakpoint from 'hooks/useBreakpoint'

type Props = {
  formTitle: string
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.media.lg.min} {
    margin-right: 0;
    margin-top: 1rem;
    max-width: 280px;
  }

  ${({ theme }) => theme.media.xl.min} {
    margin-top: 4rem;
    max-width: 340px;
  }
`

const ButtonWrapper = styled.div<{ isSubmitting: boolean }>`
  position: relative;
  width: 125px;
  height: 47px;
  margin-top: 2rem;
  margin-left: auto;
  background: rgb(15, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(15, 15, 15, 1) 29%,
    rgba(84, 106, 123, 1) 100%
  );
  border: 2px solid black;
  border-radius: 8px;

  transition: 0.15s linear;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(15, 15, 15, 1) 91%,
      rgba(84, 106, 123, 1) 100%
    );
  }
`

const ButtonSubmit = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 20px;
  margin-bottom: 0;
  background: rgb(15, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(15, 15, 15, 1) 29%,
    rgba(84, 106, 123, 1) 100%
  );
  border-radius: 12px;
  max-width: 600px;

  ${Heading} {
    margin-right: auto;
  }

  ${({ theme }) => theme.media.lg.min} {
    align-items: flex-start;
    padding: 26px 22px 32px 22px;
  }

  ${({ theme }) => theme.media.xl.min} {
    padding: 26px 26px 32px 26px;
  }
`

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  overflow: hidden;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 2rem;
  font-size: 14px;
  padding-inline: 1.5rem;
  padding-block-start: 0;
  padding-block-end: 0;
  outline: none;
  border: none;
  border-radius: 5px;
`

const Textarea = styled.textarea`
  height: 150px;
  padding: 1.5rem;
  font-size: 14px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 5px;
`

const FormMessage = styled(Text)`
  width: 100%;
  margin-top: 2rem;
`

const CarForm: React.FC<Props> = ({ formTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formError, setFormError] = useState(false)

  const { lg } = useBreakpoint()

  const formRef = useRef<HTMLFormElement>(null)

  const handleFormReset = () => {
    setIsSubmitting(false)
    setSubmitSuccess(false)
    setFormError(false)
    formRef.current?.reset()
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // emailjs
    //   .sendForm(
    //     'konefaljakub-gmail',
    //     'golem-lp-contact-form',
    //     formRef.current as HTMLFormElement,
    //     'user_0synUJOJ7grlbPr8Dx8rD'
    //   )
    //   .then(
    //     () => {
    //       setSubmitSuccess(true)
    //       setFormError(false)
    //       setIsSubmitting(false)

    //       setTimeout(() => {
    //         handleFormReset()
    //       }, 8000)
    //     },
    //     () => {
    //       setSubmitSuccess(false)
    //       setFormError(true)

    //       setTimeout(() => {
    //         handleFormReset()
    //       }, 8000)
    //     }
    //   )
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleFormSubmit} ref={formRef}>
        <Heading
          as="h2"
          size={lg ? 26 : 26}
          margin="20px"
          themecolor="white"
          dangerouslySetInnerHTML={{ __html: formTitle }}
        />
        <InputsWrapper>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={'Imię / E-mail / Telefon'}
          />
          <Textarea id="message" name="message" placeholder={'Wiadomość'} />
          {submitSuccess && (
            <FormMessage size={15} weight={600} themecolor="primary200">
              Wiadomość została wysłana!
            </FormMessage>
          )}
          {formError && (
            <FormMessage size={15} weight={600} themecolor="danger">
              Błąd podczas wysyłania!
            </FormMessage>
          )}
        </InputsWrapper>
        <ButtonWrapper isSubmitting={isSubmitting}>
          <ButtonSubmit type="submit" value={isSubmitting ? '' : 'Wyślij'} />
          {isSubmitting && <Spinner />}
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  )
}

export default CarForm
