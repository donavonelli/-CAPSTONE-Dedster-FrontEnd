import React from "react";
import PostCard from '../../components/Posts/PostCard';

import usePosts from '../../hooks/Posts/usePosts';

function PostShow(props) {
  const [post] = usePosts(props.match.params.id, props.match.params.p_id);
  return post ? <div><PostCard post={post} /></div>: <h3>Loading...</h3>;
}

export default PostShow;
