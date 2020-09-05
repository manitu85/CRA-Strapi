import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import Create from 'pages/create'
import Nav from 'components/nav'
import './App.css'


const App = () => {
  return(
    <div className='App'>
      <h1>App</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
