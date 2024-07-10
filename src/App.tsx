import React, { useEffect } from "react";
import ApiService from "./apiService";

function App() {
  useEffect(() => {
    const apiService = ApiService.getInstance();
    apiService.getTransactions(10, 1).then((response) => {
      console.log(response);
    });
  });
  return <div></div>;
}

export default App;
