import { css, createGlobalStyle } from 'styled-components'

import Normalize from 'styles/normalize'

const Global = css`
  * {
    outline-color: ${({ theme }) => theme.colors.tertiary};
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  span {
    font-family: 'Open Sans', sans-serif;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px #eef1f4 inset;
    box-shadow: 0 0 0px 100px #eef1f4 inset;
  }

  img {
    margin: 0;
  }
`

const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global}
`

export default GlobalStyles
