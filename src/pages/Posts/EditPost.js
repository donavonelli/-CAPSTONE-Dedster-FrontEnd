import React from 'react';
import PostModel from '../../models/PostModel';

class EditPost extends React.Component {
    state = {
        title: '',
        author: '',
        service: '',
        content: '',
        formTitle: '',
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        PostModel.show(this.props.match.params.id)
            .then(json => {
                console.log(json.post)
                this.setState({
                    ...json.post,
                    // formTitle: json.post.title
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        PostModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/posts/${this.props.match.params.id}`)
            })
    }

    handleChange = (event) => {
        if(event.target.type !== 'text') {
            this.setState(prevState => ({
                completed: !prevState.completed
            }))
        } else {   
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Edit {this.state.formTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-input'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            name='title'
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='author'>Author</label>
                        <input
                            type='text'
                            name='author'
                            onChange={this.handleChange}
                            value={this.state.author}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='service'>Service</label>
                        <input
                            type='text'
                            name='service'
                            onChange={this.handleChange}
                            value={this.state.service}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='content'>Content</label>
                        <input
                            type='text'
                            name='content'
                            onChange={this.handleChange}
                            value={this.state.content}
                        />
                    </div>
                    <input type='submit' value='Update Post' />
                </form>
            </div>
        )
    }
}

export default EditPost;