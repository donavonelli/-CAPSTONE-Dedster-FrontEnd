import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'


class Contact extends Component {
    render () {
        return (
            <div>
                <Header /> 
                <Navbar />
                <h3>Contact Page</h3>
                <p>Email: official.dedster@gmail.com</p>
                <Footer />
            </div>
        )
    }
}

export default Contact;