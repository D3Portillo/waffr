import { changeOrAppendNetwork } from "@/lib/utils/wallet";

import useWalletConnect from "@/lib/hooks/useWalletConnect";
import useCommonErrorHandler from "@/lib/hooks/useCommonErrorHandler";
import Button from "@/components/Button";

const RINKEBY_HEX = "0x4";
function appendNetwork() {
  // Change to Rinkeby
  // Note: useEthers hook from dApps was failing so made
  // my own implementation following this:
  // https://stackoverflow.com/questions/68252365/how-to-trigger-change-blockchain-network-request-on-metamask
  changeOrAppendNetwork({
    chainId: RINKEBY_HEX,
    rpcUrl: "https://rinkeby.infura.io/v3/",
  });
}

// TODO: Reusable network change and not just Rinkeby
function StatesChangeNetwork() {
  const connectToWallet = useWalletConnect();
  useCommonErrorHandler();
  const handleChangeNetwork = () => {
    const chainId = window.ethereum && window.ethereum.chainId;
    if (RINKEBY_HEX == chainId) {
      connectToWallet();
    } else appendNetwork();
  };
  return (
    <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold">NETWORK CHANGE REQUIRED</h2>

      <p className="text-lg text-zinc-500">
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://metamask.io/download/"
        >
          Please change to Rinkeby Network
        </a>{" "}
        to use this service.
        <br />
        WLF minting is just available in the Rinkeby testnet, which is a wide
        popular Testing network(testnet). You can read more about this networks{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d"
        >
          in this post.
        </a>
      </p>

      <div className="pt-2" />

      <Button
        onClick={handleChangeNetwork}
        withArrowIcon
        className="bg-purple-500 py-6 text-xl opacity-90"
      >
        CHANGE NETWORK
      </Button>
    </div>
  );
}

export default StatesChangeNetwork;
