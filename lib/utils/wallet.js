import { getWaffrState, setWaffrState } from "./waffr";

const MAX_ENS_ADDR_SIZE = 6;

/**
 * @param { string } addr
 * @param { boolean } isENSAddr
 * @returns { string } A string address or void("")
 */
export const formatWalletAddr = (addr, isENSAddr) => {
  if (!(addr && addr.substring)) return "";
  if (isENSAddr) return addr.substring(0, MAX_ENS_ADDR_SIZE);
  return `${addr.substr(0, 5)}..${addr.substr(-2, 2)}`;
};

/**
 * @param { import("../constants/tokens").WFRToken } _
 */
export const addTokenToWallet = ({ address, symbol, decimals, image }) => {
  if (getWaffrState().userAddedWFL) return;
  window.ethereum &&
    window.ethereum
      .request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address,
            symbol,
            decimals,
            image,
          },
        },
      })
      .then((success) => {
        if (success) {
          setWaffrState(() => ({ userAddedWFL: true }));
        }
      })
      .catch(console.error);
};

/**
 * Tries to append a network to MetaMask config
 * @param { Object } net
 * @param { string } net.chainId A hex base id, 0x1 Mainnet, 0x4 Rinkeby
 * @param { string } net.rpcUrl
 */
export const changeOrAppendNetwork = async ({ chainId, rpcUrl }) => {
  if (!window.ethereum) return;
  try {
    // First we try to switch network
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (error) {
    // Indicates that the chain has not been added to MetaMask
    // and we try to append it. NOTE: Some testnets like rinkeby won't
    // fall here since they're in Metamask config already.
    if (error.code === 4902) {
      try {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              rpcUrl,
            },
          ],
        });
      } catch (_) {}
    }
  }
};
