import { apiUrl } from "../config";
import { EXPENSE_DATA } from "./expenses";

export const postComment = (data) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/comments`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const comment = await res.json();
    const expenseId = comment.expense_id;

    const res2 = await fetch(`${apiUrl}/expenses/${expenseId}`);

    if (res2.ok) {
      const data = await res2.json();

      dispatch({ type: EXPENSE_DATA, data });
    }
  }
};
