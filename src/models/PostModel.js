const URL = 'http://localhost:8000/services'

class PostModel {
    static all = (serviceId) => {
        return fetch(`${URL}/${serviceId}/posts`).then(response => response.json());
    }
    static show = (serviceId, postId) => {
        return fetch(`${URL}/${serviceId}/posts/${postId}`).then(response => response.json());
    }
}

export default PostModel