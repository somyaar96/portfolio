import React from 'react'
import './project5.css'
import p5_1 from '../img/p5-1.png'
import p5_2 from '../img/p5-2.png'
import p5_3 from '../img/p5-3.png'
import p5_4 from '../img/p5-4.png'
import p5_5 from '../img/p5-5.png'
import p5_6 from '../img/p5-6.png'
import p5_7 from '../img/p5-7.png'
import p5_8 from '../img/p5-8.png'
import p5_9 from '../img/p5-9.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl2 from '../img/fl2.png'
import fl3 from '../img/fl3.png'
import fl5 from '../img/fl5.png'
import leaf1 from '../img/leaf1.png'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Project5 = () => {
  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project1');
  };

  const navigateToHomePage = () => {
    navigate('/');
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='p1'>
      <img src={fl1} alt='' className='fl1'></img>
      <img src={leaf2} alt='' className='leaf2'></img>
      <div className='p1-head'>
        <h3 className='p1-number'>Project 5</h3>
        <h1 className='p1-heading'>Duck Simulator Application using Kotlin</h1>
        <img src={p5_1} alt='' className='p5_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          A Duck Simulation Application using design patterns and Kotlin
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          Kotlin, Design Patterns, IntelliJ Idea IDE, Java Swing, Java AWT
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a duck simulation application that enables us to create ducks and make them fly, quack, join welcome committee, create a flock, capture or delete them.<br/>
        </p>
        <p className='p1-main-body'>This application uses Kotlin language and common design patterns like Strategy, Decorator, Factory, Adapter, Observer and Composite pattern, It is based on an example from HeadFirst Design Patterns book. The GUI has been designed using Java Swing and Java AWT.
        </p>
        <br/>
        <p className='p1-main-body'>To add a new duck, we need to click on the plus button, a dialog box will appear where we can select the type of duck and its decorations like crosses, moons and stars.
        </p>
        <img src={p5_2} alt='' className='p5_img2'></img>
        <img src={p5_3} alt='' className='p5_img2'></img>
        <p className='p1-main-body'>We can see different menu options by right clicking on any duck. The fly option will make the bird fly for 2 seconds, quack option will display the sound of the bird on screen for 2 seconds, Join DSWC will allow the bird to join the welcoming committee, Capture shown by small red X on duck will not allow the duck to fly or quack and and Delete option will delete the duck.
        </p><br/>
        <p className='p1-main-body'>Mallard duck and Redhead duck can fly and 'Quack' when not captured. Goose can fly and 'Honk' when not captured, rubber duck can only 'Squeak' and not fly and decoy duck can niether fly nor quack. When we click on a duck, its colour changes to its appropriate colour. For example, Mallard duck is green, Redhead duck is red and so on. 
        </p>
        <img src={p5_4} alt='' className='p5_img2'></img>
        <img src={p5_5} alt='' className='p5_img2'></img>
        <img src={p5_6} alt='' className='p5_img2'></img>
        <p className='p1-main-body'> A flock of ducks can be created by selecting the ducks and clicking on the plus button. A flock will fly and have the sound as 'Noise' when not captured. The ducks can be individually captured or relasead or can be captured by capturing the flock i.e. if a flcok is captured, all the ducks inside that flock will be captured. But they can be released individually. Similarly, if a flock joins the Duck welcoming committee, all the ducks inside that flock will become members of the welcoming committee. But they can quit the committee individually.
        </p>
        <img src={p5_7} alt='' className='p5_img2'></img>
        <img src={p5_8} alt='' className='p5_img2'></img>
        <p className='p1-main-body'> If a new duck is added, all the ducks in the welcoming committee that are not captured will show 'Welcome' message and the ducks that are captured will show 'Beware' message.
        </p>
        <img src={p5_9} alt='' className='p5_img2'></img>
        <p className='p1-main-body'>I have used Strategy pattern to encapsulate flying behavior and quacking behavior of the ducks by creating interfaces. The Factory pattern handles creation of all ducks and the Decorator pattern is used to add stars, moons and crosses to ducks. I have used Adapter pattern to add Goose class with a different structure to existing application. I have created Subject and Observer interfaces to implement the observer pattern. The Subject interface has methods registerObserver, removeObserver, and notifyObservers and the Observer interface has the update method. The duck factory is the subject and the ducks are the potential observers. When a new duck joins the DuckSim Welcoming Committee (DSWC) it registers with the duck factory so that when a new duck is created a Welcome message appears above the DSWC members' name and a Beware message appears on captured ducks. The Composite pattern is used to create a flock of ducks.
        </p>
        <img src={fl2} alt='' className='p5_fl2'></img>
        <img src={leaf1} alt='' className='p4_leaf1'></img>
        <img src={fl5} alt='' className='p4_fl5'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project5
