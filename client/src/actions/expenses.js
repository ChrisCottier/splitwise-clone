import { apiUrl } from '../config'
import { EXPENSE_MODAL } from './modals'
import { USER_DEBTS } from './debts'

export const NEW_EXPENSE = 'NEW_EXPENSE'
export const USER_EXPENSES = 'USER_EXPENSES'

export const newExpense = (data) => async dispatch => {
  const { userId } = data
  const res = await fetch(`${apiUrl}/expenses`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    const newExpense = await res.json()
    dispatch({ type: NEW_EXPENSE, newExpense })
    dispatch({ type: EXPENSE_MODAL, display: "none" })

    //now update dashboard debts
    const res2 = await fetch(`${apiUrl}/debts/user/${userId}`)

    if (res2.ok) {
      const data2 = await res2.json();
      dispatch({ type: USER_DEBTS, data: data2 })
    }


  }
}

export const getExpenses = (userId) => async dispatch => {
  const res = await fetch(`${apiUrl}/expenses/user/${userId}`);

  if (res.ok) {
    const expenses = await res.json();
    dispatch({ type: USER_EXPENSES, expenses })
  }
}
