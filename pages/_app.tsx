import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { createGlobalStyle } from 'styled-components'
// import { config as cfg, dom } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>La-Cle</title>
        <meta
          name="keywords"
          content="Barunastra derived from two words, Varuna which means the God of the sea according the belief in Hinduism, and Astra, which means weapon.
So, the meaning of Barunastra is The Weapons God of the sea."
        ></meta>
      </Head>
      <div className="bg-primary">
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default MyApp;
