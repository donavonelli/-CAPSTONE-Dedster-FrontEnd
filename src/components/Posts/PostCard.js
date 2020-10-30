import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const { name, description, img, id } = props.service;
    return (
        <>
            <Link to={`/services/${id}`}>
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

export default PostCard;