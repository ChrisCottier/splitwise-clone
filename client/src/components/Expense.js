import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "./PageLayout";
import { ExpenseHeader } from "./Dashboard";
import {
  getExpenses,
  getExpenseData,
  CLEAR_EXPENSE_DATA,
} from "../actions/expenses";
import { dateTimeObj, splitAmount, getMonth } from "../utils";
import "./styles/expense.css";
import { Comment, Debt } from "./sub-components/Comment";
import { TextAreaInput } from "./sub-components/Form-Inputs";
import { postComment } from "../actions/comments";

const ExpenseDisplay = (props) => {
  const dispatch = useDispatch();
  const [expenseUpdated, setExpenseUpdated] = useState(false);
  const [comment, setComment] = useState("");
  const { expense } = useSelector((state) => state.expenses);
  const { userId } = useSelector((state) => state.auth);
  const { expenseId } = props;

  useEffect(() => {
    if (expenseUpdated) return;
    dispatch(getExpenseData(expenseId));
    setExpenseUpdated(true);
  });

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      postComment({
        expenseId: expense.expense.id,
        userId,
        comment,
      })
    );
    setComment("");
  };

  if (!expense || !expenseUpdated) return null;
  const { expense: theExpense, comments, debts } = expense;
  const dateTime = dateTimeObj(theExpense.created_at);
  // const messages = comments.map((comment)=> comment.message)
  const commentComponent = comments.map((message) => (
    <Comment key={message.id} message={message} />
  ));
  const debtComponents = debts.map((debt) => (
    <Debt key={debt.id} debt={debt} />
  ));
  console.log(debts);
  return (
    <div id="expense-display" className="expense-display">
      <div className="expense-header">
        <i className="fas fa-file-invoice-dollar fa-3x"></i>
        <div>
          <div className="expense-header-title">{theExpense.title}</div>
          <div className="expense-header-amount">{`$${theExpense.amount}`}</div>
          <div className="expense-header-creator">{`Added by ${theExpense.creator.name} on ${dateTime.month} ${dateTime.dayOfMonth}, ${dateTime.year}`}</div>
        </div>
      </div>
      <div id="expense-display-body" className="columns">
        <div className="column is-half">{debtComponents}</div>{" "}
        {/*The users involved with the transaction go here*/}
        {/* we will take debt.lender.name paid debt.expense.amount */}
        <div className="column is-half">
          {commentComponent}
          <form onSubmit={handleSubmit}>
            <TextAreaInput
              placeHolder={"Write your comment here"}
              value={comment}
              handleChange={handleChange}
              require={true}
              name={"comment"}
              label={"Leave A Comment:"}
            ></TextAreaInput>
            <button type="submit" className="button is-primary">
              Submit
            </button>
          </form>
        </div>
        {/*The users involved with the transaction go here*/}
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
      <span id="hoverArea" className="expense">
        <div className="expense-tile" onClick={setView}>
          <div className="expense-tile-left">
            <div className="expense-date">
              <div className="month">{dateTime.month}</div>
              <div className="day">{dateTime.dayOfMonth}</div>
            </div>
            <i className="fas fa-file-invoice-dollar fa-2x"></i>
            <div className="expense-title">{expense.title}</div>
          </div>
          <div className="expense-tile-right">
            <div className="expense-tile-stats">
              <div className="expense-left">
                <div className="expense-tile-lender">
                  {expense.creator.name} paid
                </div>
                <div className="expense-tile-amount"> ${expense.amount}</div>
              </div>
              <div className="expense-right">
                <div className="expense-tile-lender">
                  {expense.creator.name} lent {}
                </div>
                <div id="dark" className="expense-tile-amount">
                  {" "}
                  ${splitAmount(expense.amount)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
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
  const months = expenses.map((amount) => getMonth(amount.created_at));
  const currentMonth = months.shift();

  useEffect(() => {
    if (!userId || expensesUpdated) return;
    dispatch(getExpenses(userId));
    setExpensesUpdated(true);
  }, []);

  if (!expensesUpdated || !expenses) return null;
  return (
    <>
      <ExpenseHeader title={"All expenses"}></ExpenseHeader>
      <div className="month-holder">{currentMonth}</div>
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
