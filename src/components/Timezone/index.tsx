import styles from './Timezone.module.css'

type TimezoneProps = {
  setTimezone: (value: number) => void
  setIsTimezone: (value: boolean) => void
}

export const Timezone: React.FC<TimezoneProps> = ({ setTimezone, setIsTimezone }) => {
  const timezones = [
    { title: 'Калининград (UTC+2)', value: -1 },
    { title: 'Москва (UTC+3)', value: 0 },
    { title: 'Самара (UTC+4)', value: 1 },
    { title: 'Екатеринбург (UTC+5)', value: 2 },
    { title: 'Омск (UTC+6)', value: 3 },
    { title: 'Красноярск (UTC+7)', value: 4 },
    { title: 'Иркутск (UTC+8)', value: 5 },
    { title: 'Якутск (UTC+9)', value: 6 },
    { title: 'Владивосток (UTC+10)', value: 7 },
    { title: 'Магадан (UTC+11)', value: 8 },
    { title: 'Петропавловск-Камчатский (UTC+12)', value: 9 },
  ]

  const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimezone(+e.target.value)
  }

  const mapOptions = () => {
    return timezones.map((timezone) => (
      <option key={timezone.value} value={timezone.value}>
        {timezone.title}
      </option>
    ))
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Выберите часовой пояс</p>
      {/* @ts-ignore */}
      <select className={styles.selector} onClick={clickHandler}>
        {mapOptions()}
      </select>
      <button className={styles.btn} onClick={() => setIsTimezone(false)}>
        Подтвердить
      </button>
    </div>
  )
}
