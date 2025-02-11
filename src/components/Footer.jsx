import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerMainDiv">
        <div className="leftPart">
          <h1 className="FooterTitle">Contact</h1>
          <p className="footerText">
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. Remplissez le formulaire et je vous répondrai dès que
            possible. dans les plus brefs délais.
          </p>
        </div>
        <div className="form">
          <form>
            <label htmlFor="nameInput">NAME</label>
            <br />
            <input type="text" id="nameInput" name="fname" />
            <br />
            <label htmlFor="mailInput">EMAIL</label>
            <br />
            <input type="text" id="mailInput" name="lname" />
            <br />
            <textarea id="textArea" name="lname" />
          </form>
          <button className="footerBtn">envoyer</button>
        </div>
      </div>
      <span>
        <hr className="footerHR" />
      </span>
      <div className="footerBottom">
        <h2 className="authorFooter">
          Dmitrie <br />
          Gorobcov
        </h2>
        <div className="logoFooterDiv">
          <img src="" alt="GH" />
          <img src="" alt="lIn" />
        </div>
      </div>
    </>
  );
};

export default Footer;
