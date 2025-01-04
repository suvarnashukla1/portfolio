import React from 'react';
import './Skills.css'; 

const Skills = () => {

    const skills = [
        { name: 'HTML', logo: '/imgs/html.png' },
        { name: 'CSS', logo: '/imgs/css.png' },
        { name: 'JavaScript', logo: '/imgs/js.png' },
        { name: 'React', logo: '/imgs/imagere.png' },
        { name: 'Node.js', logo: '/imgs/nodejs.png' },
        { name: 'Python', logo: '/imgs/py.webp' },
        { name: 'Java', logo: '/imgs/java.png' },
        { name: 'C++', logo: '/imgs/cpp.png' },
        { name: 'Express', logo: '/imgs/express.webp' },
        { name: 'Tailwind', logo: '/imgs/tail.png' },
        { name: 'Bootstrap', logo: '/imgs/boot.png' }
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-row"> 
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                    </div>
                ))}
                <div className="front" id="ft">
                    <img src="/imgs/fron.png" width ="50px" alt="FrontEnd Icon" className="corner-icon" />
                    <h1 className="th">FrontEnd</h1>
                    <p>Built a gym website, drinks webpage, and a simple game using Tailwind, React, and Bootstrap.</p>
                </div>
                <div className="front" id="bt">
                    <img src="/imgs/backe.png" width ="50px" alt="BackEnd Icon" className="corner-icon" />
                    <h1 className="th">BackEnd</h1>
                    <p>Actively learning Express.js and Node.js to build server-side applications and RESTful APIs.</p>
                </div>
                <div className="front">
                    <img src="/imgs/soft.png" width ="50px" alt="SoftSkills Icon" className="corner-icon" />
                    <h1 className="th">Soft-Skills</h1>
                    <p>Excellent at teamwork and time management, consistently meeting deadlines and project milestones.</p>
                </div>
                <div className="front">
                    <img src="/imgs/pr.png" width ="50px" alt="Problem-Solving Icon" className="corner-icon" />
                    <h1 className="th">Problem-Solving</h1>
                    <p>Solved over 100 questions across platforms, actively learning and improving algorithmic skills.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
