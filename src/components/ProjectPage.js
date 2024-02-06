import "../styles/ProjectPage.css";
import PostCard from "./PostCard";
import postcardData from "../projectInfo.json";
import React, { useState } from "react";

const ProjectPage = () => {

  const [currentTab, setCurrentTab] = useState("all");

  return (
    <section id="projects">
      <div className="experience-container">
        <h1 className="sectionTitle">My <span className="red">Projects</span></h1> 
        <div className="experience-content">
          <div className="buttonContainer">
            <button style= {currentTab === "all" ? {background: "rgba(255, 255, 255, 0.8)", color: "crimson", borderRadius: "20px 0 0 0"}: {background: "black",  borderRadius: "20px 0 0 0"}} onClick={() => setCurrentTab("all")}>All</button>
            <button style= {currentTab === "web" ? {background: "rgba(255, 255, 255, 0.8)", color: "crimson"}: {background: "black"}} onClick={() => setCurrentTab("web")}>Web App</button>
            <button style= {currentTab === "software" ? {background: "rgba(255, 255, 255, 0.8)", color: "crimson"}: {background: "black"}} onClick={() => setCurrentTab("software")}>Software</button>
            <button style= {currentTab === "electrical" ? {background: "rgba(255, 255, 255, 0.8)", color: "crimson", borderRadius: "0 20px 0 0"}: {background: "black",  borderRadius: " 0 20px 0 0"}} onClick={() => setCurrentTab("electrical")}>Electrical</button>
          </div>
          <div className="tabPanel">
            {postcardData.map((postcard) => (
              postcard.type.includes(currentTab) || currentTab === "all" ? (
                <PostCard 
                postkey={postcard.id}
                title={postcard.title}
                content={postcard.content}
                link={postcard.link}
                imgPath={postcard.path}
                tools={postcard.tools}
                />
              ) : (
                ""
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;