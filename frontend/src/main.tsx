import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import 'vite/modulepreload-polyfill'


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
