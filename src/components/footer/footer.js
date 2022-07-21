import Container from "../container/container";
import "./footer.scss";
import footerLogo from "../../assets/images/footer-logo.svg";

const Footer = () => {
    return (
    <footer className="footer">
   <Container className="footer__container">
   <a href="/">
    <img src={footerLogo} alt="footer-icon" width={182} height={70} />
    </a>
   <div className="footer__wrapper">
   <div>
        <ul>
            <li className="footer__item">
                <a className="footer__link" target={"_blank"} href="https://twitter.com">Twitter</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" target={"_blank"} href="https://instagram.com">Instagram</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" target={"_blank"} href="https://telegram.com">Telegram</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" target={"_blank"} href="https://youtube.com">YouTube</a>
            </li>
            <li className="footer__item">
                <a className="footer__link"  target={"_blank"} href="https://figma.com">Figma</a>
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li className="footer__item">
                <a className="footer__link" href="">Xalq Kutubxonasi</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">Websitee</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">Website</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">Play Market</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">App Store</a>
            </li>
        </ul>
    </div>

    <div>
        <ul>
            <li className="footer__item">
                <a className="footer__link" href="">Blog</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">Dribble</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="">Behance</a>
            </li>
        </ul>
    </div>
   </div>
    </Container>
    </footer>
    );
};

export default Footer;