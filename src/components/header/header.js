import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import Container from "../container/container";
import "./header.scss";

const Header = () => {

const { posts } = useContext(PostsContext);

    return (
   <Container className="header__container">
         <ul>
        {posts.map(post => {
            return (
                <li>
                    <span>{post?.type}</span>
                </li>
            )
        })}
        </ul>
   </Container>
    );
}

export default Header;