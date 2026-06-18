import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SolutionDashboard from './SolutionDashboard.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SolutionDashboard />
  </StrictMode>,
)
