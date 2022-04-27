import { getWaffrState } from "./waffr";

export const withFormattedBalance = (__desiredEther) => {
  const state = getWaffrState();
  const userBalance = state.accountBalance || 0;
  const desiredEther = __desiredEther.trim();
  if (desiredEther == "." && userBalance > 0) return "0.";
  if (isFinite(desiredEther) && desiredEther <= userBalance) {
    return desiredEther;
  }
  return desiredEther.replace(/.$/, "");
};

export const withUnsignedInts = (__desiredEther) => {
  const desiredEther = __desiredEther.trim();
  if (isFinite(desiredEther)) {
    return desiredEther.replace(".", "");
  }
  return desiredEther.replace(/.$/, "");
};

export const preventDefaultEvent = (e) => e.preventDefault();
