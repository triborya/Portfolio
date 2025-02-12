import React from "react";
import "../assets/css/Footer.css";
import GH from "../assets/images/GitHubLogo.svg";
import LI from "../assets/images/LinkLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="FooterMainDiv">
        <div className="LeftPart">
          <h1 className="FooterTitle">Contact</h1>
          <p className="FooterText">
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. Remplissez le formulaire et je vous répondrai dès que
            possible. dans les plus brefs délais.
          </p>
        </div>
        <div className="Form">
          <form>
            <label htmlFor="nameInput">NAME</label>
            <br />
            <input type="text" id="nameInput" name="fname" />
            <br />
            <label htmlFor="mailInput">EMAIL</label>
            <br />
            <input type="text" id="mailInput" name="lname" />
            <br />
            <textarea id="TextArea" name="lname" />
          </form>
          <button className="FooterBtn">envoyer</button>
        </div>
      </div>
      <span>
        <hr className="FooterHR" />
      </span>
      <div className="FooterBottom">
        <h2 className="AuthorFooter">
          Dmitrie <br />
          Gorobcov
        </h2>
        <div className="logoFooterDiv">
          <img src={GH} alt="GH" />
          <img src={LI} alt="lIn" />
        </div>
      </div>
    </>
  );
};

export default Footer;
