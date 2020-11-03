import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import Posts from '../../components/Posts/Posts'
import usePosts from '../../hooks/Posts/usePosts'
import useServices from '../../hooks/Services/useServices';



function PostsPage(props) {
    const [service] = useServices(props.match.params.id)
    const [posts, fetchPosts] = usePosts(props.match.params.id)

    console.log(posts)
    return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h3>Posts Page</h3>
                {/* <div>{posts}</div> */}
    <h4>All Posts for {service.name}</h4>
      {posts.length ? <Posts data={posts} /> : <h1>Loading Posts...</h1>}
                <Footer />
            </div>
        )
    
}


export default PostsPage;