import { useEffect } from "react";
import { useEtherBalance, useEthers, useLookupAddress } from "@usedapp/core";

import useWalletConnect from "@/lib/hooks/useWalletConnect";
import { setWaffrState } from "@/lib/utils/waffr";
import { formatWalletAddr } from "@/lib/utils/wallet";
import { localizeEthBalance } from "@/lib/utils/ether";

import Button from "@/components/Button";
import AvatarPreview from "./AvatarPreview";


function Profile() {
  const { account, deactivate } = useEthers();
  const balance = useEtherBalance(account);
  const ENSAdrr = useLookupAddress();
  const possibleAccountAddr = ENSAdrr || account;
  const formattedAccount = formatWalletAddr(possibleAccountAddr, ENSAdrr);
  const handleConnect = useWalletConnect();

  useEffect(() => {
    setWaffrState(() => ({
      accountBalance: localizeEthBalance(balance),
    }));
  }, [balance]);

  const handleDisconnect = () => deactivate();

  return (
    <div className="pt-4 lg:pt-0 w-full flex justify-end">
      {formattedAccount ? (
        <AvatarPreview
          account={possibleAccountAddr}
          formattedAccount={formattedAccount}
          onDeactivate={handleDisconnect}
        />
      ) : (
        <Button onClick={handleConnect} className="bg-zinc-900 h-16 space-x-6">
          <span>CONNECT WALLET</span>
          <span style={{ fontSize: "125%" }}>🦊</span>
        </Button>
      )}
    </div>
  );
}

export default Profile;
