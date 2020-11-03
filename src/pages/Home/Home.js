import React from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Slideshow from '../../components/Slideshow/Slideshow'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import AuthModel from '../../models/AuthModel'

const Home = () => {
  AuthModel.signup({
    username:"test1",
    email:"test1@test1.com",
    password:"test1"
  }).then(newUser => {
    console.log(newUser)
  })
  return (
    <div>
        <Header />
        <Userbar />
        <Navbar />
      <h1 className="header">Welcome to Dedster!</h1>
      <p>Your one stop shop with connecting with your college campus! First time here? Be sure to visit our About page to learn all about us and how this site can help you in the best way possible</p>
        <Slideshow />
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <Footer />

    </div>
  );
}

export default Home;
