import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/LoginForm/LoginForm'
import SignupForm from './components/SignupForm/SignupForm'
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

  

  
  render () {   
          return (
            <div className="App">
        <Routes />
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