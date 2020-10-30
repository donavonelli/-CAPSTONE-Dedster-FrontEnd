import React from 'react';
import CollegeCard from './CollegeCard';

const Colleges = (props) => {
    function generateCollegeCards(colleges) {
        return colleges.map(college => {
            return <CollegeCard key={college.id} college={college} />
        })
    }

    return (
        <div className='colleges-container'>
            {generateCollegeCards(props.data)}
        </div>
    )
}

export default Colleges;