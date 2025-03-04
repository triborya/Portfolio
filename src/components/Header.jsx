import React from "react";
import "../assets/css/Header.css";
import TempImage from "../assets/images/EifelTower.png";

const HeaderData = {
  eyecatcher: "Aspiring Web Developer",
  main: "Hey there! I'm Dmitrie Gorobcov",
  second:
    "Ma motivation réside dans ma capacité à apprendre vite, m’adapter et contribuer efficacement ; investir en moi, c’est miser sur un talent réactif et autonome, prêt à relever tous les défis.",
};

const Header = ({ senderRef }) => {
  const scrollToSender = () => {
    if (senderRef.current) {
      senderRef.current.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        senderRef.current.classList.add("glow");

        setTimeout(() => {
          senderRef.current.classList.remove("glow");
        }, 3000);
      }, 1000);
    }
  };

  return (
    <>
      <div className="Header">
        <div className="HeaderTextDiv">
          <h2>{HeaderData.eyecatcher}</h2>
          <h1>{HeaderData.main}</h1>
          <p>{HeaderData.second}</p>
          <button onClick={scrollToSender} className="HeaderButton">
            contactez-moi
          </button>
        </div>
        <div className="MarioImgDiv">
          <img src={TempImage} className="Mario" alt="Me" />
        </div>
      </div>
      <hr className="HeaderHR" />
    </>
  );
};

export default Header;
