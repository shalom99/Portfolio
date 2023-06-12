import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

function Gallery() {
  return (
    <div className=" md:flex-row md:w-[90%] lg:w-[60%] xl:w-[50%] md:mx-auto py-10 px-2 md:px-0 ">
      <div> 
      <Slide triggerOnce>
        <div className='flex items-center gap-5'>
      <h1 className='text-4xl font-semibold py-5 text-white'>Contact Me</h1>
      <div className='grow bg-primary h-[3px]'></div>
      </div>
      </Slide>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="md:w-[50%] flex flex-col gap-5">
       <h2 className="text-3xl md:text-4xl font-semibold text-primary">Got a problem to solve?</h2>
        <p className='text-lg mb-5 text-white'>I'm available for freelance work.</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <BsFillTelephoneFill size={55} className="border-2 rounded-full p-4 text-primary" />
            <p className="text-slate-300">(+63)909 1644 811</p>
          </div>
          <div className="flex items-center gap-5 group">
          <AiOutlineMail size={55} className="border-2 group-hover:border-primary rounded-full duration-500 p-4 text-primary" />
            <a href="mailto:castroshalom77@gmail.com" className="text-slate-300 underline group-hover:text-primary duration-500">castroshalom77@gmail.com</a>
          </div>
          <div className="flex items-center gap-5">
            <FaMapMarkerAlt size={55} className="border-2 rounded-full p-4 text-primary" />
            <p className="text-slate-300"> Baguio City, Philippines 2600</p>
          </div>
        </div>
      </div>
    
      <div
        name="contact"
        className="w-full md:w-[50%] flex justify-center"
      >
        <form
          method="POST"
          action="https://getform.io/f/0c772458-cb37-4173-8302-86a36b4c69fe"
          className="flex flex-col max-w-[700px] w-full"
        >
          
          <input
            className="bg-[#1f2731] p-2 text-white rounded shadow-md shadow-[#040c16]"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#1f2731] text-white rounded shadow-md shadow-[#040c16]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#1f2731] p-2 text-white rounded shadow-md shadow-[#040c16] resize-none"
            name="message"
            cols="20"
            rows="10"
            placeholder="Message"
            
          ></textarea>
          <button className="text-white py-3 rounded-md bg-primary hover:bg-white hover:border-[#64ffda] hover:text-primary hover:font-bold duration-500  w-full mx-auto flex items-center justify-center mt-4">
            Let's Collaborate!
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Gallery