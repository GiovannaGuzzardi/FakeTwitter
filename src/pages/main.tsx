import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/auth'
import { PostProvider } from '../context/Posts'
import '../styles/index.css'
import App from './App'


// BrowserRouter é de forma a funcionar as rotas

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <PostProvider>
          <App />
        </PostProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
