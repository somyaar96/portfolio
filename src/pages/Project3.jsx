import React from 'react'
import './project3.css'
import p3_1 from '../img/p3-1.png'
import p3_2 from '../img/p3-2.png'
import p3_8 from '../img/p3-8.png'
import p3_9 from '../img/p3-9.png'
import p3_10 from '../img/p3-10.png'
import p3_11 from '../img/p3-11.png'
import p3_12 from '../img/p3-12.png'
import p3_13 from '../img/p3-13.png'
import p3_14 from '../img/p3-14.png'
import p3_15 from '../img/p3-15.png'
import p3_16 from '../img/p3-16.png'
import p3_17 from '../img/p3-17.png'
import p3_18 from '../img/p3-18.png'
import p3_19 from '../img/p3-19.png'
import p3_20 from '../img/p3-20.png'
import p3_21 from '../img/p3-21.png'
import p3_22 from '../img/p3-22.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl5 from '../img/fl5.png'
import fl2 from '../img/fl2.png'
import fl2_rev from '../img/fl2-rev.png'
import fl6 from '../img/fl6.png'
import fl7 from '../img/fl7.png'
import leaf1 from '../img/leaf1.png'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Project3 = () => {
  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project5');
  };

  const navigateToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='p3'>
      <img src={fl1} alt='' className='fl1'></img>
      <img src={leaf2} alt='' className='leaf2'></img>
      <div className='p2-head'>
        <h3 className='p2-number'>Project 3</h3>
        <h1 className='p2-heading'>Fullstack E-commerce Clothing Store</h1>
        <img src={p3_1} alt='' className='p2_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          An e-commerce application that deals with selling clothes from multiple brands.
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          HTML5, CSS, JavaScript, Node.js, Firebase, Cloud database, Bcrypt, AWS, Amazon S3, CORS
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a fullstack web application using HTML, CSS and JavaScript to show products from multiple brands. 
        </p>
        <p className='p1-main-body'>The homepage has a header with logo designed by me, a search bar and user and cart button. Followed by a navigation bar, there is a hero image and a scrolling effect for showing the best selling products. There are also other products and a footer.
        </p>
        <img src={p3_2} alt='' className='p2_img3'></img>
        <p className='p1-main-body'>The customer can log in by clicking on the user button in Header and can log in by entering the email and password entered while registering. There are appropriate client side validations for all fields. Once logged in, customer will be redirected to the homepage.
        </p>
        <img src={p3_8} alt='' className='p2_img2'></img>
        <img src={p3_9} alt='' className='p2_img2'></img>
        <img src={p3_10} alt='' className='p2_img2'></img>
        <img src={p3_13} alt='' className='p2_img2'></img>
        <p className='p1-main-body'>If the customer is a new user, they can register using the register page as shown. All the fields have appropriate client side validations. When all the entered information is correct, the user credentials are stored in firebase which is a cloud database. The password is encrypted using bcrypt library for node.js and stored in the database.
        </p>
        <img src={p3_11} alt='' className='p2_img2'></img>
        <img src={p3_12} alt='' className='p2_img2'></img>
        <img src={p3_22} alt='' className='p2_img2'></img>
        <p className='p1-main-body'>Customer can click on any product and be directed to the product page. The product page shows images of the product along with brand, size and price information. User can click on different images to see and enlarged view, add the product to cart or to wishlist. There are also similar product recommendations for the customer.
        </p>
        <img src={p3_19} alt='' className='p2_img4'></img>
        <p className='p1-main-body'>The cart and wishlist can be viewed by clicking on the cart icon in the header. On the cart page, the quantity of the items in cart can be changed and products can be removed from cart or wishlist. 
        </p>
        <img src={p3_20} alt='' className='p2_img5'></img>
        <p className='p1-main-body'>On the checkout page, customer is required to fill personal information like address and pincode before placing the order. Once the order is placed, the order information i.e. the address and the cart items are stored in firebase database.
        </p>
        <img src={p3_21} alt='' className='p2_img2'></img>
        <p className='p1-main-body'>To add new products, the user will have to become a seller by clicking on Apply for seller account anf filling out the form. The information of sellers will be stored in firebase database. After this, sellers can add new products by clicking on the Add Product button.
        </p>
        <img src={p3_14} alt='' className='p2_img2'></img>
        <img src={p3_15} alt='' className='p2_img2'></img>
        <img src={p3_16} alt='' className='p2_img2'></img>
        <p className='p1-main-body'>The add product button will redirect the seller to the form shown below where seller can add all the inlormation regarding the products like images, size, brand, color and more. The product images uploaded here are stored in Amazon S3 buckets.
        </p>
        <img src={p3_17} alt='' className='p2_img6'></img>
        <p className='p1-main-body'>I have also designed a 404 Not Found page which will be dispayed whenever user enters any invalid path.
        </p>
        <img src={p3_18} alt='' className='p2_img5'></img>
        <img src={leaf1} alt='' className='p3_leaf1'></img>
        <img src={fl2} alt='' className='p3_fl2'></img>
        <img src={fl6} alt='' className='p3_fl6'></img>
        <img src={fl7} alt='' className='p3_fl7'></img>
        <img src={fl6} alt='' className='p3_fl6_a'></img>
        <img src={fl5} alt='' className='p3_fl5'></img>
        <img src={fl2_rev} alt='' className='p3_fl2_rev'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project3

