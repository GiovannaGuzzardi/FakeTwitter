
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotAuthorized from '../components/notAuthorized'
import RoutePrivate from '../components/RoutePrivate'
import FirstPage from './firstPage'
import Login from './login'
import { SignUp } from './signUp'




function App() {
  return (
    // agora o app funciona de forma a configurar as rotas do app
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signIn" element={<SignUp />} />
      <Route path="/notAuthorized" element={<NotAuthorized />} />
      <Route path="/firstPage" element={
        <RoutePrivate>
          <FirstPage />
        </RoutePrivate>} />
    </Routes>
  )
}

export default App