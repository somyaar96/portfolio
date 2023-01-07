import React from 'react'
import './project1.css'
import p1_1 from '../img/p1-1.png'
import p1_2 from '../img/p1-2.png'
import p1_3 from '../img/p1-3.png'
import p1_4 from '../img/p1-4.png'
import p1_5 from '../img/p1-5.png'
import p1_6 from '../img/p1-6.png'
import p1_7 from '../img/p1-7.png'
import p1_8 from '../img/p1-8.png'
import p1_9 from '../img/p1-9.png'
import p1_10 from '../img/p1-10.png'
import fl1 from '../img/fl1.png'
import leaf2 from '../img/leaf2.png'
import fl2 from '../img/fl2.png'
import leaf1 from '../img/leaf1.png'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Project1 = () => {
  const navigate = useNavigate();

  const navigateToNextProject = () => {
    navigate('/project4');
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
        <h3 className='p1-number'>Project 1</h3>
        <h1 className='p1-heading'>E-commerce Bookstore Web Application</h1>
        <img src={p1_1} alt='' className='p1_img1'></img>
      </div>
      <div className="p1-description">
        <h3 className='p1-desc'>
          <span className='p1-topic'>Description: </span>
          An e-commerce application that deals with selling multiple category based books.
        </h3>
        <h3 className='p1-desc'>
          <span className='p1-topic'>Technologies: </span>
          HTML5, CSS, VUE Js, Apache Tomcat Server, MySQL, IntelliJ Idea IDE, TypeScript, Pinia, Chrome developer tools
        </h3>
      </div>
      <div className="p1-main">
        <p className='p1-main-body'>In this project, I have developed a single-page application with reusable components using Vue.Js framework and TypeScript to show books in multiple categories. 
        </p>
        <p className='p1-main-body'>The homepage has a header with logo designed by me, a search bar and a categories drop down menu showing all the categories available. Followed by a navigation bar, there is a hero image and a Call-to-action button and a few CSS animations. Lastly there is a footer.
        </p>
        <img src={p1_2} alt='' className='p1_img2'></img>
        <img src={p1_3} alt='' className='p1_img2'></img>
        <p className='p1-main-body'>The categories displayed are fetched from MySQL database using RESTful APIs built by me in Java using DAO patterns, Jersey framework and Jackson library. The books displayed for each category are also fetched using APIs. An example of APIs is as follows:
        </p>
        <table>
          <th>
            <td>API</td>
            <td>Action</td>
          </th>
          <tr>
            <td>api/categories</td>
            <td>all categories</td>
          </tr>
          <tr>
            <td>api/categories/name/Mystery</td>
            <td>category id for Mystery category</td>
          </tr>
          <tr>
            <td>api/books/1001</td>
            <td>first book</td>
          </tr>
          <tr>
            <td>api/categories/name/Mystery/books</td>
            <td>all books from Mystery category</td>
          </tr>
          <tr>
            <td>api/categories/name/Mystery/suggested-books</td>
            <td>3 random books from Mystery category</td>
          </tr>
          <tr>
            <td>api/categories/name/Mystery/suggested-books?limit=2</td>
            <td>2 random books from Mystery category</td>
          </tr>
        </table>
        <p className='p1-main-body'>Customer can add any book and desired quantity by clicking on Add to cart button and the same will be reflected in the cart count in the header. By clicking in the cart button, customer can view the cart page. If the cart is empty and the customer tries to view the cart, they will be given an appropriate message and an option to continue shopping.
        <br/>
        The cart information was managed globally in the web application using Pinia store for Vue.js (works just like React redux) and was stored in the local storage. This ensured that the cart information was not lost even when the browser was closed. 
        </p>
        <img src={p1_4} alt='' className='p1_img2'></img>
        <img src={p1_5} alt='' className='p1_img2'></img>
        <img src={fl2} alt='' className='fl2'></img>
        <p className='p1-main-body'>The checkout view has a customized form to take information from customers. All the client side validations are performed using Vue3 Vuelidate validation framework. If all the information entered is correct, then the form is submitted. In the backend, server-side validations are performed again to ensure integrity of the data is not compromised.
        <br/>
        If the customer tries to go to the checkout page without any books in cart, they will be given an appropriate message and an option to continue shopping which will re-route them to default category page. 
        </p>
        <img src={p1_6} alt='' className='p1_img2'></img>
        <img src={p1_7} alt='' className='p1_img2'></img>
        <p className='p1-main-body'>If the form is submitted successfully, the customer information, the order information and order lineitem information is entered in the appropriate database tables using APIs. The customer is then routed to confirmation view where all the details of the order placed are visible and the cart is cleared. This confirmation information is stored in the session storage. Customer can go back to view the confirmation number as long as the browser is not closed and any new orders are not placed.
        <br/>
        If the customer tries to go to the confirmation page without any orders placed in a new session, they will be given an appropriate message and an option to go to homepage which will re-route them to main homepage. 
        </p>
        <img src={p1_8} alt='' className='p1_img2'></img>
        <img src={p1_9} alt='' className='p1_img2'></img>
        <img src={leaf1} alt='' className='leaf1'></img>
        <p className='p1-main-body'>To harden the design of web application, if the customer tries to enter any invalid URL, they will be routed to 404 Not Found page.
        </p>
        <img src={p1_10} alt='' className='p1_img2'></img>
      </div>
      <button className='b1' onClick={navigateToHomePage}>Go to homepage</button>
      <button className='b2' onClick={navigateToNextProject}>Go to next project</button>
    </div>
  )
}

export default Project1
