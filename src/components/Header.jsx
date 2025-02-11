import React from "react";

const Header = () => {
  let HeaderData = {
    eyecatcher: "Aspiring Web Developer",
    main: "Hey there! I'm Dmitrie Gorobcov",
    second:
      "Ma motivation réside dans ma capacité à apprendre vite, m’adapter et contribuer efficacement ; investir en moi, c’est miser sur un talent réactif et autonome, prêt à relever tous les défis.",
  };

  return (
    <>
      <div className="Header">
        <div className="HeaderTextDiv">
          <h2>{HeaderData.eyecatcher}</h2>
          <h1>{HeaderData.main}</h1>
          <p>{HeaderData.second}</p>
          <button className="HeaderButton">contactez-moi</button>
        </div>
        <div className="MarioImgDiv">
          <img src="" className="Mario" alt="Me" />
        </div>
      </div>
      <hr className="HeaderHR" />
    </>
  );
};

export default Header;
