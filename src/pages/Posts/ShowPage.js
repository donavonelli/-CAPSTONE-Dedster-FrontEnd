import React from "react";
import PostCard from '../../components/Posts/PostCard';
import { Link } from 'react-router-dom';
import usePosts from '../../hooks/Posts/usePosts';

function PostShow(props) {
  const [post] = usePosts(props.match.params.id);
  const {_id} = post
  return post ? <div><PostCard post={post} />
              <Link to={`/posts/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
              </div>: <h3>Loading...</h3>;
}

export default PostShow;
