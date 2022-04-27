import { Fragment } from "react";
import { useEtherBalance, useEthers } from "@usedapp/core";

import { localizeEthBalance } from "@/lib/utils/ether";

function CardTitle({ withAccountInfo, children }) {
  const { account } = useEthers();
  const balance = useEtherBalance(account);
  const userBalance = localizeEthBalance(balance);
  return (
    <div className="flex-col">
      <div className="text-4xl pb-2">
        <strong className="flex items-center">{children}</strong>
      </div>
      {withAccountInfo && (
        <Fragment>
          <div className="px-1 text-white text-opacity-30">
            <b>YOUR ADDRESS:</b> {account || "NO CONNECTION"}
          </div>
          <div className="px-1 text-white text-opacity-30">
            <b>BALANCE:</b> {userBalance} ETH
          </div>
        </Fragment>
      )}
    </div>
  );
}

CardTitle.defaultProps = {
  withAccountInfo: false,
  children: null,
};

export default CardTitle;
