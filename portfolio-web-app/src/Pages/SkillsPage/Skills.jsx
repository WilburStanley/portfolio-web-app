import styles from "../SkillsPage/Skills.module.css";

import htmlIcon from "../../assets/coding-languages/html-5.png"
import cssIcon from "../../assets/coding-languages/css-3.png"
import jsIcon from "../../assets/coding-languages/js.png"
import reactIcon from "../../assets/coding-languages/react.svg"
import javaIcon from "../../assets/coding-languages/java.png";
import kotlinIcon from "../../assets/coding-languages/kotlin.svg";
import sqlIcon from "../../assets/coding-languages/sql.png";
import mySQLIcon from "../../assets/coding-languages/mysql.png";
import pythonIcon from "../../assets/coding-languages/python.png"
import csharpIcon from "../../assets/coding-languages/c-sharp.png"
import cppIcon from "../../assets/coding-languages/cplusplus.png"

const Skills = () => {
    const languageSkills = [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
      { name: "Java", icon: javaIcon },
      { name: "Kotlin", icon: kotlinIcon },
      { name: "SQL", icon: sqlIcon },
      { name: "MySQL", icon: mySQLIcon },
      { name: "Python", icon: pythonIcon },
      { name: "C#", icon: csharpIcon },
      { name: "C++", icon: cppIcon },
    ];

    return(
        <section id="skills-section" className={styles.skillsSec}>
            <ul className={styles.skillsList}>
              <li>🌐 Web Development</li>
              <li>📱 Mobile Development (Native & Cross-Platform)</li>
              <li>🪟 Windows/Desktop Application Development</li>
              <li>🤖 Automation & Scripting</li>
            </ul>
        <h2 className={styles.subTitle}>Languages I Work With</h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.animatedTrack}>
            {[...languageSkills, ...languageSkills].map((skill, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.iconWrapper}>
                  <img src={skill.icon} alt={skill.name} className={styles.icon} />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        </section>
    );
}

export default Skills;