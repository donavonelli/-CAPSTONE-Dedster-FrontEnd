import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
// import Colleges from '../pages/Colleges'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Profile from '../pages/Profile/Profile'
import Contact from '../pages/Contact/Contact'

const Routes = function (props) {
  return (
    <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/services' component={ Services } />
    <Route exact path='/profile' component={ Profile } />
    <Route exact path='/contact' component={ Contact } />
    </Switch>
  )
}

export default Routes