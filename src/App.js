import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import {useState, useEffect} from 'react'
import './App.css';
import Routes from './config/Routes';

function App() {
  const [colleges, setColleges]= useState([])

  useEffect(function(){
    fetch("/api/colleges")
    .then((response) => response.json())
    .then((json) =>{
      setColleges(json.data)
    })
  },[])

  return (
    <div className="App">

      {/* {colleges.map((college)=> (
        <h4 key={college.id}>{college.name}</h4>
      ))} */}
      {/* <Home /> */}
      <Routes />
    </div>
  );
}

export default App;