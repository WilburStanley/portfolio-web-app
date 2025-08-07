import { useState } from "react";
import styles from "../../pages/HomePage/Home.module.css";
import PropTypes from "prop-types";

import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import githubIcon from "../../assets/github.png";
import closeIcon from "../../assets/close.png";

const Home = (props) => {
    const [showModal, setShowModal] = useState(false);

    const USERNAME = props.username;
    const PROFESSION = props.profession;
    const DESCRIPTION = "I have over 2 years of experience developing responsive websites, mobile apps, and desktop software using modern, professional practices. I focus on writing clean, maintainable, dynamic, and secure code across various platforms and technologies.";

    const facebookLink = "https://www.facebook.com/wilbur.stanley";
    const githubLink = "https://github.com/WilburStanley";
    const email = "wilburstanley.workspace@gmail.com"
    const phoneNumber = "+639072569430"

    return (
        <section id="home-section" className={styles.homepageSec}>
            <div className={styles.homeContentContainer}>
                <div className="home-main-info">
                    <h2 id={styles.username}>Hi, I'm <span style={{ color: 'green' }}>{USERNAME}</span></h2>
                    <h1 className={styles.title}>{PROFESSION}</h1>
                    <p className={styles.description}>{DESCRIPTION}</p>
                    <div className={styles.socialsContainer}>
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook Logo" />
                        </a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github Logo" />
                        </a>
                    </div>
                    <div className={styles.viewContainer}>
                        <a href="/portfolio-web-app/CV-WILBUR-STANLEY.pdf" download>
                          <button className={styles.reachBtn}>Download Cv</button>
                        </a>

                        <button className={styles.reachBtn} onClick={() => setShowModal(true)}>Contact Info</button>
                    </div>
                </div>
            </div>
            
            {showModal && (
                <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={closeIcon}
                            alt="Close"
                            className={styles.closeButton}
                            onClick={() => setShowModal(false)} />
                        <h2>Contact Info</h2>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phoneNumber}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;

Home.propTypes = {
    username: PropTypes.string,
    profession: PropTypes.string,
    userProfilePicSource: PropTypes.string,
};

Home.defaultProps = {
    username: "Guest",
    profession: "Profession",
};
