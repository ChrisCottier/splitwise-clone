import { apiUrl } from '../config'
export const FRIENDS_LIST = "FRIENDS_LIST"
export const GET_MATCHING_USERS = "GET_MATCHING_USERS"
export const CLEAR_MATCHES = "CLEAR MATCHES"
export const ADD_FRIEND = "ADD_FRIEND"

export const getFriends = (userId) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/friends/${userId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch({ type: FRIENDS_LIST, friends: data })
  }
}

export const getMatchingUsers = (userId, query) => async dispatch => {
  const res = await fetch(`${apiUrl}/users/query/${userId}/${query}`)

  if (res.ok) {
    const data = await res.json()
    dispatch({ type: GET_MATCHING_USERS, data })
  }

}

export const addFriend = (userId, friendId) => async dispatch => {
  const res = await fetch(`${apiUrl}/friends/${userId}/${friendId}`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, friendId }),
  })

  if (res.ok) {
    const newFriend = await res.json();
    dispatch({ type: ADD_FRIEND, newFriend })
  }
}
