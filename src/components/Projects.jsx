import React from "react";
import "../assets/css/Projects.css";
import Data from "../assets/json/data.json";

const Projects = () => {
  return (
    <>
      <div className="TopPartProjects">
        <h1 className="Projects">Projets</h1>
      </div>
      <div className="ProjectsGrid">
        {Data.projects.map((project) => (
          <div key={project.id}>
            <img
              className="CardImage"
              src={project.image}
              alt={project.title}
            />
            <div className="CardTextDiv">
              <h2 className="CardTitle">{project.title}</h2>
              <p className="LanguagesUsed">
                <div className="Langs">
                  {project.usedLanguages.map((usedLanguage) => (
                    <div>{usedLanguage}</div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
