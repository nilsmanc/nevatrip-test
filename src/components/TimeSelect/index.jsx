import { useMemo } from 'react'
import { increaseTime } from '../../utils/utils'

export const TimeSelect = ({ data, time, secondTime, onChangeTime, destination }) => {
  const timeValues = useMemo(() => data.time[destination] || data.time['to'], [destination])
  const filterValues = useMemo(
    () =>
      timeValues.filter((value) => value > increaseTime(time, 50).format('YYYY-MM-DD HH:mm:ss')),
    [time, timeValues],
  )
  console.log(timeValues)

  const mapOptions = (filter) => {
    const filtered = filter ? filterValues : timeValues
    return filtered.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))
  }
  return (
    <div>
      <div>Выберите время</div>
      <select value={time} onChange={onChangeTime}>
        {mapOptions('to')}
      </select>
      {
        (destination = 'round' && (
          <select value={time} onChange={onChangeTime}>
            <option>back</option>
          </select>
        ))
      }
    </div>
  )
}
