import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { Provider } from 'react-redux'
import store from 'store/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
