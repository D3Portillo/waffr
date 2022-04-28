import { Mainnet, Rinkeby, useEthers } from "@usedapp/core";

import { useCallback } from "react";

function useGetTxExplorer() {
  const { chainId, account } = useEthers();
  const getTxURL = useCallback(
    (/** @type {string} Tx Hash*/ hash) => {
      const getExplorerTransactionLink =
        Rinkeby.chainId === chainId
          ? Rinkeby.getExplorerTransactionLink
          : Mainnet.getExplorerTransactionLink;
      return getExplorerTransactionLink(hash);
    },
    [chainId, account]
  );

  return getTxURL;
}

export default useGetTxExplorer;
