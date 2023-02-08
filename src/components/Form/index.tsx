import { useState } from 'react'

import { Data } from '../../types'
import { Count } from '../Count'
import { Destination } from '../Destination'
import { Message } from '../Message'
import { TimeSelect } from '../TimeSelect'

import styles from './Form.module.css'

type FormProps = {
  data: Data
}

export const Form: React.FC<FormProps> = ({ data }) => {
  const [destination, setDestination] = useState('to')
  const [time, setTime] = useState('')
  const [secondTime, setSecondTime] = useState('')
  const [count, setCount] = useState(1)
  const [isHidden, setIsHidden] = useState(true)

  const clearValues = () => {
    setTime('')
    setSecondTime('')
    setCount(1)
    setIsHidden(true)
  }

  const destinationHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(e.target.value)
    clearValues()
  }

  const timeHandler = (id: string, time: string) => {
    if (id === 'time') {
      setTime(time)
    } else {
      setSecondTime(time)
    }
    setIsHidden(true)
  }

  const countHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value)
    setIsHidden(true)
  }

  const handleSubmit = () => {
    setIsHidden(false)
  }

  return (
    <div className={styles.wrapper}>
      <Destination
        className={styles.destination}
        destination={data.destinations}
        onChangeDestination={destinationHandler}
      />
      <TimeSelect
        className={styles.timeSelect}
        data={data}
        destination={destination}
        time={time}
        secondTime={secondTime}
        onChangeTime={timeHandler}
      />
      <Count
        className={styles.count}
        count={count}
        handleSubmit={handleSubmit}
        onChangeCount={countHandler}
      />
      {!isHidden && (
        <Message
          className={styles.message}
          data={data}
          count={count}
          time={time}
          secondTime={secondTime}
          destination={destination}
        />
      )}
    </div>
  )
}
