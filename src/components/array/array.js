import { Link } from "react-router-dom";

const Array = ({ post }) => {
  return (
    <article>
      <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
      <time>{post.date}</time>
      <p>Likes: {post.likes}</p>
    </article>
  );
}

export default Array;