import React, { useState } from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import fl1 from '../../img/fl2-rev.png'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7lnggis', 'template_lr63xxz', formRef.current, 'MLFoYD8G7D7m5WhfS')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='c'>
      <div className='c-texts'>
            <h1 className='ch-title'>Contact Me</h1>
      </div>
      <div className='c-wrapper'>
      <img src={fl1} alt='' className='c-img' />    
        <div className="c-left">
            <div className="c-info">
                <div className="c-info-item">
                    <i class="fa-solid fa-square-phone fa-lg"></i>&nbsp;&nbsp;&nbsp; +(540)-824-8160
                </div>
                <div className="c-info-item">
                    <i class="fa-solid fa-square-envelope fa-lg"></i>&nbsp;&nbsp;&nbsp; somyaar@vt.edu
                </div>
                <div className="c-info-item">
                    <i class="fa-brands fa-linkedin fa-lg"></i>&nbsp;&nbsp;&nbsp; www.linkedin.com/in/somyaa-rastogi-837b67105
                </div>
                <div className="c-info-item">
                    <i class="fa-brands fa-square-github fa-lg"></i>&nbsp;&nbsp;&nbsp; https://github.com/somyaar96
                </div>
            </div>     
        </div>
        <div className="c-right">
            <form className='' ref={formRef} onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='user_name' />
                <input type='text' placeholder='Subject' name='user_subject' />
                <input type='text' placeholder='Email' name='user_email' />
                <textarea rows='5' placeholder='Message' name='message'/>
                <button className=''>Send Email</button>
                &nbsp; &nbsp;
                {done && "Thank you for your email!"}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
