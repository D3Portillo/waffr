import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

import { IoArrowForward } from "react-icons/io5";
import toast from "react-hot-toast";

import useEtherProvider from "@/lib/hooks/useEtherProvider";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import { withFormattedBalance, preventDefaultEvent } from "@/lib/utils/inputs";

import StatesEmptyWallet from "@/components/StatesEmptyWallet";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";

function MintWall() {
  const [amount, setAmount] = useState("");
  const [addrr, setAddrr] = useState("");
  const handleConnect = useWalletConnect();
  const { account } = useEthers();
  function handleSend() {
    if (!account) return handleConnect();
    if (!addrr) return toast.error("YOU MUST PROVIDE AN ADDRESS");
    if (!amount) return toast.error("VALUE CANNOT BE ZERO");
    // minting here
  }

  return (
    <form onSubmit={preventDefaultEvent}>
      <Card>
        <CardTitle withAccountInfo>TOKEN MINTING</CardTitle>
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
          onChange={(amount) => setAmount(withFormattedBalance(amount))}
          label="AMOUNT TO MINT"
          placeholder="0.00"
        />
        <Button
          onClick={handleSend}
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
