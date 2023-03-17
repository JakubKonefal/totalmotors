import React, { useState } from 'react'
import styled from 'styled-components'

import { Formik, Field, Form, FormikHelpers } from 'formik'

import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'
import Button from 'components/shared/button'
import Input from 'components/layout/Forms/Input'
import Spinner from 'components/shared/Spinner'

import arrowIcon from 'assets/icons/arrow-right-long.svg'

import {
  CONTACT_FORM_SCHEMA,
  CONTACT_FORM_INIT_VALUES,
  ContactFormValues,
} from 'constants/form-schemas'
import Icon from 'components/shared/icon'

const Section = styled.section`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 60px;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray200};
  max-width: 1340px;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${({ theme }) => theme.media.lg.min} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;

  ${({ theme }) => theme.media.lg.min} {
    align-items: flex-start;

    h3,
    p {
      text-align: left;

      br {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.media.xl.min} {
    h3 {
      font-size: 32px;
    }
  }
`

const StyledForm = styled.div`
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

const ErrorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 10px;

  ${({ theme }) => theme.media.lg.min} {
    padding: 30px 20px;
    ${Text}:first-child {
      margin-bottom: 15px;
    }
  }
`

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formError, setFormError] = useState(false)

  return (
    <Formik
      initialValues={CONTACT_FORM_INIT_VALUES}
      validationSchema={CONTACT_FORM_SCHEMA}
      onSubmit={(
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
      ) => {
        if (formError) return
        ;(async () => {
          try {
            setTimeout(() => {
              setSubmitting(false)
              setSubmitSuccess(true)
            }, 2000)

            setTimeout(() => {
              setSubmitSuccess(false)
              setFormError(false)
              resetForm()
            }, 8000)
          } catch (err) {
            console.log(err)
            setSubmitting(false)
            setFormError(true)
            setTimeout(() => {
              setFormError(false)
            }, 8000)
          }
        })()
      }}
    >
      {({ isSubmitting }) =>
        submitSuccess ? (
          <Container>
            <SuccessInfoWrapper>
              <Text
                size={24}
                weight={700}
                themecolor="primary200"
                align="center"
                margin="10px"
                line={1.15}
              >
                Wiadomość została <br /> wysłana
              </Text>
            </SuccessInfoWrapper>
          </Container>
        ) : (
          <Section id="car-form" title="Formularz - zapytaj o sprzedaż">
            <StyledContainer>
              <TextContent>
                <Heading
                  as="h2"
                  size={30}
                  weight={600}
                  themecolor="black"
                  margin="0"
                  align="center"
                  dangerouslySetInnerHTML={{ __html: 'Zapytaj o sprzedaż' }}
                />
              </TextContent>
              <StyledForm>
                <Form>
                  <InputsWrapper>
                    <div>
                      <Field
                        name="name"
                        placeholder="Imię i nazwisko"
                        required
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
                      required
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
                      withIcon
                      textarea
                      component={Input}
                    />
                  </InputsWrapper>

                  <StyledButton
                    type="submit"
                    // themecolor="primary200"
                    // textTransform="uppercase"
                  >
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
                  {formError && (
                    <ErrorInfoWrapper>
                      <Text
                        size={24}
                        weight={700}
                        // themecolor="red"
                        align="center"
                        margin="10px"
                        line={1.15}
                      >
                        Wiadomość nie mogła zostać wysłana
                      </Text>
                      <Text
                        size={16}
                        weight={400}
                        themecolor="black"
                        align="center"
                      >
                        Wystąpił błąd. Spróbuj skontaktować się poprzez telefon
                        lub mail.
                      </Text>
                    </ErrorInfoWrapper>
                  )}
                </Form>
              </StyledForm>
            </StyledContainer>
          </Section>
        )
      }
    </Formik>
  )
}

export default ContactForm
