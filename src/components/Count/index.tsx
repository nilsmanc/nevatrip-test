import styles from './Count.module.css'

type CountProps = {
  count: number
  handleSubmit: () => void
  onChangeCount: () => void
}

export const Count: React.FC<CountProps> = ({ count, handleSubmit, onChangeCount }) => {
  return (
    <div className={styles.wrapper}>
      <div>Количество билетов</div>
      <input
        className={styles.input}
        min='1'
        type='number'
        value={count}
        onChange={onChangeCount}
      />
      <button className={styles.btn} onClick={handleSubmit}>
        Посчитать
      </button>
    </div>
  )
}
