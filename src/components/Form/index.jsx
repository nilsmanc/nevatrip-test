import { useState } from 'react'
import { Count } from '../Count'
import { Destination } from '../Destination'
import { Message } from '../Message'
import { TimeSelect } from '../TimeSelect'
const data = {
  timeCases: {
    to: [
      '2021-08-21 18:00:00',
      '2021-08-21 18:30:00',
      '2021-08-21 18:45:00',
      '2021-08-21 19:00:00',
      '2021-08-21 19:15:00',
      '2021-08-21 21:00:00',
    ],
    back: [
      '2021-08-21 18:30:00',
      '2021-08-21 18:45:00',
      '2021-08-21 19:00:00',
      '2021-08-21 19:15:00',
      '2021-08-21 19:35:00',
      '2021-08-21 21:50:00',
      '2021-08-21 21:55:00',
    ],
  },
  destinations: {
    to: 'из A в B',
    back: 'из B в A',
    round: 'из A в B и обратно в A',
  },
  prices: {
    to: 700,
    back: 700,
    round: 1200,
  },
}
export const Form = () => {
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
