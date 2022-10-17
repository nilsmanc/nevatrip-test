export const Message = ({ count, time, secondTime, destination }) => {
  return (
    <div>
      <span>{`Вы выбрали ${count} билетов по направлению ${destination} на время: ${time}`} </span>
    </div>
  )
}
