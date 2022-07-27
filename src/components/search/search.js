import { useContext, useRef } from "react";
import { PostsContext } from "../../contexts/posts";
import "./search.scss";

const Search = () => {

const {posts, setPosts} = useContext(PostsContext);
const searchRef = useRef();

const handleSearchSubmit = (evt) => {
evt.preventDefault();

const searchValue = searchRef.current.value;

if (searchValue) {
const filtredPosts = posts.filter(post => post.title.includes(searchValue))
setPosts(filtredPosts``)
}

}

    return (
        <form method="get" onSubmit={handleSearchSubmit} className="navbar__form">
        <input ref={searchRef} className="navbar__form-input" type="search" aria-label="search" placeholder="search" />
        <button className="navbar__form-btn"></button>
        </form>
    )
}

export default Search;