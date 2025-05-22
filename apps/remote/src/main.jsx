import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => <>Привет!</>;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
