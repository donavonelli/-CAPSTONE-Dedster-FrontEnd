import React from 'react';
import ServiceCard from './ServiceCard';

const Services = (props) => {
    function generateServiceCards(services) {
        return services.map(service => {
            return <ServiceCard key={service.id} service={service} />
        })
    }

    return (
        <div className='services-container'>
            {generateServiceCards(props.data)}
        </div>
    )
}

export default Services;