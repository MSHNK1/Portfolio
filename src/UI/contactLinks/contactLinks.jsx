import React from "react";
import "./contactLinks.css";

function ContactLinks(props) {
  return (
    <div className={`contacts flex mb-3${props.center ? props.center : " mb-10"}`}>
      <a href="https://www.linkedin.com/in/nikakochkiani/" target="_blank" aria-label="Link of LinkedIn">
        {/* <i className="fa fa-linkedin-square"></i> */}
        <i className="fa">&#xf08c;</i>
      </a>
      <a href="https://github.com/MSHNK1" target="_blank" aria-label="Link of GitHub">
        <i className="fa fa-github-square"></i>
      </a>
      <a href="https://twitter.com/KochkianiNika" target="_blank" aria-label="Link of Twitter">
        <i className="fa fa-twitter-square"></i>
      </a>
      <a href="https://www.facebook.com/nika.kochkiani" target="_blank" aria-label="Link of Facebook">
        <i className="fa fa-facebook-square"></i>
      </a>
    </div>
  );
}

export default ContactLinks;
