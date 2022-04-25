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
    <Fragment>
      {formattedAccount ? (
        <AvatarPreview
          formattedAccount={formattedAccount}
          avatarURL={avatar}
          onDeactivate={handleDisconnect}
        />
      ) : (
        <Button onClick={handleConnect} isPrimary>
          CONNECT TO METAMASK
        </Button>
      )}
    </Fragment>
  );
}

export default Profile;
