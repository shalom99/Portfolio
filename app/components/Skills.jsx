import React from "react";

import Image from "next/image";
import { Slide, Fade, Flip } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <Slide triggerOnce>
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] ">
            Skills
          </p>
        
          <p className="py-4">Technologies I am currently using:</p>
          </Slide>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <Fade triggerOnce cascade damping={0.2}>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/html.png" alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/css.png" alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image
              width={50}
              height={50}
              src="/javascript.png"
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/react.png" alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/github.png" alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/next.png" alt="HTML icon" className="bg-white rounded-full border" />
            <p className="my-4">NEXT JS</p>
          </div>

          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/tailwind.png" alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md flex flex-col items-center rounded-lg shadow-[#040c16] hover:bg-[#1f2731] hover:font-bold hover:scale-110 duration-500">
            <Image width={50} height={50} src="/firebase.png" alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
