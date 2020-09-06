export const dateTimeObj = (string) => {
  const splitted = string.split(' ');
  return {
    dayOfWeek: splitted[0].slice(0, splitted[0].length - 1),
    dayOfMonth: splitted[1],
    month: splitted[2],
    year: splitted[3],
    time: `${splitted[4].slice(0, 5)} GMT`
  }
}

