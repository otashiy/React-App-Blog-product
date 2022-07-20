import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import "./header.scss";

const Header = () => {

const { posts } = useContext(PostsContext);

    return (
        <ul>
        {posts.map(post => {
            return (
                <li>
                    <span>{post.type}</span>
                </li>
            )
        })}
        </ul>
    );
}

export default Header;