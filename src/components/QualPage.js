import "../styles/QualPage.css"
import React, { useState } from "react";
const QualPage = () => {
  

  const [hoveredObject, setHovered] = useState(null);
  
  const handleHover = (object) => {
    setHovered(object);
  }

  const getContent = () => {
    switch (hoveredObject) {
      case "object1":
        return (
          <div>
            <h1>Frontend</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        );
      case "object2":
        return (
          <div>
            <h1>Backend</h1>
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Docker</li>
              <li>Node/Express</li>
            </ul>
            <br/>
            <h1>Statistic</h1>
            <ul>
              <li>Python</li>
              <ul>
                <li>Pandas</li>
                <li>Numpy</li>
                <li>Matplotlib</li>
                <li>Tensorflow</li>
              </ul>
              <li>Matlab</li>
            </ul>
          </div>
        );
      case "object3":
        return (
          <div>
            <h1>Lower level</h1>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Unix/Linux</li>
              <li>Assembly</li>
              <li>Matlab/Simulink</li>
              <li>Arduino</li>
              <li>Stm32</li>
            </ul>
          </div>
        );
      case null:
      default:
        return (
          <div>
              <h2>Education</h2>
              <ul>
                <li>Bachelors of Science in Computer Engineering at Purdue University</li>
              </ul>
              
              <p style={{fontWeight: "bold"}}>Classes: </p>
              <ul className="two-column"> 
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=716&show=true&type=undergrad"  target = "blank">Electrical Engineering Fund. I</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=726&show=true&type=undergrad"  target = "blank">Electrical Engineering Fund. I Lab</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=725&show=true&type=undergrad"  target = "blank">Electrical Engineering Fund. II</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=591&show=true&type=undergrad"  target = "blank">Advanced C Programming</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=729&show=true&type=undergrad"  target = "blank">Python for Data Science</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=542&show=true&type=undergrad"  target = "blank">Data Structures </a></li>
                <li><a title = "More info at Purdue's Page" href="https://catalog.purdue.edu/preview_course_nopop.php?catoid=9&coid=85967"  target = "blank">Programming App For Engineers </a></li>
                <li><a title = "More info at Purdue's Page" href="https://datamine.purdue.edu/" target = "blank"> Datamine (Data Science)</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=33&show=true&type=undergrad"  target = "blank">Signals and Systems</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=607&show=true&type=undergrad"  target = "blank">Introduction to Digital Systems</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=579&show=true&type=undergrad"  target = "blank">OOP: C++ & Java</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=47&show=true&type=undergrad"  target = "blank">Discrete Mathematics</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=515&show=true&type=undergrad"  target = "blank">Computer Security</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=814&show=true&type=undergrad"  target = "blank">Software Engineering</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=612&show=true&type=undergrad"  target = "blank">Microprocessing System and Interface</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=584&show=true&type=undergrad"  target = "blank">Computer Graphics</a></li>
                <li><a title = "More info at Purdue's Page" href="https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=56&show=true&type=undergrad"  target = "blank">Operating Systems</a></li>
              </ul>  
              <h2>Hover the <span className="red">iceberg</span></h2>
            </div>
        );
    }
  };

  return (
    <section id="experience">
      <div className="experience-container">
        <h1 className="sectionTitle">My <span className="red">Qualifications</span></h1> 
        <div className="experience-content">
          <div className="experience-grid">
            <div className="iceberg">
              <div className="section section1" onMouseEnter={()=>handleHover("object1")} onMouseLeave={()=>handleHover(null)}/>
              <div className="section section2" onMouseEnter={()=>handleHover("object2")} onMouseLeave={()=>handleHover(null)}/>
              <div className="section section3" onMouseEnter={()=>handleHover("object3")} onMouseLeave={()=>handleHover(null)}/>
            </div>
            {getContent()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualPage;