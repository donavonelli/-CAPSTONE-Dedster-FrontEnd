import usePosts from '../../hooks/Posts/usePosts';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import PostModel from '../../models/PostModel'
import { Link } from 'react-router-dom';

const DeletePost = (props) => {
    function handleSubmit(event) {
        console.log("Working")
        event.preventDefault();
    PostModel.destroy(props.match.params.id).then(
        (json) => {
          props.history.push(`/posts`);
        }
      )
    }
    return (
    <>
    <Header />
    <Userbar />
    <Navbar /> 
        <h1>Are you sure you want to delete ?</h1>
         <form onSubmit={handleSubmit}><input type='submit' value='Yes'/></form>
        <h3><Link to={`/posts`}><button>No</button></Link></h3>
    <Footer />
        </>
    )
}
export default DeletePost;