import React from "react";
import "../assets/css/Footer.css";
import GH from "../assets/images/GitHubLogo.svg";
import LI from "../assets/images/LinkLogo.svg";
import ML from "../assets/images/MailLogo.svg";

const Footer = ({ senderRef }) => {
  return (
    <footer>
      <div className="FooterMainDiv">
        <div className="LeftPart">
          <h1 className="FooterTitle">Contact</h1>
          <p className="FooterText">
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. N'hésitez pas à me contacter.
          </p>
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
        <div className="logoFooterDiv" ref={senderRef} id="sender">
          <a href="mailto:gorobcovdmitrie@gmail.com" aria-label="Mail">
            <img src={ML} alt="Mail" />
          </a>
          <a
            href="https://github.com/triborya"
            target="_blank"
            aria-label="GitHub"
          >
            <img src={GH} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/dgorobcov/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src={LI} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
