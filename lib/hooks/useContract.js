import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";

import WaffleAbi from "@/contracts/abis/waffle";

const waffInterface = new utils.Interface(WaffleAbi);
const waffContractAddress = "0x9ED2135850920BA65566D010B947b49E88651675";
const contract = new Contract(waffContractAddress, waffInterface);

/**
 * @param { string } functionName
 */
const useContract = (functionName) =>
  useContractFunction(contract, functionName, {});

export const useMint = () => useContract("mint");

export default useContract;
