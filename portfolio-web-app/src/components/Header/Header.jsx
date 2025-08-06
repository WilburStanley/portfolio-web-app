import PropTypes from "prop-types";
import styles from "../Header/Header.module.css";
import menuIcon from "../../assets/menu.png";
import { useState } from "react";

const Header = ({ username }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
      <header className={styles.navHeader}>
        <nav className={styles.navbar}>
            <div className={styles.logoName}>
              <a href="#">{username}</a>
            </div>
        
            <div className={styles.menuWrapper}>
              <img
                src={menuIcon}
                alt="Menu"
                className={styles.hamburger}
                onClick={toggleMenu} />
              <ul
                className={`${styles.navlinks} ${menuOpen ? styles.showMenu : ""}`}
                onClick={closeMenu} >
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
              </ul>
            </div>
        </nav>
      </header>
    );
};

Header.propTypes = {
    username: PropTypes.string,
};

Header.defaultProps = {
    username: "Guest",
};

export default Header;
