import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import AcceptedL2 from "../components/ui/accpetedL2";
import Status from "../components/ui/status";
import TypeDecoration from "../components/ui/type";
import { timeSince } from "../components/ui/lib/utils";

interface Transaction {
  _id: string;
  status: string;
  blockNumber: number;
  hash: string;
  type: string;
  timeStamp: string;
  __v: number;
}
interface Iprops {
  transaction: Transaction[];
}
function TransactionPage(props: { transaction: Transaction[] }) {
  return (
    <div className="bg-primary text-secondary rounded-md w-2/3 p-8 h-2/3 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-2"> Transactions </h1>
      <h2 className="text-l">A list of transactions on Starknet</h2>
      <div className="pb-8">
        <Table className=" text-slate-400 font-semibold overflow-y-hidden">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="hover:bg-primary ">
              <TableHead className="max-w-[100px]">STATUS</TableHead>
              <TableHead className="max-w-[100px] text-ellipsis">
                HASH
              </TableHead>
              <TableHead className="max-w-[100px]">TYPE</TableHead>
              <TableHead className="max-w-[100px]">BLOCK</TableHead>
              <TableHead className="max-w-[100px]">AGE</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {props.transaction.map((transaction: Transaction) => {
              return (
                <TableRow className="hover:bg-neutral-700">
                  <TableCell>
                    <Status status={transaction.status} />
                  </TableCell>
                  <TableCell>
                    <div className="w-[126px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {transaction.hash}
                    </div>
                  </TableCell>
                  <TableCell>
                    <TypeDecoration type={transaction.type} />
                  </TableCell>
                  <TableCell>{transaction.blockNumber}</TableCell>
                  <TableCell>{timeSince(transaction.timeStamp)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionPage;
