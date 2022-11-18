import React from 'react'
import './about.css'
import DOG from '../../assets/dog.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {GiFilmProjector} from 'react-icons/gi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={DOG} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <BsFillAwardFill className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ years</small>
              </article>

              <article className='about_card'>
                <FaUsers className='about_icon'/>
                <h5>Teams</h5>
                <small>2+ years</small>
              </article>

              <article className='about_card'>
                <GiFilmProjector className='about_icon'/>
                <h5>Projects</h5>
                <small>2+ years</small>
              </article>
            </div>
          
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Ullam sequi architecto porro facilis aliquid tempora odio maiores \
              doloremque illo et nesciunt quibusdam in, 
              neque tenetur asperiores earum, magnam ad possimus!
            </p>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About