import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import UserContextProvider from 'contexts/userContext'

render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
