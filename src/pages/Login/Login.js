import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div>
        <Header /> 
        <Navbar />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
  
          <input type='submit' value='Login' />
        </form>
        <Footer />
      </div>
    );
  }


export default Login;