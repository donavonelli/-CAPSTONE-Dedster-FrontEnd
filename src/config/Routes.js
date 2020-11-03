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
import PostsPage from '../pages/Posts/PostsPage'
import PostShow from '../pages/Posts/ShowPage'
import NewPost from '../pages/Posts/NewPost'
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";


const Routes = function (props) {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/services' component={ ServicesPage } />
    <Route exact path='/services/:id' component={ServiceShow} />
    <Route exact path='/colleges' component={ CollegesPage } />
    <Route exact path='/colleges/:id' component={CollegeShow} />
    <Route exact path='/posts' component={PostsPage} />
    <Route exact path='/posts/new' component={NewPost} />
    <Route exact path='/posts/:id' component={PostShow} />
    <Route exact path='/profile' component={ Profile } />
    <Route exact path='/contact' component={ Contact } />
    <Route exact path='/signup' component={ Signup } />
    <Route exact path='/login' component={ Login } />
    {/* {loggedIn && (
    )} */}
    <Route path='*' render={() => <h1>"Uh oh the page you are looking for doesn't exist O.O"</h1>} />
    </Switch>
  )
}

export default Routes