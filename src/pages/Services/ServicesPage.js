import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'
import useServices from '../../hooks/Services/useServices';



function ServicesPage(props) {
    const [services, fetchServices] = useServices();

    return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h3>Services Page</h3>
                <h4>All Services</h4>
      {services.length ? <Services data={services} /> : <h1>Loading Services...</h1>}
                <Footer />
            </div>
        )
    
}


export default ServicesPage;