import { useEffect, useMemo } from 'react'
import { increaseTime } from '../../utils/utils'

export const TimeSelect = ({ data, time, secondTime, onChangeTime, destination }) => {
  const timeValues = useMemo(
    () => data.timeCases[destination] || data.timeCases['to'],
    [data, destination],
  )

  const secondTimeValues = useMemo(
    () => data.timeCases[destination] || data.timeCases['back'],
    [data, destination],
  )
  const secondFilterValues = useMemo(
    () =>
      secondTimeValues.filter(
        (value) => value > increaseTime(time, 50).format('YYYY-MM-DD HH:mm:ss'),
      ),
    [time, timeValues],
  )

  const mapOptions = (valuesType, filterType, filter = false) => {
    const filtered = filter ? filterType : valuesType
    return filtered.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))
  }

  const changeTimeHandler = (e) => {
    onChangeTime(e.target.id, e.target.value)
  }

  useEffect(() => {
    if (!time && !secondTime) {
      if (destination === 'round') {
        onChangeTime('secondTime', secondFilterValues[0])
      }
      onChangeTime('time', timeValues[0])
    }
  }, [time, secondTime, destination, timeValues, secondTimeValues, secondFilterValues])

  return (
    <div>
      <div>Выберите время</div>
      <select id='time' value={time} onChange={changeTimeHandler}>
        {mapOptions(timeValues)}
      </select>
      {destination === 'round' && (
        <select id='secondTime' value={secondTime} onChange={changeTimeHandler}>
          {mapOptions(secondTimeValues, secondFilterValues, true)}
        </select>
      )}
    </div>
  )
}
