import '../styles/AboutPage.css';
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import myimage from "../assets/image000000.jpg";
const AboutPage = () => {
  return (
    <section id="about">
      <div className="aboutme-container">
        <h1 className="sectionTitle">About <span className="red">Me</span></h1> 
        <div className="about-content">
          <div className="about-column">
            <img src={myimage} alt="Kevin Lin"/>
            <div className="column">
              <p>
                I am Kevin Lin. I'm currently a senior, majoring in computer engineering, at Purdue University. 
                I have a hunger for learning and a passion for software. I am always looking for new opportunities 
                to grow and learn all areas of software, from embedded software to frontend/backend development
                to machine learnin/ai. In pursuit of my passion, I have been involved in various group and individual projects,
                research and internship <a href="https://www.linkedin.com/in/kevin-lin-338a1521b" style={{color: "crimson", fontWeight: "bold"}}>(Learn More)</a>.
              </p>
              <p>
                As for hobbies, I love reading, cooking, gaming, drawing, and anime/manga. I am also a big fan of basketball; 
                I love playing pickup basketball and watching the NBA. I don't have a favorite team as I enjoy 
                all teams, but I do support the 76ers because I am from the Philadelphia area.
              </p>
              <div className="contact-row">
                <a href="https://github.com/5OL4M3"><FaGithub size={50} className="contact-icon"/></a>
                <a href='mailto:klin0732@gmail.com'><IoIosMail size={50} className="contact-icon"/></a>
                <a href='https://www.linkedin.com/in/kevin-lin-338a1521b'><FaLinkedin size={50} className="contact-icon"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;