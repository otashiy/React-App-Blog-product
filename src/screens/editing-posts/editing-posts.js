import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import { PostsContext } from "../../contexts/posts";
import "./editing-posts";

const EditingPosts = () => {

const { id } = useParams();

const { posts } = useContext(PostsContext);

const currentPosts = posts.find(post => {
    return (
        post.id === +id
    )
});
    return (
    <>
   <h1 className="edit-title">Editing page!</h1>
    <article>
    <h3 className="edit-subtitle">{currentPosts.title}</h3>
    <time>{currentPosts.date}</time>
    <span>Likes: {currentPosts.likes}</span>
    </article>
    </>
    );
};

export default EditingPosts;