import "./array.scss";
import { Link } from "react-router-dom";

const Array = ({ post }) => {


  return (
    <article className="array-item">
      <div className="wrapper">
      <time className="array-time">{post.date}</time>
      <span className="array-type">{post.type}</span>
      </div>
      <h2 className="array-title"><Link className="array-link" to={`/post/${post.id}`}>{post.title}</Link></h2>
      <p className="array-like">Likes: {post.likes}</p>
    </article>
  );
}

export default Array;