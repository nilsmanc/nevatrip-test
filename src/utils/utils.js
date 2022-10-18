import moment from 'moment'

export const increaseTime = (time, inc) => {
  return moment(time).add(inc, 'minutes')
}
