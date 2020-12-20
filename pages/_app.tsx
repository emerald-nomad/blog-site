
import { DefaultLayout } from "components";
import "styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>
  );
}

export default MyApp
