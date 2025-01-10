import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './pages/routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
