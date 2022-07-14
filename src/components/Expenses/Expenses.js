import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filterYear = (expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  };
  const filteredExpenses = props.items.filter(filterYear);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedValue={filteredYear}
          onExpenseFilterChange={expenseFilterChangeHandler}
        />
        {/* {filteredExpenses.length === 0?print : print } */}
        {/* {filteredExpenses.length === 0 && expensesContent}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}  />
      </Card>
    </div>
  );
};
export default Expenses;
