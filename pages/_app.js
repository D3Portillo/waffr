import { getDefaultProvider } from "ethers";
import { Rinkeby, Mainnet, DAppProvider } from "@usedapp/core";

import Layout from "@/components/Layout";

import "../styles/globals.css";

/** @type { import("@usedapp/core").FullConfig } */
export const DAAP_CONFIG = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Rinkeby.chainId]: getDefaultProvider("rinkeby"),
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
