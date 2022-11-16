import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsBookFill} from 'react-icons/bs'
import {FaHammer} from 'react-icons/fa'
import {AiTwotonePhone} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
        <a href="#"><AiTwotoneHome/></a>
        <a href="#about"><FaUserAlt/></a>
        <a href="#experience"><BsBookFill/></a>
        <a href="#portfolio"><FaHammer/></a>
        <a href="#contact"><AiTwotonePhone/></a>
    </nav>
  )
}

export default Nav