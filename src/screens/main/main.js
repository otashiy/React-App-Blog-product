import { Link } from "react-router-dom";
import "./main.scss";

const Main = () => {
    return (
        <>
      <h1 className="main-title">Welcome to my blog!</h1>
      <Link className="main-link" to={"/login"}>Log in</Link>
        </>
    );
}

export default Main;