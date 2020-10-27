import React from 'react';
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Userbar from '../components/Navbar/Userbar'
const Home = () => {
  return (
    <div>
        <Header />
        <Userbar />
        <Navbar />
      <h1>Welcome to Dedster!</h1>
    </div>
  );
}

export default Home;
