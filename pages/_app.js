import { getDefaultProvider } from "ethers";
import { Mainnet, DAppProvider } from "@usedapp/core";

import Layout from "@/components/Layout";

import "../styles/globals.css";

export const DAAP_CONFIG = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

function App({ Component, pageProps }) {
  return (
    <DAppProvider config={DAAP_CONFIG}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  );
}

export default App;
