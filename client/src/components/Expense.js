import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import PageLayout from './PageLayout'
import { ExpenseHeader } from './Dashboard'
import { getExpenses } from '../actions/expenses'
import { dateTimeObj } from '../utils'


const ExpenseTile = (props) => {
  const { expense } = props;
  const dateTime = dateTimeObj(expense.created_at)
  return (
    <div className="expense-tile">
      <div className="expense-date">
        <div>{dateTime.month}</div>
        <div>{dateTime.dayOfMonth}</div>
      </div>
      <title>{expense.title}</title>
    </div>
  )
}

const ExpensesCenter = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth)
  const { expenses } = useSelector(state => state.expenses)
  const { debts } = useSelector(state => state.debts)

  const [expensesUpdated, setExpensesUpdated] = useState(false)

  useEffect(() => {
    if (!userId || expensesUpdated) return;
    dispatch(getExpenses(userId))
    setExpensesUpdated(true)

  }, [])

  if (!expensesUpdated || !expenses) return null;
  return (
    <div className="expenses-container">
      {expenses.map(expense => {
        return (
          <ExpenseTile expense={expense}></ExpenseTile>
        )
      })}
    </div>
  )
}

const Expenses = () => {
  // return <div>hi</div>
  return (
    <PageLayout center={<ExpensesCenter></ExpensesCenter>}></PageLayout>
  )
}

export default Expenses;
