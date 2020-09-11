import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import Create from 'pages/create'
import singlePost from 'pages/singlePost'
import Login from 'pages/login'
import SignUp from 'pages/signup'
import Navigation from 'components/navigation'

import './App.css'


const App = () => {
  return(
    <div className='App'>
      <h1>App</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/:id" component={singlePost} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
