import React from 'react';
import { Slide, Fade, Flip } from "react-awesome-reveal";
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import {SiTailwindcss,SiNextdotjs} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr'
import {SiJavascript} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'

const About = () => {
  return (
    

    
    <div name='about' className='w-full  bg-[#1f2731] text-white py-10' >
      <div className='w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto'>
      <Slide triggerOnce>
        <div className='flex items-center gap-5'>
      <h1 className='text-4xl font-semibold py-5 text-white'>About</h1>
      <div className='grow bg-primary h-[3px]'></div>
      </div>
      </Slide>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 py-10'>
      {/* left */}
      <div className='md:w-[50%]'>
        <p className='text-lg'> Hello! My name is Shalom and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

        <div className='flex flex-col gap-5 mt-5' >
          <p className='text-primary text-lg font-semibold'>Technologies I am currently using:</p>
          <div className='grid gap-5 grid-rows-2 grid-cols-4 '>
            <Flip cascade damping={0.1} triggerOnce>
            <div className='flex flex-col items-center gap-2 group '>
            <AiFillHtml5 size={50} className='group-hover:text-primary duration-500'/>
              <p>HTML</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <FaCss3Alt size={50} className='group-hover:text-primary duration-500'/>
              <p>CSS</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <SiJavascript size={50} className='group-hover:text-primary duration-500'/>
              <p>JavaScript</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <FaReact size={50} className='group-hover:text-primary duration-500'/>
              <p>ReactJS</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <SiNextdotjs size={50} className='group-hover:text-primary duration-500'/>
              <p>NextJS</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <SiTailwindcss size={50} className='group-hover:text-primary duration-500'/>
              <p>Tailwind</p>
            </div>
            <div className='flex flex-col items-center gap-2 group'>
            <GrMysql size={50} className='group-hover:text-primary duration-500'/>
              <p>MySQL</p>
            </div> 
            <div className='flex flex-col items-center gap-2 group'>
            <FiFigma size={50} className='group-hover:text-primary duration-500'/>
              <p>Figma</p>
            </div>
            </Flip>
          </div>
        </div>

      </div>


      {/* right */}
      <div className='w-[90%] md:w-[40%] grid grid-rows-1 grid-cols-1  '>
        <div className='row-span-full rounded-full col-start-1 col-end-2 w-full h-full bg-profile bg-cover aspect-square'></div>
         <div className='row-span-full col-start-1 col-end-2 rounded-full w-full h-full aspect-square opacity-50 hover:bg-transparent bg-primary z-10 duration-1000 border-2 border-primarylight hover:scale-110'></div>

      </div>
      </div>
      </div>
    </div>
    
  );
};

export default About;