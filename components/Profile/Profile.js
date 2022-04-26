import { Fragment, useEffect, useState } from "react";
import { useEthers, useLookupAddress } from "@usedapp/core";

import Button from "@/components/Button";
import AvatarPreview from "./AvatarPreview";
import useWalletConnect from "@/lib/hooks/useWalletConnect";
import { formatWalletAddr } from "@/lib/utils/wallet";

const DEFAULT_PROFILE_IMAGE = "/default_profile.png";

function Profile() {
  const [avatar, setAvatar] = useState(DEFAULT_PROFILE_IMAGE);
  const { account, deactivate, library } = useEthers();
  const ENSAdrr = useLookupAddress();
  const possibleAccountAddr = ENSAdrr || account;
  const formattedAccount = formatWalletAddr(possibleAccountAddr, ENSAdrr);
  const handleConnect = useWalletConnect();

  useEffect(() => {
    if (possibleAccountAddr) {
      library.getAvatar(possibleAccountAddr).then((newAvatar) => {
        setAvatar(newAvatar || DEFAULT_PROFILE_IMAGE);
      });
    }
  }, [possibleAccountAddr]);

  const handleDisconnect = () => deactivate();

  return (
    <div className="pt-4 w-full flex justify-end">
      {formattedAccount ? (
        <AvatarPreview
          formattedAccount={formattedAccount}
          avatarURL={avatar}
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
