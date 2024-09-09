import React from 'react'
import "./Nav.scss"

export default function Nav() {
  return (
    <div className='Nav'>
        <div className="Nav__content">
        <div className="Nav__img">
            <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="Nav__navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="Nav__logo">
            <img src="./images/1.png" alt="" />
            <img src="./images/2.png" alt="" />
            <img src="./images/3.png" alt="" />

        </div>
        </div>
    </div>
  )
}
