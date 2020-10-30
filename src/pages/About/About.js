import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'

class About extends Component {
    render () {
        return (
            <div>
                <Header /> 
                <Navbar />
                <h3>About Dedster</h3>
                <p>Dedster was created in hopes of creating a college community online aswell as oncampus. Team Dedster felt there was many people on or around campus with skills that could benefit others so we created this website give the talented a place to showcase their talents and let others know their skills are for sale!</p>
                <Footer />
            </div>
        )
    }
}

export default About;