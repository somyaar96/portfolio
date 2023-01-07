import React from 'react'
import './project2.css'
import p2_1 from '../img/p2-1.png'
import p2_2 from '../img/p2-2.png'
import p2_3 from '../img/p2-3.png'
import p2_4 from '../img/p2-4.png'
import p2_5 from '../img/p2-5.png'
import p2_6 from '../img/p2-6.png'
import p2_7 from '../img/p2-7.png'
import p2_8 from '../img/p2-8.png'
import p2_9 from '../img/p2-9.png'
import p2_10 from '../img/p2-10.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl2 from '../img/fl2.png'
import fl3 from '../img/fl3.png'
import fl5 from '../img/fl5.png'
import fl7 from '../img/fl7.png'
import leaf1 from '../img/leaf1.png'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Project2 = () => {
  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project3');
  };

  const navigateToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='p2'>
      <img src={fl1} alt='' className='fl1'></img>
      <img src={leaf2} alt='' className='leaf2'></img>
      <div className='p2-head'>
        <h3 className='p2-number'>Project 2</h3>
        <h1 className='p2-heading'>E-commerce Makeup Web Application</h1>
        <img src={p2_1} alt='' className='p2_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          An e-commerce application that deals with selling makeup from multiple brands.
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          HTML5, Tailwind CSS, React.js, React hooks, COnstext API, Axios 
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a single-page application with reusable components using React.js framework, React hooks, context API and Tailwind CSS to show makeup in from different brands. 
        </p>
        <p className='p1-main-body'>The homepage has a header with logo designed by me, followed by banner images and buttons that route the user to products page. Then, we have a few recommended products that change every time the page is refreshed. These products are fetched directly using the API. These are followed by few more banners and unique seliing points and a footer.
        </p>
        <img src={p2_2} alt='' className='p2_img13'></img>
        <img src={fl2} alt='' className='p4_fl2'></img>
        <img src={leaf1} alt='' className='p2_leaf1'></img>
        <img src={fl5} alt='' className='p4_fl5'></img>
        <img src={fl3} alt='' className='p2_fl3'></img>
        <img src={fl7} alt='' className='p2_fl7'></img>
        <p className='p1-main-body'>The About page tells a little bit about the brand and the company.
        </p>
        <img src={p2_3} alt='' className='p2_img14'></img>
        <p className='p1-main-body'>The products page uses API - https://makeup-api.herokuapp.com/ to display products available. It provides the product image, brand name, price, description, tags, ratings and more.
        </p>
        <img src={p2_6} alt='' className='p2_img2'></img>
        <img src={p2_7} alt='' className='p2_img2'></img>
        <img src={p2_8} alt='' className='p2_img2'></img>
        <img src={p2_9} alt='' className='p2_img2'></img>
        <p className='p1-main-body'>Customer can view all the products or filter them based on product type or price range.
        </p>
        <img src={p2_10} alt='' className='p2_img14'></img>
        <p className='p1-main-body'>When the customer clicks on a particular product, the product page shows all the details of that product along with recommendations for similar products.
        </p>
        <img src={p2_4} alt='' className='p2_img14'></img>
        <img src={p2_5} alt='' className='p2_img14'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project2
