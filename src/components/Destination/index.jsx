import styles from './Destination.module.css'

export const Destination = ({ destination, onChangeDestination }) => {
  const mapOptions = () => {
    return Object.keys(destination).map((key) => (
      <option key={key} value={key}>
        {destination[key]}
      </option>
    ))
  }

  return (
    <div className={styles.wrapper}>
      <p>Выберите маршрут</p>
      <select className={styles.selector} onChange={onChangeDestination}>
        {mapOptions()}
      </select>
      <div>Время в пути в одну сторону - 50 минут</div>
    </div>
  )
}
