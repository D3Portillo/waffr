import Image from "next/image";

import Button from "@/components/Button";
import metaMaskFoxImage from "@/assets/metamask-fox.svg";

function StatesEmptyWallet() {
  return (
    <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
      <h2 className="text-4xl">NO WALLET FOUND</h2>

      <p className="text-lg text-zinc-500">
        To use this service please{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://metamask.io/download/"
        >
          install MetaMask.
        </a>
        <br />
        MetaMask is a crypto wallet & gateway to blockchain apps Start exploring
        blockchain applications in seconds. Trusted by over 21 million users
        worldwide.
      </p>

      <div className="pt-2" />
      <a
        target="_blank"
        href="https://metamask.io/download/"
        rel="noopener noreferrer"
      >
        <Button className="bg-zinc-900 py-2 space-x-6">
          <div className="w-16 h-16">
            <Image layout="responsive" src={metaMaskFoxImage} />
          </div>
          <div>DOWNLOAD METAMASK</div>
        </Button>
      </a>
    </div>
  );
}

export default StatesEmptyWallet;
