import Head from "next/head";
import { DefaultLayout } from "components";
import "styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"></link>

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
