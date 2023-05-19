import React from 'react';
import { Slide, Fade, Flip } from "react-awesome-reveal";

const About = () => {
  return (
    

    
    <div name='about' className='w-full h-screen bg-[#1f2731] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <Fade triggerOnce>

           
            <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>
              About
            </p>
            </Fade>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <Slide triggerOnce duration={1000}>

      
              <p>Hi. I'm Shalom, nice to meet you. Please take a look around.</p>
              </Slide>
            </div>
            <div>
            <Slide triggerOnce direction='right' duration={1000}>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
              </Slide>
            </div>
          </div>
      </div>
    </div>
    
  );
};

export default About;