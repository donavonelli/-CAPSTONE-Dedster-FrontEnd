import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import Posts from '../../components/Posts/Posts'
import usePosts from '../../hooks/Posts/usePosts'



function PostsPage(props) {
    const [posts, fetchPosts] = usePosts(props.match.params.id)
    return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h3>Posts Page</h3>
                {/* <div>{posts}</div> */}
    <h4>Posts</h4>
      {posts.length ? <Posts data={posts} /> : <h1>Loading Posts...</h1>}
                <Footer />
            </div>
        )
    
}


export default PostsPage;