import moment from 'moment/moment'
import { increaseTime } from '../../utils/utils'

export const Message = ({ data, count = null, time, secondTime, destination }) => {
  const chooseTicketVariant = (count) => {
    const cases = [2, 0, 1, 1, 1, 2]
    const ticketVariants = ['билет', 'билета', 'билетов']
    return ticketVariants[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]
    ]
  }

  const convertTime = (time) => {
    return moment(time).format('HH:mm')
  }

  const name = data.destinations[destination]
  const price = data.prices[destination]
  return (
    <div>
      <p>
        {`Вы выбрали ${count} ${chooseTicketVariant(
          count,
        )} по направлению ${name} на время: ${time}, общей стоимостью ${count * price} рублей`}
      </p>
      <p>{`Теплоход ${name} отправляется в ${convertTime(time)} и прибудет в ${increaseTime(
        time,
        50,
      ).format('HH:mm')}`}</p>
      {secondTime && (
        <p>
          {`Теплоход отправляется в обратном направлении в ${convertTime(
            secondTime,
          )}, прибудет в ${increaseTime(secondTime, 50).format('HH:mm')}`}
        </p>
      )}
      <p>{`Время в пути составит ${secondTime ? '1 час 40 минут' : '50 минут'}`}</p>
    </div>
  )
}
