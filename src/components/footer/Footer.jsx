import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiTwotoneHome} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'><AiTwotoneHome/></a>
        <ul className='permalinks'></ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>

          <div className="footer_socials">
              <a href="https://github.com"><BsGithub/></a>
              <a href="https://linkedin.com"><BsLinkedin/></a>
          </div>
    </footer>

  )
}

export default Footer