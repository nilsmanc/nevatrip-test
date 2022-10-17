export const Destination = (destination, onChangeDestination) => {
  return (
    <div>
      <select onChange={onChangeDestination}>
        <option>to</option>
      </select>
      <div>Время в пути</div>
    </div>
  )
}
