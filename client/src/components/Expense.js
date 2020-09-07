import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import PageLayout from './PageLayout'
import { ExpenseHeader } from './Dashboard'
import { getExpenses, getExpenseData, CLEAR_EXPENSE_DATA } from '../actions/expenses'
import { dateTimeObj } from '../utils'
import './styles/expense.css'


const ExpenseDisplay = (props) => {
  const dispatch = useDispatch()
  const [expenseUpdated, setExpenseUpdated] = useState(false)

  const { expense } = useSelector(state => state.expenses)
  const { expenseId } = props;

  useEffect(() => {
    if (expenseUpdated) return;
    dispatch(getExpenseData(expenseId))
    setExpenseUpdated(true)

  })

  if (!expense || !expenseUpdated) return null;
  return (
    <div className="expense-display">
      <div className="expense-header">
        <div>{expense.expense.title}</div>
      </div>
    </div>
  )
}

const ExpenseTile = (props) => {
  const { expense, viewExpense, setViewExpense } = props;
  const dateTime = dateTimeObj(expense.created_at);

  const setView = () => {
    if (viewExpense !== expense.id) {
      setViewExpense(expense.id)
    } else {
      setViewExpense(null)
    }
  }

  const view = viewExpense === expense.id


  return (
    <>
      <div className="expense-tile" onClick={setView}>
        <div className="expense-date">
          <div>{dateTime.month}</div>
          <div className="day-of-month">{dateTime.dayOfMonth}</div>
        </div>
        <i className="fas fa-file-invoice-dollar"></i>
        <div className="expense-title">{expense.title}</div>
        <div className="expense-tile-stats">
          <div className="expense-tile-lender">{`${expense.creator.name} lent`}</div>
          <div className="expense-tile-amount">{expense.amount}</div>
        </div>
      </div>
      {view
        ? <ExpenseDisplay
          expenseId={expense.id}
          viewExpense={viewExpense}
        ></ExpenseDisplay>
        : <></>}
    </>

  )
}

const ExpensesCenter = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth)
  const { expenses } = useSelector(state => state.expenses)

  const [expensesUpdated, setExpensesUpdated] = useState(null)
  const [viewExpense, setViewExpense] = useState(false)

  useEffect(() => {
    if (!userId || expensesUpdated) return;
    dispatch(getExpenses(userId))
    setExpensesUpdated(true)

  }, [])

  if (!expensesUpdated || !expenses) return null;
  return (
    <>
      <ExpenseHeader title={'All Expenses'}></ExpenseHeader>
      <div className="expenses-container">
        {expenses.map(expense => {
          return (
            <ExpenseTile
              key={expense.id}
              expense={expense}
              viewExpense={viewExpense}
              setViewExpense={setViewExpense}
            ></ExpenseTile>
          )
        })}
      </div>
    </>
  )
}

const Expenses = () => {
  // return <div>hi</div>
  return (
    <PageLayout center={<ExpensesCenter></ExpensesCenter>} right={<div>hi</div>}></PageLayout>
  )
}

export default Expenses;
