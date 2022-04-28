import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";

import WaffleAbi from "@/contracts/abis/waffle";
import { WFL } from "@/lib/constants/tokens";

const waffInterface = new utils.Interface(WaffleAbi);
const waffContractAddress = WFL.address;
const contract = new Contract(waffContractAddress, waffInterface);

/**
 * @param { string } functionName
 */
const useWFLContract = (functionName) =>
  useContractFunction(contract, functionName, {});

export const useWFLMint = () => useWFLContract("mint");

export default useWFLContract;
