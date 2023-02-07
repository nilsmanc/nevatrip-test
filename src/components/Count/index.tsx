import styles from './Count.module.css'

type CountProps = {
  count: number
  handleSubmit: () => void
  onChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void
  className: string
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
