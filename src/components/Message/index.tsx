import moment from 'moment/moment'
import { Data } from '../../types'
import { increaseTime } from '../../utils/utils'
import styles from './Message.module.css'

type MessageProps = {
  data: Data
  count: number | null
  time: string
  secondTime: string
  destination: string
  className: string
}

export const Message: React.FC<MessageProps> = ({
  data,
  count = null,
  time,
  secondTime,
  destination,
}) => {
  const chooseTicketVariant = (count: number) => {
    const cases = [2, 0, 1, 1, 1, 2]
    const ticketVariants = ['билет', 'билета', 'билетов']
    return ticketVariants[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]
    ]
  }

  const convertTime = (time: string) => {
    return moment(time).format('HH:mm')
  }

  const name = data.destinations[destination]
  const price = data.prices[destination]
  return (
    <div className={styles.wrapper}>
      <p>
        {`Вы выбрали ${count} ${chooseTicketVariant(
          count,
        )} по направлению ${name} на время: ${time}, общей стоимостью ${count * price} рублей.`}
      </p>
      <p>{`Теплоход отправляется в ${convertTime(time)} и прибудет в B в ${increaseTime(
        time,
        50,
      ).format('HH:mm')}.`}</p>
      {secondTime && (
        <p>
          {`Теплоход отправляется в обратном направлении в ${convertTime(
            secondTime,
          )}, прибудет в ${increaseTime(secondTime, 50).format('HH:mm')}.`}
        </p>
      )}
      <p>{`Время в пути составит ${secondTime ? '1 час 40 минут' : '50 минут'}.`}</p>
    </div>
  )
}
