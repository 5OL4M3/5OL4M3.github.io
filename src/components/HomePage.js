import "../styles/HomePage.css";
import { ReactTyped } from 'react-typed';
import pdf from "../assets/lin1285_resume.pdf";

const HomePage = () => {
  return (
    <section id="home">
        <div className="greeting">
          <h3>Hello there. My name is</h3>
          <h1 className="red">Kevin Lin</h1>
          <div className="container">
            <h3>
              I am a &nbsp;
              <ReactTyped
                strings={[
                  ' Computer Engineer',
                  ' Electrical Engineer',
                  ' Software Developer',
                  ' Full Stack Developer'
                ]}
                typeSpeed={150}
                backSpeed={150}
                loop
              />
            </h3>
          </div>
          <br/>
          <a href={pdf} target="blank">Resume</a>
        </div>
    </section>
  );
}

export default HomePage;