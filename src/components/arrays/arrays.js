import { useContext } from "react"
import { PostsContext } from "../../contexts/posts";
import Array from "../array/array";
import "./arrays.scss";


const Arrays = () => {
const { posts } = useContext(PostsContext);
  return (
    <div>
      <h1 className="arrays-title">Recent Posts</h1>
      {posts.map(post => <Array post={post} key={post.id} />)}
    </div>
  )
}

export default Arrays;