'use client'
import Image from 'next/image'
import {Link} from "react-scroll"
import React, { useState } from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";




export default function Header() {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  
  return (
    
    <div className="w-full h-[80px] flex justify-between items-center px-4  text-gray-300">
      <div>
        <Image src="/sclogosmall.png"  width={50} height={50} alt="SC LOGO"/>
      </div>

      {/* menu */}
    
        <ul className="hidden md:flex">
       
          <li className="hover:text-[#64ffda]"> <Link to="about" smooth={true}  duration={1000} >
          About
        </Link></li>
          <li className="hover:text-[#64ffda]"> <Link to="skills" smooth={true}  duration={1000} >
          Skills
        </Link></li>
          <li className="hover:text-[#64ffda]"> <Link to="work" smooth={true} duration={1000} >
          Work
        </Link></li>
          <li className="hover:text-[#64ffda]"> <Link to="contact" smooth={true}  duration={1000} >
          Contact
        </Link></li>
        </ul>
     
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1f2731] flex flex-col justify-center items-center z-100'}>

        <li className="py-6 text-4xl"> <Link onClick={handleClick} href="/" smooth={true}  duration={500} >
          Home
        </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} href="/" smooth={true}  duration={500} >
          About
        </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} href="/" smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} href="/" smooth={true}  duration={500} >
          Work
        </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} href="/" smooth={true}  duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shalom-castro-8a9144161" target="_blank" rel="noreferrer">LinkedIn  <FaLinkedin size={30}/> </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/shalom99?tab=repositories" target="_blank" rel="noreferrer">Github  <FaGithub size={30}/> </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#45a29e]">
                <a className="flex justify-between items-center w-full text-gray-300" href="mailto:castroshalom77@gmail.com">Email  <HiOutlineMail size={30}/> </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume  <BsFillPersonLinesFill size={30}/> </a>
            </li>
        </ul>
      </div>
    </div>

  )
}
