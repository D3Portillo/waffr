import { getDefaultProvider } from "ethers";
import { Rinkeby, DAppProvider } from "@usedapp/core";

import Layout from "@/components/Layout";

import "../styles/globals.css";

export const DAAP_CONFIG = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
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
