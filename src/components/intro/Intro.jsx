import React from 'react'
import "./intro.css"
import heroImg2 from "../../img/fl2.png"
import heroImg1 from "../../img/fl1.png"
import heroImg3 from "../../img/leaf1.png"

export default function Intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <img src={heroImg1} alt='' className='i-img1' />  
        <img src={heroImg3} alt='' className='i-img3' />  
      </div>
      <div className="i-center">
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, my name is</h2>
            <h1 className='i-name'>Somyaa Rastogi</h1>
            <div className='i-title'>
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Frontend Developer</div>
                    <div className="i-title-item">Backend Developer</div>
                    <div className="i-title-item">Fullstack Developer</div>
                </div>
            </div>
            <div className='i-desc'>
              A Full-stack Web Developer with experience in both frontend and backend development intent on building beautiful applications with excellent user experiences. 
            </div>
        </div>
      </div>
      <div className="i-right">
        <img src={heroImg2} alt='' className='i-img' />
      </div>
    </div>
  )
}