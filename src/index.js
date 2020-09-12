import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import UserContextProvider from 'contexts/userContext'
import LikesContextProvider from 'contexts/likesContext'

render(
  <React.StrictMode>
    <UserContextProvider>
      <LikesContextProvider>
        <App />
      </LikesContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
