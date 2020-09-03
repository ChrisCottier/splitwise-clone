import {apiUrl} from '../config'

export const NEW_EXPENSE='NEW_EXPENSE'

export const newExpense = (data) => async dispatch => {
  console.log(data)
  const res = await fetch(`${apiUrl}/expenses`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    const result = await res.json()
  }
}
