import React from "react";
import PostCard from '../../components/Posts/PostCard';
import { Link } from 'react-router-dom';
import usePosts from '../../hooks/Posts/usePosts';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import PostModel from '../../models/PostModel'

function PostShow(props) {
  const [post] = usePosts(props.match.params.id);
  const {_id} = post
  return post ? <div><Header />
  <Userbar />
  <Navbar /> 
  <PostCard post={post} />
              <Link to={`/posts/${_id}/edit`} style={{color: 'black'}}><button>Edit</button></Link>
              <Link to={`/posts/${_id}/delete`} style={{color: 'red'}}><button>Delete</button></Link>
  <Footer />
            </div>: <h3>Loading...</h3>;
}

export default PostShow;
