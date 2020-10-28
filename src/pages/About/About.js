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
                <Userbar />
                <Navbar />
                <h3>About Page</h3>
                <p>Content</p>
                <Footer />
            </div>
        )
    }
}

export default About;