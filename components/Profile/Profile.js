import { Fragment, useEffect, useState } from "react";
import { useEthers, useLookupAddress } from "@usedapp/core";

import Button from "@/components/Button";
import AvatarPreview from "./AvatarPreview";
import { formatWalletAddr } from "@/lib/utils/wallet";

const DEFAULT_PROFILE_IMAGE = "/default_profile.png";

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const { activateBrowserWallet, account, deactivate, library } = useEthers();
  const hasENS = useLookupAddress();
  const possibleAccountAddr = hasENS || account;
  const formattedAccount = formatWalletAddr(possibleAccountAddr, hasENS);
  useEffect(() => {
    if (account) {
      library.getAvatar(possibleAccountAddr).then(() => {
        setAvatar(avatar || DEFAULT_PROFILE_IMAGE);
      });
    }
  }, [possibleAccountAddr]);
  return (
    <Fragment>
      {formattedAccount ? (
        <AvatarPreview
          formattedAccount={formattedAccount}
          account={account}
          avatarURL={avatar}
          onDeactivate={() => deactivate()}
        />
      ) : (
        <Button onClick={() => activateBrowserWallet()} isPrimary>
          CONNECT TO METAMASK
        </Button>
      )}
    </Fragment>
  );
}

export default Profile;
