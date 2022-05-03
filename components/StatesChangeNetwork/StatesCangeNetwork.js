import { changeOrAppendNetwork } from "@/lib/utils/wallet";

import useWalletConnect from "@/lib/hooks/useWalletConnect";
import useCommonErrorHandler from "@/lib/hooks/useCommonErrorHandler";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

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
  const [windowChainId, setWindowChainId] = useState(null);
  const userInHexRinkeby = RINKEBY_HEX == windowChainId;
  useCommonErrorHandler();

  useEffect(() => {
    setWindowChainId(window.ethereum && window.ethereum.chainId);
  }, []);

  const handleChangeNetwork = () => {
    if (userInHexRinkeby) connectToWallet();
    else appendNetwork();
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
        {userInHexRinkeby ? "CONNECT WALLET" : "CHANGE NETWORK"}
      </Button>
    </div>
  );
}

export default StatesChangeNetwork;
