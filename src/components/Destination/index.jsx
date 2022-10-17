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
      <select onChange={onChangeDestination}>{mapOptions()}</select>
      <div>Время в пути</div>
    </div>
  )
}
