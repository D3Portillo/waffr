import { utils } from "ethers";

export const STATES_MINING = "Mining";
export const STATES_SUCCESS = "Success";
export const STATES_PENDING_SIGNATURE = "PendingSignature";
export const STATES_PENDING = "Pending";

export const localizeEthBalance = (balance) =>
  balance ? utils.formatEther(balance) : "0";

export const isMining = (state) => state && state.status == STATES_MINING;
export const isSuccess = (state) => state && state.status == STATES_SUCCESS;
export const isPending = (state) =>
  state && [STATES_PENDING_SIGNATURE, STATES_PENDING].includes(state.status);
