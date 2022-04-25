import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const useEtherProvider = () => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function handleProvider() {
      const etherProvider = await detectEthereumProvider({
        mustBeMetaMask: true,
      });
      if (etherProvider) {
        etherProvider.on("chainChanged", () => {
          window.location.reload();
        });
        setProvider(etherProvider);
      }
    }
    handleProvider();
  }, []);

  return provider;
};

export default useEtherProvider;
