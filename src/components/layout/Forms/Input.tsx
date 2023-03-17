import React, { useRef, HTMLInputTypeAttribute } from 'react'
import styled, { css } from 'styled-components'

import { FieldProps, getIn } from 'formik'

import Icon from 'components/shared/icon'
import { Text } from 'components/shared/typography'
import checkIcon from 'assets/icons/check.svg'

import type { Colors } from 'types/theme'

type Props = {
  placeholder: string
  required?: boolean
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  readonly?: boolean
  textarea?: boolean
  maxLength?: number
  themecolor?: keyof Colors
  outlineGreen?: boolean
  fontColor?: keyof Colors
  background: keyof Colors
  placeholderCentered?: boolean
  withIcon?: boolean
}

type InputElementProps = {
  error: boolean
  themecolor?: keyof Colors
  fontColor?: keyof Colors
  outlineGreen?: boolean
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`

const Placeholder = styled(Text)<{ textarea?: boolean; centered?: boolean }>`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: max-content;
  font-size: 13px;
  pointer-events: none;

  ${({ centered }) =>
    centered &&
    css`
      ${({ theme }) => theme.media.lg.max} {
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}

  ${({ textarea }) =>
    textarea &&
    css`
      top: 10px;
      transform: none;
    `}



  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary200};
  }
`

const IconWrapper = styled.div<{ textarea?: boolean }>`
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  height: 25px;
  width: 25px;
  /* background: rgba(35, 175, 81, 0.05); */
  border-radius: 50%;

  svg {
    height: 13px;
    width: 13px;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      top: 10px;
      transform: none;
    `}
`

const ErrorMessage = styled(Text)<{
  textarea?: boolean
  centered?: boolean
  background: keyof Colors
}>`
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 15px;
  top: 50%;
  left: 2px;
  right: 2px;
  height: calc(100% - 4px);
  border-radius: 50px;
  font-size: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
  background-color: ${({ theme, background }) => theme.colors[background]};
  text-align: left;

  &:focus {
    display: none;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      top: 20px;
      height: auto;
      /* transform: none; */
    `}
`

const Input = styled.input<InputElementProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding: 0 45px 0 15px;
  font-size: 12px;
  background-color: transparent;
  color: ${({ theme, fontColor }) => theme.colors[fontColor || 'black']};
  border: 1px solid
    ${({ theme, themecolor }) => theme.colors[themecolor || 'black']};
  border-radius: 8px;

  &::placeholder {
    visibility: hidden;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }

  &:focus ~ ${Placeholder} {
    display: none;
  }

  &:focus ~ ${ErrorMessage} {
    display: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type='number'] {
    -moz-appearance: textfield;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger} !important;
    `}

  ${({ outlineGreen }) =>
    outlineGreen &&
    css`
      opacity: 0.75;
      border-color: ${({ theme }) => theme.colors.primary200};
    `}

    ${({ readOnly }) =>
    readOnly &&
    css`
      pointer-events: none;
    `}

  ${({ theme }) => theme.media.lg.min} {
    padding: 0 25px;
  }
`

const Textarea = styled.textarea<InputElementProps>`
  box-sizing: border-box;
  width: 100%;
  height: 135px;
  padding: 1rem 1.25rem;
  background-color: transparent;
  border: 1px solid
    ${({ theme, themecolor }) => theme.colors[themecolor || 'black']};
  border-radius: 10px;
  color: ${({ theme, fontColor }) => theme.colors[fontColor || 'black']};
  resize: none;

  &::placeholder {
    visibility: hidden;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }

  &:focus ~ ${Placeholder} {
    display: none;
  }

  ${({ theme }) => theme.media.lg.min} {
    width: 100%;
    /* margin-bottom: 2rem; */
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
    `}

  ${({ outlineGreen }) =>
    outlineGreen &&
    css`
      opacity: 0.75;
      border-color: ${({ theme }) => theme.colors.primary200};
    `}
`

const FormInput: React.FC<Props & FieldProps> = ({
  field: { name, onChange, onBlur, value },
  form: { touched, errors },
  required,
  placeholder,
  type,
  disabled,
  readonly,
  textarea,
  maxLength,
  themecolor,
  outlineGreen,
  fontColor,
  background,
  placeholderCentered,
  withIcon,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const isError = getIn(touched, name) && !!getIn(errors, name)
  const errorText = errors[name] && touched[name] && (errors[name] as string)

  return textarea ? (
    <InputWrapper className="input-wrapper">
      <Textarea
        id={name}
        className="textarea"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        readOnly={!!readonly}
        // required={required}
        error={!!isError}
        themecolor={themecolor}
        outlineGreen={value && !isError && outlineGreen}
        placeholder={placeholder}
      />
      {errorText && (
        <ErrorMessage
          className="input-error-message"
          size={14}
          themecolor="danger"
          background={background || 'white'}
          textarea
          onClick={() => inputRef?.current?.focus()}
        >
          {errorText}
        </ErrorMessage>
      )}
      {!errorText && !value && (
        <Placeholder
          className="input-placeholder"
          size={14}
          themecolor={fontColor || 'black'}
          textarea
          dangerouslySetInnerHTML={{
            __html: required ? `${placeholder}<span>*</span>` : placeholder,
          }}
        />
      )}
      {touched[name] && !errorText && withIcon && value && (
        <IconWrapper textarea>
          <Icon src={checkIcon} size={24} alt="check" />
        </IconWrapper>
      )}
    </InputWrapper>
  ) : (
    <InputWrapper className="input-wrapper">
      <Input
        id={name}
        className="input"
        ref={inputRef}
        name={name}
        onChange={(e) => {
          onChange(e)
        }}
        onBlur={onBlur}
        maxLength={maxLength || 50}
        value={value}
        disabled={disabled}
        readOnly={!!readonly}
        // required={required}
        error={!!isError}
        themecolor={themecolor}
        outlineGreen={value && !isError && outlineGreen}
        placeholder={placeholder}
      />
      {errorText && (
        <ErrorMessage
          className="input-error-message"
          size={14}
          themecolor="danger"
          background={background || 'white'}
          onClick={() => inputRef?.current?.focus()}
        >
          {errorText}
        </ErrorMessage>
      )}
      {!errorText && !value && (
        <Placeholder
          className="input-placeholder"
          size={14}
          themecolor={fontColor || 'black'}
          centered={placeholderCentered}
          dangerouslySetInnerHTML={{
            __html: required ? `${placeholder}<span>*</span>` : placeholder,
          }}
        />
      )}
      {touched[name] && !errorText && withIcon && value && (
        <IconWrapper>
          <Icon src={checkIcon} size={24} alt="check" />
        </IconWrapper>
      )}
    </InputWrapper>
  )
}

export default FormInput
