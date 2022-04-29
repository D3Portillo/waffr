import "@testing-library/jest-dom/extend-expect";
import { utils } from "ethers";

const mockReturnBigNumber = jest.fn().mockReturnValue(utils.parseEther("1"));
const mockReturnObj = jest.fn().mockReturnValue({});
export const mockUseDaap = {
  useEtherBalance: mockReturnBigNumber,
  useEthers: mockReturnObj,
  useToken: mockReturnObj,
  useTokenBalance: mockReturnBigNumber,
};

jest.mock("@usedapp/core", () => mockUseDaap);

/**
 * @typedef MOCKED_DAAP
 * @type { mockUseDaap }
*/