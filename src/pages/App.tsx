
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './firstPage'
import Login from './login'



function App() {
  return (
    // agora o app funciona de forma a configurar as rotas do app
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/firstPage" element={<FirstPage />} />
    </Routes>
  )
}

export default App