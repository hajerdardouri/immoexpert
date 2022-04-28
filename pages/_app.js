import "../styles/globals.css";
import { atom, useAtom } from "jotai";
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(MyApp);
