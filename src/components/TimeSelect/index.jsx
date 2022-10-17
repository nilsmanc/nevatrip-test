export const TimeSelect = ({ time, secondTime, onChangeTime }) => {
  return (
    <div>
      <div>Выберите время</div>
      <select value={time} onChange={onChangeTime}>
        <option>1</option>
      </select>
    </div>
  )
}
