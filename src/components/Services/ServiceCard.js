import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const { name, description, img, _id } = props.service;
    return (
        <>
            <Link to={`/services/${_id}`}>
                <div className='service-card'>
                    <div className='image-wrapper'>
                        <img src={img} alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default ServiceCard;