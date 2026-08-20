import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LegalPage } from './components/LegalPage'
import { privacyDoc } from './content/legal'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <StrictMode>
    <LegalPage doc={privacyDoc} />
  </StrictMode>,
)
