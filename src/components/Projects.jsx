import React from "react";
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
              className="cardImage"
              src={project.image}
              alt={project.title}
            />
            <div className="cardTextDiv">
              <h2 className="cardTitle">{project.title}</h2>
              <p className="languagesUsed">
                <div className="lags">
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
