import { useState, useEffect } from "react";
import PostModel from '../../models/PostModel'

function usePosts(postId) {
    const [posts, setPosts] = useState([]);

    function fetchPosts(p_id) {
        if (p_id) {
            PostModel.show(p_id).then((data)=> {
                setPosts(data.Post);
                console.log("ID works")
            });
        } else {
            PostModel.all().then((data) => {
                setPosts(data.Posts);
                console.log("All Posts")
            });
        }
    }

    useEffect(
        function () {
            fetchPosts(postId);
        },[postId]
    );


    return [posts, fetchPosts]
}

export default usePosts