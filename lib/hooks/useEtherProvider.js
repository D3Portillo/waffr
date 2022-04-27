import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const CHAIN_CHANGED_EVENT = "chainChanged";
function reloadOnNetChange() {
  window.location.reload();
}

const useEtherProvider = () => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function handleProvider() {
      const metaProvider = await detectEthereumProvider({
        mustBeMetaMask: true,
      });
      if (metaProvider) {
        metaProvider.on(CHAIN_CHANGED_EVENT, reloadOnNetChange);
        setProvider(metaProvider);
      }
    }
    handleProvider();
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(CHAIN_CHANGED_EVENT, reloadOnNetChange);
      }
    };
  }, []);

  return provider;
};

export default useEtherProvider;
