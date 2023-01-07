import React from 'react'
import './project6.css'
import p7_home from '../img/p7-home.png'
import p7_1 from '../img/p7-1.png'
import p7_2 from '../img/p7-2.png'
import p7_3 from '../img/p7-3.png'
import p7_4 from '../img/p7-4.png'
import p7_5 from '../img/p7-5.png'
import p7_6 from '../img/p7-6.png'
import p7_7 from '../img/p7-7.png'
import p7_8 from '../img/p7-8.png'
import p7_9 from '../img/p7-9.png'
import p7_10 from '../img/p7-10.png'
import p7_11 from '../img/p7-11.png'
import p7_12 from '../img/p7-12.png'
import p7_13 from '../img/p7-13.png'
import p7_14 from '../img/p7-14.png'
import p7_15 from '../img/p7-15.png'
import p7_16 from '../img/p7-16.png'
import p7_17 from '../img/paypal1.png'
import p7_18 from '../img/paypal2.png'
import p7_19 from '../img/paypal3.png'
import p7_20 from '../img/paypal4.png'
import p7_21 from '../img/paypal5.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl2 from '../img/fl2.png'
import fl2_rev from '../img/fl2-rev.png'
import fl3 from '../img/fl3.png'
import fl5 from '../img/fl5.png'
import fl6 from '../img/fl6.png'
import leaf1 from '../img/leaf1.png'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Project6 = () => {
  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project2');
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
        <h3 className='p1-number'>Project 6</h3>
        <h1 className='p1-heading'>Food Ordering Application</h1>
        <img src={p7_home} alt='' className='p7_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          A responsive food ordering application capable of adding new products, update orders and receive payments.
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          HTML5, CSS, JavaScript, React.js, React-redux, MongoDb, Next.js, Visual Studio Code IDE, Paypal, Mongoose, Postman, Axios, Cookies, Cloudinary.
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a pizza store application with reusable components for home page with all products, product page, cart page, payment page and order confirmation page using React.js, Next.js and used MongoDb database for storing order details and product details. I have built RESTful APIs with next.js for creating new products, fetching product details, and tested using Postman application. I have also implemented cart state management using React Redux and integrated Paypal payment using react-paypal-js. Lastly, I have designed and implemented an Admin page to add new products, edit existing products and monitor the placed orders.
        <br/><br/>
        The homepage has a header with logo designed by me and some menu buttons and a cart button. The header is followed by all the pizza options available in the store along with description and price.
        </p>
        <img src={p7_1} alt='' className='p7_img2'></img>
        <p className='p1-main-body'>To know more about the ingredients, price and add to cart option for pizza, user needs to click on the pizza and will be routed to the product page. On the product page, user can select size of the pizza which will change the price accordingly and also select optional toppings for additional price. They can select the quntity and click on Add to cart. The cart quantity will show that the pizza is added on the right top corner.
        </p>
        <img src={p7_2} alt='' className='p7_img3'></img>
        <img src={p7_3} alt='' className='p7_img3'></img>
        <img src={p7_4} alt='' className='p7_img3'></img>
        <p className='p1-main-body'>We can see the cart contents by clicking on the cart icon in header. It will route to cart page. On the cart page, we can see the pizza image, extra toppings selected, price per pizza, quantity and the total price per item. It also shows the cart total and we can pay wither by cash on delivery or online via Paypal.
        </p>
        <img src={p7_5} alt='' className='p7_img3'></img>
        <img src={p7_6} alt='' className='p7_img3'></img>
        <p className='p1-main-body'>When we click on Cash on Delivery option, a dialog box will open to take personal information needed to make delivery from the customer.
        </p>        
        <img src={p7_7} alt='' className='p7_img4'></img>
        <p className='p1-main-body'> But if we click on Paypal to make payment online, we will be routed to this payemnt page.
        </p>
        <img src={p7_19} alt='' className='p7_img4'></img>
        <p className='p1-main-body'> When the payment is made, customer can see money debited from their paypal account and the merchant can see money deposited in their paypal account.
        </p>
        <img src={p7_20} alt='' className='p7_img4'></img>
        <img src={p7_21} alt='' className='p7_img5'></img>
        <p className='p1-main-body'> Once the payment is confirmed, the placed order will be stored in MongoDB and the customer is routed to order confirmation page where they can check the status of their order.
        </p>
        <img src={p7_9} alt='' className='p7_img4'></img>
        <img src={p7_10} alt='' className='p7_img4'></img>
        <p className='p1-main-body'> I have also designed an admin panel which will allow the admin to add new pizzas, edit information of existing pizzas like price, description, toppings etc. and also delete any pizzas. Admin will also be able to monitor the progress of orders placed and can change teh status or orders to reflect on customer's confirmation page.
        </p>
        <img src={p7_11} alt='' className='p7_img4'></img>
        <img src={p7_12} alt='' className='p7_img5'></img>
        <img src={p7_13} alt='' className='p7_img6'></img>
        <img src={p7_15} alt='' className='p7_img6'></img>     
      
        <p className='p1-main-body'> Admin can add new pizzas by clicking on Add New Pizza button on home page. The information entered will be stored in MongoDB using RESTful API. I have create APIs and tested them using Postman Application.
        </p>
        <img src={p7_16} alt='' className='p7_img6'></img>   
        <img src={p7_8} alt='' className='p7_img4'></img>
        <img src={p7_14} alt='' className='p7_img6'></img>

        <img src={fl2} alt='' className='p5_fl2'></img>
        <img src={leaf1} alt='' className='p7_leaf1'></img>
        <img src={fl2_rev} alt='' className='p7_fl2_rev'></img>
        <img src={fl2} alt='' className='p7_fl2'></img>
        <img src={fl5} alt='' className='p4_fl5'></img>
        <img src={fl6} alt='' className='p7_fl6'></img>
        <img src={fl6} alt='' className='p7_fl6_a'></img>
        <img src={fl6} alt='' className='p7_fl6_aa'></img>
        <img src={fl2} alt='' className='p7_fl2_a'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project6