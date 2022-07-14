import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm === false && (
        <button onClick={addNewExpenseHandler}> Add New Expense</button>
      )}
      {showForm === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
