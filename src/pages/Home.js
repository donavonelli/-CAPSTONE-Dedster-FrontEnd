import React from 'react';
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Userbar from '../components/Navbar/Userbar'
import Slideshow from '../components/Slideshow/Slideshow'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Userbar />
        <Navbar />
      <h1>Welcome to Dedster!</h1>
        <Slideshow />
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <Footer />

    </div>
  );
}

export default Home;
