import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Colleges from '../pages/Colleges'

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/colleges' component={ Colleges } />
  </Switch>
)