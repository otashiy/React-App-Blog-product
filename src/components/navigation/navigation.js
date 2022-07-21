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
        <form className="navbar__form">
            <input className="navbar__form-input" type="search" aria-label="search" placeholder="search" />
            <button className="navbar__form-btn"></button>
        </form>
        </>
    );
};

export default Navigation;