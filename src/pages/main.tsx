import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostProvider } from '../context/Posts'
import '../styles/index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>,
)
