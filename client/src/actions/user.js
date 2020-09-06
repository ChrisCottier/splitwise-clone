import { apiUrl } from '../config';
export const USER_ACTIVITY = "USER_ACTIVITY";

export const getRecentActivity = (userId) => async (dispatch) => {
    const res = await fetch(`${apiUrl}/activities/${userId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch({ type: USER_ACTIVITY, activity: data })
    } else {
        return Error('Request Failed');
    }
}
