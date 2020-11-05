import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceCard = (props) => {
    const { name, description, _id } = props.service;
    return (
        <>
            <Link to={`/services/${_id}`}>
                <div className='service-card'>
                    <div className='image-wrapper'>
                        {/* <img src={img} alt={name} /> */}
                    </div>
                    <h3 id='service-name'>{name}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default ServiceCard;