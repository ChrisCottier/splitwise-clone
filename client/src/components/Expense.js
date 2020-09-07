import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "./PageLayout";
import { ExpenseHeader } from "./Dashboard";
import {
  getExpenses,
  getExpenseData,
  CLEAR_EXPENSE_DATA,
} from "../actions/expenses";
import { dateTimeObj } from "../utils";
import "./styles/expense.css";

const ExpenseDisplay = (props) => {
  const dispatch = useDispatch();
  const [expenseUpdated, setExpenseUpdated] = useState(false);

  const { expense } = useSelector((state) => state.expenses);
  const { expenseId } = props;

  useEffect(() => {
    if (expenseUpdated) return;
    dispatch(getExpenseData(expenseId));
    setExpenseUpdated(true);
  });

  if (!expense || !expenseUpdated) return null;
  const { expense: theExpense, comments, debts } = expense;
  const dateTime = dateTimeObj(theExpense.created_at);
  return (
    <div className="expense-display">
      <div className="expense-header">
        <i className="fas fa-file-invoice-dollar fa-3x"></i>
        <div>
          <div>{theExpense.title}</div>
          <div>{`$${theExpense.amount}`}</div>
          <div>{`Added by ${theExpense.creator.name} on ${dateTime.month} ${dateTime.dayOfMonth}, ${dateTime.year}`}</div>
        </div>
      </div>
      <div id="expense-display-body" className="columns">
        <div className="column is-half">debts...</div>
        <div className="column is-half">notes and comments...</div>
      </div>
    </div>
  );
};

const ExpenseTile = (props) => {
  const { expense, viewExpense, setViewExpense } = props;
  const dateTime = dateTimeObj(expense.created_at);

  const setView = () => {
    if (viewExpense !== expense.id) {
      setViewExpense(expense.id);
    } else {
      setViewExpense(null);
    }
  };

  const view = viewExpense === expense.id;

  return (
    <>
      <div className="expense-tile" onClick={setView}>
        <div className="expense-date">
          <div>{dateTime.month}</div>
          <div className="day-of-month">{dateTime.dayOfMonth}</div>
        </div>
        <i className="fas fa-file-invoice-dollar fa-2x"></i>
        <div className="expense-title">{expense.title}</div>
        <div className="expense-tile-stats">
          <div className="expense-tile-lender">{`${expense.creator.name} lent`}</div>
          <div className="expense-tile-amount">{expense.amount}</div>
        </div>
      </div>
      {view ? (
        <ExpenseDisplay
          expenseId={expense.id}
          viewExpense={viewExpense}
        ></ExpenseDisplay>
      ) : (
        <></>
      )}
    </>
  );
};

const ExpensesCenter = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { expenses } = useSelector((state) => state.expenses);

  const [expensesUpdated, setExpensesUpdated] = useState(null);
  const [viewExpense, setViewExpense] = useState(false);

  useEffect(() => {
    if (!userId || expensesUpdated) return;
    dispatch(getExpenses(userId));
    setExpensesUpdated(true);
  }, []);

  if (!expensesUpdated || !expenses) return null;
  return (
    <>
      <ExpenseHeader title={"All Expenses"}></ExpenseHeader>
      <div className="expenses-container">
        {expenses.map((expense) => {
          return (
            <ExpenseTile
              key={expense.id}
              expense={expense}
              viewExpense={viewExpense}
              setViewExpense={setViewExpense}
            ></ExpenseTile>
          );
        })}
      </div>
    </>
  );
};

const Expenses = () => {
  // return <div>hi</div>
  return <PageLayout center={<ExpensesCenter></ExpensesCenter>}></PageLayout>;
};

export default Expenses;
