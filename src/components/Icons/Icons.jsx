import React from "react";
import "./Icons.scss";

const icons = [
  {
    id: 1,
    image: "./images/88.svg",
  },
  {
    id: 2,
    image: "./images/77.svg",
  },
  {
    id: 3,
    image: "./images/99.svg",
  },
  {
    id: 4,
    image: "./images/55.svg",
  },
  {
    id: 5,
    image: "./images/Vector.png",
  },
  {
    id: 6,
    image: "./images/33.svg",
  },
  {
    id: 7,
    image: "./images/1010.svg",
  },
  {
    id: 8,
    image: "./images/66.svg",
  },
  {
    id: 9,
    image: "./images/44.svg",
  },
  {
    id: 10,
    image: "./images/22.svg",
  },
  {
    id: 11,
    image: "./images/1111.svg",
  },
  {
    id: 12,
    image: "./images/11.svg",
  },
];

export default function Icons() {
  return (
    <div className="Icons">
      <div className="Icons__content">
        <div className="Icons__title">
          <h2>My Tech Stack</h2>
          <p> Technologies I’ve been working with recently</p>
        </div>
        <div className="Icons__block">
          {icons.map((elem) => {
            return (
                <img src={elem.image} alt="" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
