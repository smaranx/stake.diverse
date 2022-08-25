import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import ModalsContainer from "@/components/modal-views/container";
import DrawersContainer from "@/components/drawer-views/container";
import SettingsButton from "@/components/settings/settings-button";
import SettingsDrawer from "@/components/settings/settings-drawer";
import { WalletProvider } from "@/lib/hooks/use-connect";

// base css file
import "swiper/css";
import "@/assets/css/scrollbar.css";
import "@/assets/css/globals.css";
import "@/assets/css/range-slider.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <WalletProvider>
          {getLayout(<Component {...pageProps} />)}
          <SettingsButton />
          <SettingsDrawer />
          <ModalsContainer />
          <DrawersContainer />
        </WalletProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
