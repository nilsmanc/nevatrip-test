import styles from './Count.module.css'

export const Count = ({ count, handleSubmit, onChangeCount }) => {
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
