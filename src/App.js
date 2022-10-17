import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Table } from './pages/Table'
import { Time } from './pages/Time'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/table' element={<Table />} />
        <Route path='/time' element={<Time />} />
      </Routes>
    </div>
  )
}

export default App
