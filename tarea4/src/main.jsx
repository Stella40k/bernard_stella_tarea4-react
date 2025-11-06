import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './pages/HomePage.jsx'
import { Counter } from './components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />

    <Counter />
  </StrictMode>,
)
