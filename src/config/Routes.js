import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
// import Colleges from '../pages/Colleges'
import About from '../pages/About/About'
import ServicesPage from '../pages/Services/ServicesPage'
import ServiceShow from '../pages/Services/ShowPage'
import Profile from '../pages/Profile/Profile'
import Contact from '../pages/Contact/Contact'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import CollegesPage from '../pages/Colleges/Colleges'
import CollegeShow from '../pages/Colleges/ShowPage'

const Routes = function (props) {
  return (
    <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/services' component={ ServicesPage } />
    <Route path='/services/:id' component={ServiceShow} />
    <Route exact path='/colleges' component={ CollegesPage } />
    <Route path='/colleges/:id' component={CollegeShow} />
    <Route exact path='/profile' component={ Profile } />
    <Route exact path='/contact' component={ Contact } />
    <Route exact path='/signup' component={ Signup } />
    <Route exact path='/login' component={ Login } />
    </Switch>
  )
}

export default Routes