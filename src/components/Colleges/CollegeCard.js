import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = (props) => {
    const { name, mascot, description, _id } = props.college;
    return (
        <>
            <Link to={`/colleges/${_id}`}>
                <div className='college-card'>
                    <div className='image-wrapper'>
                        <img src='replaceme' alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <h4>{mascot}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default CollegeCard;