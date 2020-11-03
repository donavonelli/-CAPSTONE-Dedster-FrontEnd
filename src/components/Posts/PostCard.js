import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const { title, content, _id, service, author } = props.post;
    return (
        <>
            <Link to={`/posts/${_id}`}>
                <div className='post-card'>
                    <div className='image-wrapper'>
                        {/* <img src={img} alt={name} /> */}
                    </div>
                    <h3>{title}</h3>
                    <p>By: {author}</p>
                    <p>{service}</p>
                </div>
            </Link>
        </>
    )
}

export default PostCard;