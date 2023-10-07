import React from 'react'
import logo from '../../assets/Indet-Group-Logo.png'
import './Footer.css'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center justify-between lg:px-10 p-4 bg-base-200 text-neutral-content border-style">

        <div className="">
          <img className='w-36' src={logo} alt="" />
        </div>


        <div className="">
          <h1 className='text-end text-black'> INDATE GROUP </h1>
        </div>


        <div className="flex">
          <Link to='https://www.facebook.com/indetgroup' target="_blank">
            <BiLogoFacebookCircle className='h-6 w-6 text-black' />
          </Link>
          <Link to='https://www.youtube.com/@indetgroup' target="_blank">
            <BiLogoYoutube className='h-6 w-6 text-black' />
          </Link>
          <Link to='https://www.linkedin.com/company/indetgroup/' target="_blank">
            <AiFillLinkedin className='h-6 w-6 text-black' />
          </Link>

        </div>

      </footer>
    </div>
  )
}

export default Footer