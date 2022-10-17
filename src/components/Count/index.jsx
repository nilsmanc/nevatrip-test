export const Count = ({ count, handleSubmit, onChangeCount }) => {
  return (
    <div>
      <div>Количество билетов</div>
      <input value={count} onChange={onChangeCount} />
      <button onClick={handleSubmit}>Посчитать</button>
    </div>
  )
}
