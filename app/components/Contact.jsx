import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:w-[90%] lg:w-[60%]  md:items-center md:mx-auto py-5 md:px-0  ">
      <div className="md:w-[40%]">
        <h1 className="text-3xl md:text-4xl font-bold  text-gray-300 mb-5">
          Contact Me
        </h1>
        <p className='text-md mb-5 text-primary'>I'm available for freelance work.</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-7">
            <BsFillTelephoneFill size={55} className="border-2 rounded-full p-4 text-primary" />
            <p className="text-slate-300">(+63)909 1644 811</p>
          </div>
          <div className="flex items-center gap-7">
          <AiOutlineMail size={55} className="border-2 rounded-full p-4 text-primary" />
            <p className="text-slate-300">castroshalom77@gmail.com</p>
          </div>
          <div className="flex items-center gap-7">
            <FaMapMarkerAlt size={55} className="border-2 rounded-full p-4 text-primary" />
            <p className="text-slate-300"> Baguio City, Philippines 2600</p>
          </div>
        </div>
      </div>

      <div
        name="contact"
        className="md:w-[60%] flex justify-center"
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
  );
};

export default Contact;
