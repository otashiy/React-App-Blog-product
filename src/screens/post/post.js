import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import { PostsContext } from "../../contexts/posts";
import "./post.scss";

const Post = () => {

const { id } = useParams();

const { posts } = useContext(PostsContext);

const currentPosts = posts.find(post => {
    return (
        post.id === +id
    )
});
    return (
    <>
    <main>
   <Container>
   <h1 className="post-title">Post</h1>
    <article className="post-item">
    <span className="post-type">{currentPosts.type}</span>
    <h3 className="post-subtitle">{currentPosts.title}</h3>
    <div className="post-wrapper">
    <time className="post-time">{currentPosts.date}</time>
    <span className="post-like">Likes: {currentPosts.likes}</span>
    </div>
    <img className="post-img" src="https://picsum.photos/736/200" alt="random-image" />
    <p className="post-desc">{currentPosts.body}</p>
    </article>
   </Container>
    </main>
    <Footer />
    </>
    );
};

export default Post;