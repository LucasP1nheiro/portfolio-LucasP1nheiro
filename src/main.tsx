import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import StageContextProvider from './context/StageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StageContextProvider>
    <App />
    </StageContextProvider>
  </React.StrictMode>,
)
