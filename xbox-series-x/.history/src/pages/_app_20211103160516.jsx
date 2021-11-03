import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppProps;
