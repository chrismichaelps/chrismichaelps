import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { Provider } from 'react-redux';
import store from './store/store';

import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="crt screen-flicker">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
)
