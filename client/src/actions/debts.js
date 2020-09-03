import {apiUrl} from '../config'

export const USER_DEBTS='USER_DEBTS'
export const CLEAR_DEBT_INFO='CLEAR_DEBT_INFO'

export const getUserDebts = (userId) => async dispatch => {
  const res = await fetch(`${apiUrl}/debts/user/${userId}`)

  if (res.ok) {
    const data = await res.json();
    // const {iOwe, iAmOwed, totalIamOwed, totalIOwe, netOwed} = data;
    console.log(data)
    dispatch({type: USER_DEBTS,  data: data})
  }
}
