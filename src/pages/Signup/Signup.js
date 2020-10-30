import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'


class Signup extends Component {
    render () {
        return (
            <div>
                <Header /> 
                <Navbar />
                <h3>Signup Page</h3>
                <p>Content</p>
                <Footer />
            </div>
        )
    }
}

export default Signup;