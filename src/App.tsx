import React, { useEffect, useState } from "react";
import ApiService from "./apiService";
import { Table } from "./components/ui/table";
import TransactionPage from "./pages/transactionsPage";

function App() {
  const [transactionArray, setTransactionArray] = useState([]);
  const [skip, setSkip] = useState(0);
  const [filter, setFilter] = useState("ALL");
  useEffect(() => {
    const apiService = ApiService.getInstance();
    apiService.getTransactions(10, 200, filter).then((response: any) => {
      console.log(response);
      setTransactionArray(response.data.data);
    });
  }, []);
  return (
    <div className="font-inter text-[16px] bg-black flex justify-center h-screen items-center overflow-y-hidden">
      {transactionArray.length > 1 && (
        <TransactionPage transaction={transactionArray} />
      )}
    </div>
  );
}

export default App;
