import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="profile-container">
    <div className="text-content">
      <h1>I'm a Full Stack Developer</h1>
      <p>
      I am a full-stack developer skilled in both front-end and back-end technologies. I create engaging user interfaces with HTML, CSS, and JavaScript, while implementing robust server-side logic using Node.js and Python. My expertise includes building RESTful APIs and managing databases, with experience in React.js for dynamic front-end development. With a passion for problem-solving, I stay updated with industry trends to deliver high-quality web applications.
      </p>
      
    </div>
    <div className="photo-content">
      <img src="imgs/kitty.gif" alt="Full Stack Developer" className="profile-photo" />
    </div>
  </div>
  )
}

export default Hero
