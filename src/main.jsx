import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="text-lg font-semibold text-black">You've reached the right place :)</div>
  </StrictMode>,
)
