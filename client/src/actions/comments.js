import { apiUrl } from "../config";

export const POST_COMMENT = "POST_COMMENT";

const postComment = (userId, comment) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/`);
};
