import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { PostsContext } from "../../contexts/posts";
import "./post.scss";
import image from "../../assets/images/post-bg.png";
import Navigation from "../../components/navigation/navigation";

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
    <Header>
    <Navigation />
    </Header>
    <h1 className="visually-hidden">Post</h1>
    <main>
   <Container className="post-container">
   <div className="post-content">
    <span className="post-inner-likes">{currentPosts.type.length}</span>
    <span className="post-inner-share">{currentPosts.share}</span>
   </div>
    <article className="post-item">
    <span className="post-type">{currentPosts.type}</span>
    <h3 className="post-subtitle">{currentPosts.title}</h3>
    <div className="post-wrapper">
    <time className="post-time">{currentPosts.date}</time>
    <span className="post-like">Likes: {currentPosts.likes}</span>
    </div>
    <img className="post-img" src={image} alt="random-image" width={736} height={300} />
    <p className="post-desc">{currentPosts.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias ducimus assumenda quia dolor qui, id impedit explicabo minima, nihil expedita enim voluptatum deserunt exercitationem tenetur praesentium ipsam? A, quia.</p>
    </article>
   </Container>
    </main>
    <Footer />
    </>
    );
};

export default Post;