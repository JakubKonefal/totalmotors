import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import emailjs from '@emailjs/browser'

import { Formik, Field, Form, FormikHelpers } from 'formik'

import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'
import Button from 'components/shared/button'
import Input from 'components/layout/Forms/Input'
import Icon from 'components/shared/icon'
import Spinner from 'components/shared/Spinner'

import arrowIcon from 'assets/icons/arrow-right-long.svg'

import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

import {
  CONTACT_FORM_SCHEMA,
  CONTACT_FORM_INIT_VALUES,
  ContactFormValues,
} from 'constants/form-schemas'

type Props = {
  heading: string
  centerHeading?: boolean
  formBottom?: boolean
}

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 30px;

  ${({ theme }) => theme.media.lg.min} {
    max-width: unset;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;

  h2 {
    width: 100%;
  }

  ${({ theme }) => theme.media.lg.min} {
    align-items: flex-start;
    max-width: 885px;
    width: 100%;
  }
`

const StyledForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: 100%;
  max-width: 450px;
  margin-top: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    margin: 0;
  }

  ${({ theme }) => theme.media.lg.min} {
    max-width: 885px;
    margin-top: 40px;
  }
`

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > div:first-child {
    width: 100%;
  }

  ${({ theme }) => theme.media.lg.min} {
    & > div:first-child {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 15px;
    }
  }
`

const ArrowIconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(135%, -50%);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    margin-left: 10px;
  }
`

const StyledButton = styled(Button)`
  position: relative;
  /* margin-top: 20px; */
  width: 135px;
  /* max-width: 120px; */
  text-align: center;
  margin-left: auto;

  background-color: ${({ theme }) => theme.colors.tertiary};

  svg {
    margin-left: 10px;
    width: 24px;
  }

  &:hover {
    ${ArrowIconWrapper} {
      display: block;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    margin-top: 30px;
  }
`

const SuccessInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 230px;
  margin-bottom: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary200};
  border-radius: 10px;

  ${({ theme }) => theme.media.s.min} {
    br {
      display: none;
    }
  }
`

const SubmitInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.lg.min} {
    ${Text} {
      font-size: 16px;
    }
  }
`

const ContactForm: React.FC<Props> = ({
  heading,
  centerHeading = false,
  formBottom = false,
}) => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formError, setFormError] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  const handleFormReset = () => {
    setSubmitSuccess(false)
    setFormError(false)
    formRef.current?.reset()
  }

  const animateForm = useAnimateOnScroll()

  return (
    <Formik
      initialValues={CONTACT_FORM_INIT_VALUES}
      validationSchema={CONTACT_FORM_SCHEMA}
      ref={formRef}
      onSubmit={(
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
      ) => {
        emailjs
          .sendForm(
            'konefaljakub-gmail',
            'sprzedamtwojsamochod-lp',
            '#contact-form',
            'vXjOlPWGulGIO3iFt'
          )
          .then(() => {
            setSubmitSuccess(true)
            setFormError(false)
            setSubmitting(false)
            setTimeout(() => {
              handleFormReset()
              resetForm()
            }, 8000)
          })
          .catch(() => {
            setSubmitSuccess(false)
            setFormError(true)
            setSubmitting(false)
            setTimeout(() => {
              handleFormReset()
              resetForm()
            }, 8000)
          })
      }}
    >
      {({ isSubmitting }) => (
        <Section id="car-form" title="Formularz - zapytaj o sprzedaż">
          <InnerWrapper className="form-inner-wrapper">
            <TextContent>
              <Heading
                as="h2"
                size={26}
                weight={600}
                themecolor="black"
                margin="0"
                transform="uppercase"
                align={centerHeading ? 'center' : 'left'}
                dangerouslySetInnerHTML={{ __html: heading }}
              />
            </TextContent>
            <StyledForm
              ref={animateForm.ref}
              variants={variants.fadeInBottomToTop}
              initial="hidden"
              animate={animateForm.control}
              transition={transitions.quicker}
            >
              <Form id="contact-form">
                <InputsWrapper>
                  <div>
                    <Field
                      name="name"
                      placeholder="Imię i nazwisko"
                      // required
                      themecolor="gray500"
                      fontColor="black100"
                      background="gray300"
                      withIcon
                      component={Input}
                    />
                    <Field
                      name="phone"
                      placeholder="Numer telefonu"
                      themecolor="gray500"
                      fontColor="black100"
                      background="gray300"
                      withIcon
                      component={Input}
                    />
                  </div>
                  <Field
                    name="email"
                    placeholder="E-mail"
                    // required
                    themecolor="gray500"
                    fontColor="black100"
                    background="gray300"
                    withIcon
                    component={Input}
                  />
                  <Field
                    name="message"
                    placeholder="Wiadomość"
                    themecolor="gray500"
                    fontColor="black100"
                    background="gray300"
                    // required
                    withIcon
                    textarea
                    component={Input}
                  />
                </InputsWrapper>

                {formError && (
                  <SubmitInfoWrapper>
                    <Text size={14} weight={700} themecolor="danger">
                      Błąd podczas wysyłania!
                    </Text>
                  </SubmitInfoWrapper>
                )}

                {submitSuccess && (
                  <SubmitInfoWrapper>
                    <Text size={14} weight={700} themecolor="success">
                      Wiadomość wysłana pomyślnie!
                    </Text>
                  </SubmitInfoWrapper>
                )}

                <StyledButton type="submit">
                  {isSubmitting ? (
                    <Spinner />
                  ) : (
                    <>
                      <Text
                        size={13}
                        weight={700}
                        themecolor="white"
                        transform="uppercase"
                        align="center"
                      >
                        wyślij
                      </Text>
                      <ArrowIconWrapper>
                        <Icon src={arrowIcon} size={22} alt="arrow-right" />
                      </ArrowIconWrapper>
                    </>
                  )}
                </StyledButton>
              </Form>
            </StyledForm>
          </InnerWrapper>
        </Section>
      )}
    </Formik>
  )
}

export default ContactForm
