const React = require('react')
const { ThemeProvider } = require('styled-components')

const { default: theme } = require('styles/theme')
const { default: GlobalStyles } = require('styles/global')
const { default: NavigationProvider } = require('contexts/NavigationContext')

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavigationProvider>{element}</NavigationProvider>
      </ThemeProvider>
    </>
  )
}
