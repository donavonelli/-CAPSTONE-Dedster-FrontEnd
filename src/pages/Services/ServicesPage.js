import React from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'
import useServices from '../../hooks/Services/useServices';
import './ServicesPage.css'


function ServicesPage(props) {
    const [services, fetchServices] = useServices();

    return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h4 id='service-header'>Services</h4>
      {services.length ? <Services data={services} /> : <h1>Loading Services...</h1>}
                <Footer />
            </div>
        )
    
}


export default ServicesPage;