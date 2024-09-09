import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__img">
          <img src="./images/logo2.svg" alt="logo" />
        </div>
        <div className="Footer__contact">
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
        </div>
        

        <div className="Footer__logo">
          <img src="./images/group.png" alt="" />
        </div>
        
      </div>
      <div className="Footer__contacts">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Technologies</li>
                <li>Proojects</li>
                <li>Contact</li>
            </ul>
            <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
        </div>
      
    </div>
  );
}
