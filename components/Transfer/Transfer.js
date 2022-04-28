import { useEffect, useState } from "react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";

import { IoArrowForward } from "react-icons/io5";
import toast from "react-hot-toast";

import useEtherProvider from "@/lib/hooks/useEtherProvider";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import useCommonErrorHandler from "@/lib/hooks/useCommonErrorHandler";
import { withFormattedBalance, preventDefaultEvent } from "@/lib/utils/inputs";
import { isMining, isSuccess } from "@/lib/utils/ether";

import StatesEmptyWallet from "@/components/StatesEmptyWallet";
import TransactionList from "@/components/TransactionList";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";

function TransferWall() {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [addrr, setAddrr] = useState("");
  const handleConnect = useWalletConnect();
  const { account } = useEthers();
  const { sendTransaction, state } = useSendTransaction();
  useCommonErrorHandler(state);

  function handleSend() {
    if (!account) return handleConnect();
    if (!addrr) return toast.error("YOU MUST PROVIDE AN ADDRESS");
    if (amount <= 0) return toast.error("VALUE CANNOT BE ZERO");
    sendTransaction({
      to: addrr,
      value: utils.parseEther(amount),
    });
  }

  useEffect(() => {
    setIsLoading(false);
    if (isMining(state)) {
      setAddrr("");
      setAmount("");
      setIsLoading(true);
    }
    if (isSuccess(state)) {
      toast("TOKENS SENT SUCCESSFULLY");
    }
  }, [state]);

  return (
    <form onSubmit={preventDefaultEvent}>
      <Card isLoading={isLoading}>
        <CardTitle withAccountInfo>TOKEN TRANSFER</CardTitle>
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
          onChange={(amount) => setAmount(withFormattedBalance(amount))}
          label="AMOUNT TO TRANSFER"
          placeholder="0.00"
        />
        <Button
          onClick={handleSend}
          className="bg-purple-500 py-6 text-xl opacity-90"
        >
          <div>{account ? "TRANSFER TOKENS" : "CONNECT & TRANSFER"}</div>
          <IoArrowForward className="text-white text-2xl" />
        </Button>
      </Card>
    </form>
  );
}

function Transfer() {
  const etherProvider = useEtherProvider();
  return (
    <div className="pt-16">
      {etherProvider ? <TransferWall /> : <StatesEmptyWallet />}
      <TransactionList />
    </div>
  );
}

export default Transfer;
