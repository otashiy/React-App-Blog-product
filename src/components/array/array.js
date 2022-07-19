import "./array.scss";
import { Link } from "react-router-dom";

const Array = ({ post }) => {


  return (
    <article className="array-item">
      <time className="array-time">{post.date}</time>
      <p className="array-like">Likes: {post.likes}</p>
      <h2><Link className="array-title" to={`/editing-posts/${post.id}`}>{post.title}</Link></h2>
      <span className="array-type">{post.type}</span>
    </article>
  );
}

export default Array;