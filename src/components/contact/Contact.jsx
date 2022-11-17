import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiTwotonePhone} from 'react-icons/ai'

const Contact = () => {
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
            </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact