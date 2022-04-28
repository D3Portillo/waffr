import React, { Fragment } from "react";
import {
  useEtherBalance,
  useEthers,
  useToken,
  useTokenBalance,
} from "@usedapp/core";

import { localizeEthBalance } from "@/lib/utils/ether";

const SafeSymbolRender = ({ token }) => {
  const state = useToken(token);
  return state && state.symbol;
};

function CardTitle({ withAccountInfo, children, withToken }) {
  const { account } = useEthers();
  const defaultBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(withToken, account);
  const balance = withToken ? tokenBalance : defaultBalance;
  const formatedBalance = localizeEthBalance(balance);
  const symbol =
    withToken && balance ? <SafeSymbolRender token={withToken} /> : "ETH";
  return (
    <div className="flex-col">
      <div className="text-4xl pb-2">
        <strong className="flex items-center">
          {withToken && symbol} {children}
        </strong>
      </div>
      {withAccountInfo && (
        <Fragment>
          <div className="px-1 text-white text-opacity-30">
            <b>YOUR ADDRESS:</b> {account || "NO CONNECTION"}
          </div>
          <div className="px-1 text-white text-opacity-30">
            <b>BALANCE:</b> {formatedBalance} {symbol}
          </div>
        </Fragment>
      )}
    </div>
  );
}

CardTitle.defaultProps = {
  withAccountInfo: false,
  withToken: false,
  children: null,
};

export default CardTitle;
