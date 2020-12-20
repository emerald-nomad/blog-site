import Head from "next/head";
import { DefaultLayout } from "components";
import "styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1db954" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="theme-color" content="#333333" />

        <title>JT's Digital Garden</title>

         {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="emerladnomad" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={`https://emeraldnomad.dev`} key="ogurl" />
        <meta property="og:image" content={`https://emeraldnomad.dev/images/garden.jpg`} key="ogimage" />
        <meta property="og:site_name" content="JT's Digital Garden" key="ogsitename" />
        <meta property="og:title" content="JT's Digital Garden" key="ogtitle" />
        <meta property="og:description" content="My personal garden where I document what I've been learning. From software developement to growing your own food, and anything else I happen to be learning at the time." key="ogdesc" />
      </Head>
      <Component {...pageProps} />
      </DefaultLayout>
  );
}

export default MyApp
