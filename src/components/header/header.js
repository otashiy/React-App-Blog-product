
import Container from "../container/container";
import "./header.scss";
import logo from "../../assets/images/site-logo.svg";

const Header = ({children}) => {


    return (
  <header>
     <Container className="header__container">
    <a href="/">
        <img src={logo} alt="site-logo" width={209} height={58} />
    </a>
    {children}
   </Container>
  </header>
    );
}

export default Header;