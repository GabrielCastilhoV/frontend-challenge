import { BooksProvider } from '@/contexts/BooksContexts';
import { GlobalStyle } from '@/styles/global-styles';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import { ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BooksProvider>
          <GlobalStyle />

          <ToastContainer
            transition={Flip}
            limit={1}
            theme="colored"
            autoClose={3000}
          />
          <Component {...pageProps} />
        </BooksProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
