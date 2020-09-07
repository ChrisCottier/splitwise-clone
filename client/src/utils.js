export const dateTimeObj = (string) => {
  const splitted = string.split(' ');
  return {
    dayOfWeek: splitted[0].slice(0, splitted[0].length - 1),
    dayOfMonth: splitted[1],
    month: splitted[2].toUpperCase(),
    year: splitted[3],
    time: `${splitted[4].slice(0, 5)} GMT`
  }
}

export const splitAmount = (amount) => {
  let evenSplit = (parseFloat(amount) / 2).toFixed(2);
  return evenSplit;
}

export const getMonth = (created_at) => {
  const timeStamp = new Date(created_at);
  const date = new Intl.DateTimeFormat('en-US', { month: "long", year: "numeric" })
  return date.format(timeStamp)
  return date.format(timeStamp)
}
export const getCommentDate = (created_at) => {
  const timeStamp = new Date(created_at);
  const date = new Intl.DateTimeFormat('en-US', { weekday: "long", hour: 'numeric', minute: 'numeric', dayPeriod: 'short' });
  return date.format(timeStamp)
}

export default {
  dateTimeObj,
  splitAmount,
  getMonth,
  getCommentDate,
}
