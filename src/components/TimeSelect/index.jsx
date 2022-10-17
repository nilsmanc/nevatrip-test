export const TimeSelect = ({ time, secondTime, onChangeTime }) => {
  console.log(time.to)
  const mapOptions = () => {
    return time.to.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))
  }
  return (
    <div>
      <div>Выберите время</div>
      <select value={time} onChange={onChangeTime}>
        {mapOptions()}
      </select>
    </div>
  )
}
