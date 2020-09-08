import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import Create from 'pages/create'
import singlePost from 'pages/singlePost'
import Nav from 'components/navigation'
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
          <Route exact path="/:id" component={singlePost} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
