import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const { title, content, id, service_id } = props.post;
    return (
        <>
            <Link to={`/services/${service_id}/posts/${id}`}>
                <div className='post-card'>
                    <div className='image-wrapper'>
                        {/* <img src={img} alt={name} /> */}
                    </div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </Link>
        </>
    )
}

export default PostCard;