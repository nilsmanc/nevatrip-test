import moment from 'moment'
import { useState } from 'react'
import { Form } from '../../components/Form'
import { Timezone } from '../../components/Timezone'

export const Time: React.FC = () => {
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
  const [isList, setIsList] = useState(true)
  const [selectedTimezone, setSelectedTimezone] = useState(0)

  const toLocalTime = (array: string[], time: number) => {
    for (let i = 0; i <= array.length - 1; i++) {
      let newTime = moment(array[i], 'YYYY-MM-DD HH:mm:ss')
        .add(time, 'hours')
        .format('YYYY-MM-DD HH:mm:ss')
      array[i] = newTime
    }
  }
  toLocalTime(data.timeCases.to, selectedTimezone)
  toLocalTime(data.timeCases.back, selectedTimezone)
  return (
    <div>
      {isList ? (
        <Timezone setTimezone={setSelectedTimezone} setIsTimezone={setIsList} />
      ) : (
        <Form data={data} />
      )}
    </div>
  )
}
