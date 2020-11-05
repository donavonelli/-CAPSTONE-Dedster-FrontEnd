import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

const PostCard = (props) => {
    const { title, content, _id, service, author } = props.post;
    return (
        <>
            <Link to={`/posts/${_id}`}>
                <div className='post-card'>
                    <div className='image-wrapper'>
                    </div>
                    <h3>{title}</h3>
                    <p>By: {author}</p>
                    <p>{service}</p>
                    <p>{content}</p>
                </div>
            </Link>
        </>
    )
}

export default PostCard;