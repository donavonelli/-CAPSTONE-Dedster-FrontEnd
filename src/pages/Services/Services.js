import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'


class Services extends Component {
    render () {
        return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h3>Services Page</h3>
                <p>Content</p>
                <Footer />
            </div>
        )
    }
}

export default Services;