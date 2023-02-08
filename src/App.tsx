import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Table } from './pages/Table'
import { Time } from './pages/Time'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/table' element={<Table />} />
        <Route path='/' element={<Time />} />
      </Routes>
    </div>
  )
}

export default App
