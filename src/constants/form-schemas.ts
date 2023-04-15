import * as Yup from 'yup'

export const CONTACT_FORM_SCHEMA = Yup.object().shape({
  name: Yup.string().required(`Proszę podać imię i nazwisko`),
  email: Yup.string()
    .email(`Adres email jest nieprawidłowy`)
    .required(`Proszę podać adres e-mail`),
  phone: Yup.string()
    .min(9, `Numer telefonu jest nieprawidłowy`)
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
      `Numer telefonu jest nieprawidłowy`
    ),
  message: Yup.string().required(`Proszę podać wiadomość`),
})

export const CONTACT_FORM_INIT_VALUES = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export type ContactFormValues = {
  name: string
  phone: string
  email: string
  message: string
}
