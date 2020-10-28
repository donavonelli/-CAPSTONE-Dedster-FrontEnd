import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
// import Colleges from '../pages/Colleges'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'

const Routes = function (props) {
  return (
    <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/services' component={ Services } />
    </Switch>
  )
}

export default Routes