import { useEffect } from 'react';
import firebase from '@services/firebase';
import Head from 'next/head';
import { ThemeContextProvider } from '@context/ThemeContext';
import '../styles/globals.css';

export default function MyApp(props: { Component: any; pageProps: any }) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles &&
      jssStyles.parentElement &&
      jssStyles.parentElement.removeChild(jssStyles);
    if (typeof window !== 'undefined' && !firebase.apps.length) {
      // console.log(clientCredentials);
      firebase.analytics();
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}
