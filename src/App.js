import React from "react";
import "./App.css";
import Balance from "./Balance/Balance";
import SpendingChart from "./SpendingChart/SpendingChart";
import data from "./data.json";

function App() {
  return (
    <main className="App">
      <Balance />
      <SpendingChart data = {data}/>
    </main>
  );
}

export default App;
