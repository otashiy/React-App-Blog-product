import Search from "../search/search";
import "./navigation.scss";

const Navigation = () => {
    return (
        <>
        <nav className="navbar">
            <ul className="navbar__list">
        <li className="navbar__item">
            <a className="navbar__link" href="#">All</a>
        </li>
        <li className="navbar__item">
            <a className="navbar__link" href="#">UX</a>
        </li>
        <li className="navbar__item">
            <a className="navbar__link" href="#">UI</a>
        </li>
        <li className="navbar__item">
            <a className="navbar__link" href="#">Trophy</a>
        </li>
        <li className="navbar__item">
            <a className="navbar__link" href="#">Design</a>
        </li>
        </ul>
        </nav>
        <Search />
        </>
    );
};

export default Navigation;