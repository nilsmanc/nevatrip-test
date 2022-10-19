export const Destination = ({ destination, onChangeDestination }) => {
  const mapOptions = () => {
    return Object.keys(destination).map((key) => (
      <option key={key} value={key}>
        {destination[key]}
      </option>
    ))
  }

  return (
    <div>
      <p>Выберите маршрут</p>
      <select onChange={onChangeDestination}>{mapOptions()}</select>
      <div>Время в пути в одну сторону - 50 минут</div>
    </div>
  )
}
