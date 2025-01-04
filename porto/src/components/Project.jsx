import React from 'react';
import './Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const pro = [
  {
    name: 'Gym web landing',
    desp: 'The website is designed using HTML for structure and CSS for styling. It features a modern, responsive layout that adapts to various screen sizes. ',
    link: 'https://github.com/suvarnashukla1/gymwebsite.12',
    image: '/imgs/gym.png' 
  },
  {
    name: 'Whac-a-Mole',
    desp: 'The game is designed using HTML for the structure, CSS for styling, and JavaScript for functionality. The interface features bright colors and playful graphics, creating an engaging atmosphere.',
    link: 'https://whacamoleplay.netlify.app/',
    image: '/imgs/mole.png' 
  },
  {
    name: 'Drink Webpage',
    desp: 'The website is designed using HTML for structure, CSS for styling, and GSAP for animations. The layout features a modern, responsive design with vibrant colors that reflect the freshness of the drinks.',
    link: 'https://github.com/suvarnashukla1/Drinks',
    image: '/imgs/can.png' 
  },
  {
    name: 'Dice Game',
    desp: 'The game is built using React.js for its component-based architecture, making it easy to manage the state and update the UI dynamically.',
    link: 'https://luminous-gaufre-22af2b.netlify.app/',
    image: '/imgs/dice.png' 
  },
];

const Project = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };

  return (
    <div>
      <div className="ph">Projects</div>
      <div className="project-container">
        <Slider {...settings}>
          {pro.map((d, index) => (
            <div className="ana" key={index}>
              <div className="pro">
                <div className="headi">
                  <h3>{d.name}</h3>
                  <img src={d.image}  className="imi" />
                </div>
                 
                <div className="reve">
                  {d.desp}
                  <div>
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      <button className="view">View</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
