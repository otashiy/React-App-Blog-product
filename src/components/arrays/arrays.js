import { useContext } from "react"
import { PostsContext } from "../../contexts/posts";
import Array from "../array/array";


const Arrays = () => {
const { posts } = useContext(PostsContext);
  return (
    <div>
      <h1>Hello its Arrays</h1>
      {posts.map(post => <Array post={post} key={post.id} />)}
    </div>
  )
}

export default Arrays;