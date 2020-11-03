import { useState, useEffect } from "react";
import PostModel from '../../models/PostModel'

function usePosts(serviceId, postId) {
    const [posts, setPosts] = useState([]);

    function fetchPosts(s_id, p_id) {
        if (p_id) {
            PostModel.show(p_id).then((data)=> {
                setPosts(data.post_data);
                console.log("ID works")
            });
        } else {
            PostModel.all(s_id).then((data) => {
                console.log(data)
                setPosts(data.service_posts_data);
                console.log("All Posts")
            });
        }
    }

    useEffect(
        function () {
            fetchPosts(serviceId, postId);
        },[serviceId]
    );
        // console.log(posts)


    return [posts, fetchPosts]
}

export default usePosts