/**
 * @typedef WAFFR
 * @type { Object }
 * @property { string } accountBalance
 */
/**
 * @returns { WAFFR }
 */
export const getWaffrState = () => {
  if (typeof window.waffrState == "undefined") {
    window.waffrState = {};
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
  return (window.waffrState = newState);
};
