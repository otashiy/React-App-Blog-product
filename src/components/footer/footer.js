import Container from "../container/container";
import "./footer.scss";

const Footer = () => {
    return (
    <footer className="footer">
   <div className="footer-container">
   <a href="/">
    <img src="../../assets/images/footer-icon.svg" alt="footer-icon" width={182} height={70} />
    </a>
    <div>
        <ul>
            <li>
                <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
                <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
                <a href="https://telegram.com">Telegram</a>
            </li>
            <li>
                <a href="https://youtube.com">YouTube</a>
            </li>
            <li>
                <a href="https://figma.com">Figma</a>
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li>
                <a href="">Xalq Kutubxonasi</a>
            </li>
            <li>
                <a href="">Websitee</a>
            </li>
            <li>
                <a href="">Website</a>
            </li>
            <li>
                <a href="">Play Market</a>
            </li>
            <li>
                <a href="">App Store</a>
            </li>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <a href="">Blog</a>
            </li>
            <li>
                <a href="">Dribble</a>
            </li>
            <li>
                <a href="">Behance</a>
            </li>
        </ul>
    </div>
   </div>
    </footer>
    );
};

export default Footer;