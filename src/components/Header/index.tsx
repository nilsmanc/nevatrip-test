import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={'/table'}>
        <span>Таблица</span>
      </Link>
      <Link className={styles.link} to={'/'}>
        <span>Время</span>
      </Link>
    </div>
  )
}
