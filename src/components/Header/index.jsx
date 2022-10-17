import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <Link to={'/table'}>
        <span>Таблица</span>
      </Link>
      <Link to={'/time'}>
        <span>Время</span>
      </Link>
    </div>
  )
}
