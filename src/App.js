import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/LoginForm/LoginForm'
import SignupForm from './components/SignupForm/SignupForm'
import Home from './pages/Home'
import {useState, useEffect} from 'react'
import './App.css';
import Routes from './config/Routes';
import { render } from '@testing-library/react';

class App extends Component {
  // const [colleges, setColleges]= useState([])

  // useEffect(function(){
  //   fetch("/api/colleges")
  //   .then((response) => response.json())
  //   .then((json) =>{
  //     setColleges(json.data)
  //   })
  // },[])

  
  constructor(props){
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '' 
    }
  }
  
  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/backend/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({username: json.username})
      })
    }
  }
  
  handle_login = (e,data) => {
    e.preventDefault()
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        displayed_form:'',
        username: json.user.username
      })
    })
  };
  
  handle_signup = (e,data) => {
    e.preventDefault();
    fetch('http://localhost:8000/backend/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.username
      });
    });
  };
  
  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({logged_in: false, username: ''});
  };
  
  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };
  
  render () {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login = {this.handle_login} />
        break;
        case 'signup':
          form = <SignupForm handle_signup = {this.handle_signup} />
          break;
          default:
            form = null; 
          }
          
          return (
            <div className="App">
        <Routes />
        <Navbar logged_in= {this.state.logged_in} display_form = {this.display_form} handle_logout = {this.handle_logout} />
        {form}
        <h3>
          {this.state.logged_in ? `Greetings, ${this.state.username}` : 'Please Log In'}
        </h3>
      </div>
    )
  }
}

export default App;
  // return (
  //   <div className="App">
  
      {/* {colleges.map((college)=> (
        <h4 key={college.id}>{college.name}</h4>
      ))} */}
      {/* <Home /> */}
  //     <Routes />
  //   </div>
  // );