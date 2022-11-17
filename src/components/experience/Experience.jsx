import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experience</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Workflow</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Teams</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* Backend */}
        
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Workflow</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsCheckCircleFill/>
              <h4>Teams</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience