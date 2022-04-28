import { Fragment, useMemo } from "react";
import { useSendTransaction } from "@usedapp/core";

import { RiLoader4Line } from "react-icons/ri";

import Button from "@/components/Button";
import CardTitle from "@/components/CardTitle";

function LoadingState() {
  const { state } = useSendTransaction();

  const hash = useMemo(() => {
    if (state && state.transaction) {
      return state.transaction.hash;
    }
    return "";
  }, [state]);
  return (
    <Fragment>
      <CardTitle>
        <div className="relative pr-2">
          <RiLoader4Line className="animate-spin" />
        </div>
        <div>WORKING {"—"} MINING.</div>
      </CardTitle>
      <div className="h-2"></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full relative"
        href={`https://etherscan.io/tx/${hash}`}
      >
        <Button
          withArrowIcon
          className="w-full bg-purple-500 py-6 text-xl opacity-90 pointer-events-none"
        >
          VIEW TRANSACTION
        </Button>
      </a>
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
