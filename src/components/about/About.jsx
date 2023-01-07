import React from 'react'
import './about.css'
import myImg from '../../img/me.png'
import leaf from '../../img/logo2.png'

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={myImg} alt='' className='a-img' />
        </div>
        <img src={leaf} alt='' className='a-leaf' />
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
        As a full stack developer, I have a passion for creating intuitive and engaging web experiences. With a strong foundation in both front-end and back-end development, I am able to design and develop complete web applications from start to finish. My expertise in technologies such as HTML, CSS, JavaScript, React, Vue and Python allows me to craft beautiful and functional user interfaces, while my experience with database design and management ensures that the underlying infrastructure is efficient and reliable. Whether working independently or as part of a team, I am always eager to take on new challenges and push the boundaries of what is possible with web development. I am excited to bring my skills and passion to your organization and contribute to the success of your projects.
        </p>
        <h3 className='a-desc'>
          <span className='p1-topic'>Hard Skills: </span>
          UX and UI design, Project management, Web frameworks, API design, Troubleshooting and testing skills, Database management, User requirements gathering, Agile.
        </h3>
        <h3 className='a-desc'>
          <span className='p1-topic'>Soft Skills: </span>
          Decision making, Multitasking, Problem solving, Self-motivation, Time management, Work ethic, Attention to detail.
        </h3>
      </div>
    </div>
  )
}

export default About
