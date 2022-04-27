import { getWaffrState } from "./waffr";

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

export const addTokenToWallet = () => {
  if (getWaffrState().userAddedWFL) return;
  const address = "0x9ed2135850920ba65566d010b947b49e88651675";
  const symbol = "WFL";
  const decimals = 18;
  const image = "https://getwaffle.io/img/logo.svg";

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
