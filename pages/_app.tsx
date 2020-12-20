import Head from "next/head";
import { DefaultLayout } from "components";
import "styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"></link>
        <title>JT's Digital Garden</title>
      </Head>
      <Component {...pageProps} />
      </DefaultLayout>
  );
}

export default MyApp
