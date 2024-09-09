import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__content">
        <div className="Header__title">
          <h1>
            Hi 👋, <br />
            My name is <br />
            <span>Pavan MG</span> <br />I build things for web
          </h1>
        </div>
        <div className="Header__logo">
          <img src="./images/person.png" alt="" />
        </div>
      </div>
    </div>
  );
}
