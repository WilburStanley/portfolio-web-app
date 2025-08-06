import styles from "../AboutPage/About.module.css";

const About = () => {
    const DESCRIPTION = "I’m a developer who’s passionate about building innovative solutions that make life easier. I write clean, modern, and professional code with a strong focus on usability, performance, and long-term maintainability. I adapt quickly to new technologies and challenges, always looking for better ways to build and improve.";

    return(
        <section id="about-section" className={styles.aboutmeSec}>
            <h1 className={styles.title}>About me</h1>
            <p className={styles.descriptionMe}>
                {DESCRIPTION}
            </p>
        </section>
    );
}

export default About;