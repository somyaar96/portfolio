import React from 'react'
import './project4.css'
import p4_2 from '../img/p4-2.png'
import p4_3 from '../img/p4-3.png'
import p4_4 from '../img/p4-4.png'
import p4_5 from '../img/p4-5.png'
import p4_6 from '../img/p4-6.png'
import p4_7 from '../img/p4-7.png'
import p4_8 from '../img/p4-8.png'
import p4_9 from '../img/p4-9.png'
import p4_10 from '../img/p4-10.png'
import p4_11 from '../img/p4-11.png'
import p4_12 from '../img/p4-12.png'
import p4_13 from '../img/p4-13.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl2 from '../img/fl2.png'
import fl3 from '../img/fl3.png'
import fl5 from '../img/fl5.png'
import leaf1 from '../img/leaf1.png'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Project4 = () => {

  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project6');
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
        <h3 className='p1-number'>Project 4</h3>
        <h1 className='p1-heading'>Social Media Web Application</h1>
        <img src={p4_8} alt='' className='p1_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          A responsive social media application capable of sharing photos, videos, and status updates and supports dark/light mode.
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          HTML5, CSS, JavaScript, React hooks, Context API, Node.js, JWT, MySQL workbench, Express.js, Insomnia, Axios, Material UI, Chrome Developer tools
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a social media application that enables users to share and delete photos and status updates, stories, like and comment on posts and follow and unfollow other users. The pages like register page, login page, homepage and personal profile page and components like navbar, leftbar, rightbar, center feed are developed using React.js. I have used React-router-dom for routing between pages without reloading the page to create a seamless and smooth user experience.<br/><br/>
        </p>
        <p className='p1-main-body'>The login page and register page are shown below. If a user does not exixt in the MySQL database and tries to login, an appropriate message is shown stating that user does not exist and is re-routed to register page. Once, the user registers, they can login using username and password. These credentials are checked with the ones stored in database using RESTful APIs and express.js. The user authentication APIs for signup and login are integrated with JSON Web Token in Node.js, CORS and Cookie-parse to secure endpoints. On the client side, I have used Axios for sending Http requests from client side for consuming the APIs. I have used Insomnia application for testing the APIs.
        </p>
        <img src={p4_2} alt='' className='p1_img2'></img>
        <img src={p4_3} alt='' className='p1_img2'></img>
        <img src={p4_10} alt='' className='p1_img2'></img>
        <p className='p1-main-body'>Once logged in, user can see all the posts, stories, comments and other activities shared by users that they are following. The user can follow/ unfollow users in suggestions in the rightbar, share status updates and upload pictures from personal computer. They can delete the post, or comment on posts and like them. 
        </p><br/>
        <p className='p1-main-body'>I have implemented fetching, synchronising, and updating posts in user’s feed using React-query on the frontend making application maintainable. The posts, comments, likes, creation time and user name information are fetched from MySQL database useing RESTful APIs. I have used node.js based middlesware called Multer for uploading files from user desktop and JavaScript library called Moment for displaying date and time in the posts.
        </p>
        <img src={p4_8} alt='' className='p1_img2'></img>
        <img src={p4_4} alt='' className='p1_img2'></img>
        <img src={p4_5} alt='' className='p1_img2'></img>
        <img src={p4_6} alt='' className='p1_img2'></img>
        <img src={p4_9} alt='' className='p1_img2'></img>
        <p className='p1-main-body'> I have implemented dark/light mode functionality using Context API and browser local storage. User can turn on the dark mode by clicking on the moon in the navbar and turn off the dark mode by clicking on sun in the navbar. The browser local storage is used to store user choice throughout the period of activity and not resetted upon browser refresh.
        </p>
        <img src={p4_7} alt='' className='p1_img2'></img>
        <p className='p1-main-body'>User can click on any other user's name to see their profile page, personal details and follow/unfollow them.
        </p>
        <img src={p4_11} alt='' className='p1_img2'></img>
        <img src={fl2} alt='' className='p4_fl2'></img>
        <p className='p1-main-body'>The personal profile page will show the cover image, profile picture, personal details and we can update these by clicking on the update button. The user can change their profile picture, cover picture, change their name or password, add or edit personal information. 
        </p>
        <img src={p4_12} alt='' className='p1_img2'></img>
        <img src={p4_13} alt='' className='p1_img2'></img>
        <img src={leaf1} alt='' className='p4_leaf1'></img>
        <img src={fl5} alt='' className='p4_fl5'></img>
        <img src={fl3} alt='' className='p4_fl3'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project4
