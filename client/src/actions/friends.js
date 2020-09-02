import {apiUrl} from '../config'
export const FRIENDS_LIST="FRIENDS_LIST"

export const getFriends = (userId) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/friends/${userId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch({type: FRIENDS_LIST, friends: data})
  }
}
