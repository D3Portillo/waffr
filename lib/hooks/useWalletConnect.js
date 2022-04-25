import { useCallback, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

import toast from "react-hot-toast";

import useEtherProvider from "@/lib/hooks/useEtherProvider";

const useWalletConnect = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [retries, setRetries] = useState(0);
  const { activateBrowserWallet, account } = useEthers();
  const etherProvider = useEtherProvider();
  const connect = useCallback(
    function connectToWallet() {
      if (retries > 4) return window.location.reload();
      // If user tries more than 5 times to re-connect without success
      // We reload because it might have a plugin error
      setRetries((n) => n + 1);
      if (etherProvider) {
        toast("TRYING TO CONNECT", {
          icon: "🔗",
        });
        activateBrowserWallet();
      } else toast.error("METAMASK WALLET NOT FOUND");
    },
    [retries, etherProvider]
  );

  useEffect(() => {
    if (account && !isFirstRender) {
      toast("CONNECTED TO METAMASK", {
        icon: "🦊",
      });
      setRetries(0);
    }
    setIsFirstRender(false);
  }, [account]);

  return connect;
};

export default useWalletConnect;
