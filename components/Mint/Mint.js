import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { utils } from "ethers";

import { IoArrowForward } from "react-icons/io5";
import toast from "react-hot-toast";

import { useMint } from "@/lib/hooks/useContract";
import { addTokenToWallet } from "@/lib/utils/wallet";
import { isMining, isSuccess } from "@/lib/utils/ether";
import { preventDefaultEvent, withUnsignedInts } from "@/lib/utils/inputs";
import useEtherProvider from "@/lib/hooks/useEtherProvider";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import useCommonErrorHandler from "@/lib/hooks/useCommonErrorHandler";

import StatesEmptyWallet from "@/components/StatesEmptyWallet";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";

function MintWall() {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [addrr, setAddrr] = useState("");
  const handleConnect = useWalletConnect();
  const { account } = useEthers();
  const { send, state } = useMint();
  useCommonErrorHandler(state);

  function handleMint() {
    if (!account) return handleConnect();
    if (!addrr) return toast.error("YOU MUST PROVIDE AN ADDRESS");
    if (!amount) return toast.error("VALUE CANNOT BE ZERO");
    addTokenToWallet();
    send(addrr, utils.parseEther(amount));
  }

  useEffect(() => {
    setIsLoading(false);
    if (isMining(state)) {
      setAddrr("");
      setAmount("");
      setIsLoading(true);
    }
    if (isSuccess(state)) {
      toast("TOKENS MINTED SUCCESSFULLY");
    }
  }, [state]);

  return (
    <form onSubmit={preventDefaultEvent}>
      <Card isLoading={isLoading}>
        <CardTitle
          withToken="0x9ed2135850920ba65566d010b947b49e88651675"
          withAccountInfo
        >
          WFL TOKEN MINT
        </CardTitle>
        <Input
          required
          value={addrr}
          onChange={setAddrr}
          label="DESTINATION ADDRESS"
          placeholder="0xADRR"
        />
        <Input
          required
          value={amount}
          onChange={(amount) => setAmount(withUnsignedInts(amount, false))}
          label="AMOUNT TO MINT"
          placeholder="0"
        />
        <Button
          onClick={handleMint}
          className="bg-purple-500 py-6 text-xl opacity-90"
        >
          <div>{account ? "MINT TOKENS" : "CONNECT & MINT"}</div>
          <IoArrowForward className="text-white text-2xl" />
        </Button>
      </Card>
    </form>
  );
}

function Mint() {
  const etherProvider = useEtherProvider();
  return (
    <div className="pt-16">
      {etherProvider ? <MintWall /> : <StatesEmptyWallet />}
    </div>
  );
}

export default Mint;
