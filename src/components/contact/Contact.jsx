import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiTwotonePhone} from 'react-icons/ai'

import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e70t7cb', 'template_iw9vs57', form.current, 'DogkjLYYiSex_T9C4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>hcnd90@gmail.com</h5>
            <a href="mailto:hcnd90@gmail.com">Send a Message</a>
            </article>
            <article className='contact_option'>
          <AiTwotonePhone className="contact_option-icon"/>
            <h4>Phone</h4>
            <h5>027 392 9011</h5>
            <a href="mailto:hcnd90@gmail.com">Send a Message</a>
            </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}

export default Contact