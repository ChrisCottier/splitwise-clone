import { apiUrl } from '../config'

export const USER_DEBTS = 'USER_DEBTS'
export const CLEAR_DEBT_INFO = 'CLEAR_DEBT_INFO'
export const UPDATE_DEBTS = 'UPDATE_DEBTS'
export const FAILED_PAYMENT = 'FAILED_PAYMENT'

export const getUserDebts = (userId) => async dispatch => {
  const res = await fetch(`${apiUrl}/debts/user/${userId}`)

  if (res.ok) {
    const data = await res.json();
    // const {iOwe, iAmOwed, totalIamOwed, totalIOwe, netOwed} = data;
    dispatch({ type: USER_DEBTS, data: data })
  }
}

export const payDebt = (data) => async dispatch => {
  const { userId, debtId, payAmount } = data;
  const res = await fetch(`${apiUrl}/debts/${debtId}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payAmount),
  })

  if (res.ok) {
    const data = await res.json();
    const { success } = data;
    if (success) {
      const { updated_debts, transaction } = data;
      dispatch({ type: UPDATE_DEBTS, updatedDebts: updated_debts, transaction })
    } else {
      const { errors } = data;
      dispatch({ type: FAILED_PAYMENT, errors })
    }
  }
}
