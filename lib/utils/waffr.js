const LOCA_STORAGE_KEY_NAME = "WaffrState";
/**
 * @typedef WAFFR
 * @type { Object }
 * @property { string } accountBalance
 * @property { boolean } userAddedWFL
 */
/**
 * @returns { WAFFR }
 */
export const getWaffrState = () => {
  if (typeof window.waffrState == "undefined") {
    const storageState = localStorage.getItem(LOCA_STORAGE_KEY_NAME) || "{}";
    window.waffrState = {
      accountBalance: 0,
      userAddedWFL: false,
      ...JSON.parse(storageState),
    };
  }
  return window.waffrState;
};

/**
 * @callback WAFFR_setState
 * @param { WAFFR } currentConfig
 * @returns { WAFFR }
 */

/**
 * @param { WAFFR_setState } updateState
 * @returns { WAFFR }
 */
export const setWaffrState = (updateState) => {
  const curState = getWaffrState();
  const newState = { ...curState, ...updateState(curState) };
  localStorage.setItem(LOCA_STORAGE_KEY_NAME, JSON.stringify(newState));
  return (window.waffrState = newState);
};
