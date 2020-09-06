import { apiUrl } from '../config';
export const USER_EXPENSES = "USER_EXPENSES";

export const getExpenses = (userId) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/expenses/${userId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch({ type: USER_EXPENSES, activity: data })
  } else {
    return Error('Request Failed');
  }
}

export default getExpenses;