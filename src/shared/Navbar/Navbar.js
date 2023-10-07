import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Indet-Group-Logo.png'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-52">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Blog</NavLink></li>
                            <li><NavLink>Sister Concern</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='w-36' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li className='mx-1 border-r-2 border-black pr-1'><NavLink className=''>Home</NavLink></li>
                        <li className='mx-1 border-r-2 border-black pr-1'><NavLink>Blog</NavLink></li>
                        <li className='mx-1 border-r-2 border-black pr-1'><NavLink>Sister Concern</NavLink></li>
                        <li className='mx-1 border-r-2 border-black pr-1'><NavLink>Contact</NavLink></li>
                    </ul>

                    <div className="flex gap-2">
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
                </div>
            </div>
        </div>
    )
}

export default Navbar