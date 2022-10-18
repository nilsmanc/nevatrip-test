import { useMemo } from 'react'
import { increaseTime } from '../../utils/utils'

export const TimeSelect = ({ data, time, secondTime, onChangeTime, destination }) => {
  const timeValues = useMemo(() => data.time[destination] || data.time['to'], [destination])
  const filterValues = useMemo(
    () =>
      timeValues.filter((value) => value > increaseTime(time, 50).format('YYYY-MM-DD HH:mm:ss')),
    [time, timeValues],
  )

  const secondTimeValues = useMemo(() => data.time[destination] || data.time['back'], [destination])
  const secondFilterValues = useMemo(
    () =>
      secondTimeValues.filter(
        (value) => value > increaseTime(time, 50).format('YYYY-MM-DD HH:mm:ss'),
      ),
    [time, timeValues],
  )

  const mapOptions = (valuesType, filterType, filter) => {
    const filtered = filter ? filterType : valuesType
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
        {mapOptions(timeValues, filterValues)}
      </select>
      {destination == 'round' && (
        <select value={time} onChange={onChangeTime}>
          {mapOptions(secondTimeValues, secondFilterValues)}
        </select>
      )}
    </div>
  )
}
