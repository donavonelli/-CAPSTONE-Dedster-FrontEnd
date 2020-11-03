import React from 'react';
import PostCard from './PostCard';

const Posts = (props) => {
    function generatePostCards(posts) {
        return posts.map(post => {
            return <PostCard key={post.id} post={post} />
        })
    }

    return (
        <div className='posts-container'>
            {generatePostCards(props.data)}
        </div>
    )
}

export default Posts;