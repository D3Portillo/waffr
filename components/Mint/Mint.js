import { useEffect, useState } from "react";
import { Rinkeby, useEthers } from "@usedapp/core";
import { utils } from "ethers";

import toast from "react-hot-toast";

import { WFL } from "@/lib/constants/tokens";
import { useWFLMint } from "@/lib/hooks/useWFLContract";
import { addTokenToWallet } from "@/lib/utils/wallet";
import { isMining, isSuccess } from "@/lib/utils/ether";
import { preventDefaultEvent, withUnsignedInts } from "@/lib/utils/inputs";
import useEtherProvider from "@/lib/hooks/useEtherProvider";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import useCommonErrorHandler from "@/lib/hooks/useCommonErrorHandler";

import StatesEmptyWallet from "@/components/StatesEmptyWallet";
import StatesChangeNetwork from "@/components/StatesChangeNetwork";
import TransactionList from "@/components/TransactionList";
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
  const { send, state } = useWFLMint();
  useCommonErrorHandler(state);

  function handleMint() {
    if (!account) return handleConnect();
    if (!addrr) return toast.error("YOU MUST PROVIDE AN ADDRESS");
    if (!amount) return toast.error("VALUE CANNOT BE ZERO");
    addTokenToWallet(WFL);
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
        <CardTitle withToken={WFL.address} withAccountInfo>
          TOKEN MINT
        </CardTitle>
        <Input
          required
          value={addrr}
          onChange={(addrr) => setAddrr(addrr.trim())}
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
          withArrowIcon
          onClick={handleMint}
          className="bg-purple-500 py-6 text-xl opacity-90"
        >
          {account ? "MINT TOKENS" : "CONNECT & MINT"}
        </Button>
      </Card>
    </form>
  );
}

function Mint() {
  const etherProvider = useEtherProvider();
  const { chainId } = useEthers();
  const userInRinkeby = etherProvider && chainId === Rinkeby.chainId;

  return (
    <div className="pt-16">
      {etherProvider == null ? (
        <StatesEmptyWallet />
      ) : userInRinkeby ? (
        <MintWall />
      ) : (
        <StatesChangeNetwork />
      )}
      <TransactionList />
    </div>
  );
}

export default Mint;
