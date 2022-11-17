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
          <MdEmail/>
            <h4>Email</h4>
            <h5>hcnd90@gmail.com</h5>
            <a href="mailto:hcnd90@gmail.com">Send a Message</a>
            </article>
            <article className='contact_option'>
          <AiTwotonePhone/>
            <h4>Phone</h4>
            <h5>027 392 9011</h5>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Contact