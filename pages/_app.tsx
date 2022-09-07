import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { createGlobalStyle } from 'styled-components'
import { config as cfg, dom } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>La-Cle</title>
        <meta
          name="keywords"
          content=" An Indonesian guide in France will accompany your trip while providing interesting information and fun facts while visiting many exciting places such as museums, galleries, and other interesting buildings.
"
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
