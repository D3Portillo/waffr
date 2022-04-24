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
