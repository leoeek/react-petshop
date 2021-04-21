import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/base/base.css'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {
  return (
  <>
  <Router>
    <Switch>
      <Route exact path='/'>
        <Sobre />
      </Route>
      <Route path='/sobre'>
        <Home />
      </Route>
    </Switch>
  </Router>
  </>
  )
}

export default App
