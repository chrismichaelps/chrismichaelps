import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import router from './router'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="crt screen-flicker">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
