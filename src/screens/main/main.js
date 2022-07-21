import { Link } from "react-router-dom";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import "./main.scss";

const Main = () => {
    return (
        <>
      <Header>
      <Link className="main-link" to={"/login"}>Log in</Link>
      </Header>
        </>
    );
}

export default Main;