import { useEffect, useState } from "react";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";

import { IoArrowForward } from "react-icons/io5";
import toast from "react-hot-toast";

import useEtherProvider from "@/lib/hooks/useEtherProvider";
import StatesEmptyWallet from "@/components/StatesEmptyWallet";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";

function TransferWall() {
  const [amount, setAmount] = useState("");
  const [addrr, setAddrr] = useState("");
  const handleConnect = useWalletConnect();
  const { account } = useEthers();
  const { sendTransaction, state } = useSendTransaction();
  const balance = useEtherBalance(account);
  const userBalance = balance
    ? (utils.formatEther(balance) * 1).toFixed(4).replace(".0000", "")
    : 0;
  const appendIfDigit = (possibleN) => {
    if (/-/g.test(possibleN));
    else if (possibleN == ".") setAmount("0.");
    else if (isFinite(possibleN) && possibleN < userBalance) {
      setAmount(possibleN.trim());
    }
  };

  function handleSend() {
    if (!account) return handleConnect();
    if (!addrr) return toast.error("YOU MUST PROVIDE AN ADDRESS");
    if (!amount) return toast.error("VALUE CANNOT BE ZERO");
    sendTransaction({
      to: addrr,
      value: utils.parseEther(amount),
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card>
        <div className="flex-col">
          <div className="text-4xl pb-2">
            <b>YOUR WALLLET</b>
          </div>
          <div className="px-1 text-white text-opacity-30">
            <b>ADDRESS:</b> {account || "NO CONNECTION"}
          </div>
          <div className="px-1 text-white text-opacity-30">
            <b>BALANCE:</b> {userBalance} ETH
          </div>
        </div>
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
          onChange={appendIfDigit}
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
    </div>
  );
}

export default Transfer;
