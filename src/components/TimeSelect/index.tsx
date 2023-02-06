import { useEffect, useMemo } from 'react'
import { Data } from '../../types'

import { increaseTime } from '../../utils/utils'

import styles from './TimeSelect.module.css'

type TimeSelectProps = {
  data: Data
  time: string
  secondTime: string
  onChangeTime: (id: string, value: string) => void
  destination: string
}

export const TimeSelect: React.FC<TimeSelectProps> = ({
  data,
  time,
  secondTime,
  onChangeTime,
  destination,
}) => {
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
    if (!time || !secondTime) {
      if (destination === 'round') {
        onChangeTime('secondTime', secondFilterValues[0])
      }
      onChangeTime('time', timeValues[0])
    }
  }, [time, secondTime, destination, timeValues, secondTimeValues, secondFilterValues])

  return (
    <div className={styles.wrapper}>
      <div>Выберите время</div>
      <select className={styles.selector} id='time' value={time} onChange={changeTimeHandler}>
        {mapOptions(timeValues)}
      </select>
      {destination === 'round' && (
        <select
          className={styles.selector}
          id='secondTime'
          value={secondTime}
          onChange={changeTimeHandler}>
          {mapOptions(secondTimeValues, secondFilterValues, true)}
        </select>
      )}
    </div>
  )
}
