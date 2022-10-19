import moment from 'moment'
import { useState } from 'react'
import { Count } from '../Count'
import { Destination } from '../Destination'
import { Message } from '../Message'
import { TimeSelect } from '../TimeSelect'

export const Form = ({ data }) => {
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

  const destinationHandler = (e) => {
    setDestination(e.target.value)
    clearValues()
  }

  const timeHandler = (id, time) => {
    if (id === 'time') {
      setTime(time)
    } else {
      setSecondTime(time)
    }
    setIsHidden(true)
  }

  const countHandler = (e) => {
    setCount(e.target.value)
    setIsHidden(true)
  }

  const handleSubmit = () => {
    setIsHidden(false)
  }

  return (
    <div>
      <Destination destination={data.destinations} onChangeDestination={destinationHandler} />
      <TimeSelect
        data={data}
        destination={destination}
        time={time}
        secondTime={secondTime}
        onChangeTime={timeHandler}
      />
      <Count count={count} handleSubmit={handleSubmit} onChangeCount={countHandler} />
      {!isHidden && (
        <Message
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
