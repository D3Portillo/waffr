import { useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";

function Mint() {
  const [amount, setAmount] = useState("");
  const appendIfDigit = (possibleN) => {
    if (isFinite(possibleN)) {
      setAmount(possibleN.trim().replace(/\./g, ""));
    }
  };
  return (
    <Card>
      <Input label="DESTINATION ADDRESS" placeholder="0x0" />
      <Input
        value={amount}
        onChange={appendIfDigit}
        label="AMOUNT TO MINT"
        placeholder="0"
      />
      <Button className="bg-purple-500 py-6 text-xl opacity-90">
        MINT TOKENS
      </Button>
    </Card>
  );
}

export default Mint;
