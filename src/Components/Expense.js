import React, { useState } from "react";
// import "./App.css";
function Expense() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const handleExpense = (e, type) => {
    e.preventDefault();
    if (!amount) return;
    if (type === "Add") {
      setBalance(Number(balance) + Number(amount));
    } else {
      setBalance(Number(balance) - Number(amount));
    }
    setTransactions((prevValue) => [
      ...prevValue,
      {
        amount,
        type,
        date: new Date().toISOString(),
      },
    ]);
    setAmount("");
  };
  
  return (
    <div className="App"  style={ { alignItems: 'center', flexDirection: 'column' }}>
      <h1>Expense Tracker Basic</h1>
      <form>
        <h3>{`Balance : ${balance}`}</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button onClick={(e) => handleExpense(e, "Add")}>Add</button>
          <button  className="hey" onClick={(e) => handleExpense(e, "Remove")}>Remove</button>
          
        </div>
      </form>
      {transactions?.length ? (
        <ul>
          <h3>Transactions</h3>
          {transactions.map((transaction) => (
            <li>{`${transaction.date} - ${transaction.amount} - ${transaction.type}`}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default Expense;