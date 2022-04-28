import { Fragment, useMemo } from "react";
import { useTransactions } from "@usedapp/core";

import { RiLoader4Line } from "react-icons/ri";

import useGetTxExplorer from "@/lib/hooks/useGetTxExplorer";
import Button from "@/components/Button";
import CardTitle from "@/components/CardTitle";

function LoadingState() {
  const { transactions } = useTransactions();
  const getTxExplorer = useGetTxExplorer();
  const hash = useMemo(() => {
    if (transactions && transactions[0]) {
      return transactions[0].transaction.hash;
    }
    return "";
  }, [transactions]);
  return (
    <Fragment>
      <CardTitle>
        <div className="relative pr-2">
          <RiLoader4Line className="animate-spin" />
        </div>
        <div>WORKING {"—"} MINING.</div>
      </CardTitle>
      <div className="h-2"></div>

      <Button
        withArrowIcon
        isLink
        isExternal
        href={getTxExplorer(hash)}
        className="w-full bg-purple-500 py-6 text-xl opacity-90"
      >
        VIEW TRANSACTION
      </Button>
    </Fragment>
  );
}

function Card({ children, isLoading }) {
  return (
    <div className="bg-zinc-900 flex space-y-4 flex-col max-w-3xl mx-auto p-8 rounded-lg">
      {isLoading ? <LoadingState /> : children}
    </div>
  );
}

Card.defaultProps = {
  children: null,
  isLoading: false,
};

export default Card;
