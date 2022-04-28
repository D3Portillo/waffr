import { useTransactions } from "@usedapp/core";
import { utils } from "ethers";

import { FiArrowUpRight } from "react-icons/fi";
import { relativeFormat } from "@/lib/utils/time";
import useGetTxExplorer from "@/lib/hooks/useGetTxExplorer";

function TransactionList() {
  const { transactions } = useTransactions();
  const getTxExplorer = useGetTxExplorer();
  if (transactions.length < 1 || !transactions) return null;
  return (
    <div className="max-w-3xl mx-auto flex-col space-y-4 mt-6 px-2">
      <div className="text-zinc-400 font-bold text-sm">
        LATEST 3 TRANSACTIONS
      </div>
      <div className="flex flex-col space-y-2">
        {transactions.slice(0, 3).map((transaction) => {
          return (
            <a
              key={transaction.transaction.hash}
              href={getTxExplorer(transaction.transaction.hash)}
              rel="noopener noreferrer"
              target="_blank"
              className="flex group text-sm justify-between border-b border-zinc-800 text-zinc-500 pb-2"
            >
              <div className="flex flex-col">
                <strong className="text-zinc-300">
                  {relativeFormat(transaction.submittedAt)}
                </strong>
                <div>
                  <strong>TO:</strong> {transaction.transaction.to}
                </div>
                <div>
                  <strong>VALUE:</strong>{" "}
                  {utils.formatEther(transaction.transaction.value)}
                </div>
              </div>
              <FiArrowUpRight className="text-2xl group-hover:text-white" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionList;
