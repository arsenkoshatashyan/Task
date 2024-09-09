import React from "react";
import "./Cards.scss";


const cards = [
  {
    id: 1,
    image: "./images/card6.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    
  },
  {
    id: 2,
    image: "./images/card5.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
  },
  {
    id: 3,
    image: "./images/card4.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
  },
  {
    id: 4,
    image: "./images/card3.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
  },
  {
    id: 5,
    image: "./images/card2.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
  },
  {
    id: 6,
    image: "./images/card1.png",
    title: "Project Tile goes here",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
  },
];

export default function Cards() {
  return (
    <div className="Cards">
      <div className="Cards__content">
        <div className="Cards__title">
          <h2>Projects</h2>
          <p> Things I’ve built so far</p>
        </div>
        <div className="Cards__block">
          {cards.map((elem) => {
            return (
              <div className="Cards__block-content" key={elem.id}>
                <img src={elem.image} alt="img" />
                <h2>{elem.title}</h2>
                <h3>{elem.desc}</h3>
                <p>{elem.stack}</p>
                <p>{elem.link}</p>
                <div className="Cards__desc">
                <div>
                    <img src="./images/img1.svg" alt="" />
                    <a>Live Preview</a>
                </div>
                <div>
                    <img src="./images/img2.svg" alt="" />
                    <a>View Code</a>
                    
                </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
