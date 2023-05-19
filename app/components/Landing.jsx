import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { HiArrowNarrowRight } from "react-icons/hi";


const Landing = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-100">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#45a29e]">
          Shalom C. Castro
        </h1>

        <h2 className="z-[-1] text-2xl md:text-5xl lg:text-7xl font-bold text-white">
      
          <Fade triggerOnce cascade damping={0.1}>I build things for the web.</Fade>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a <span className="text-[#45a29e]">full-stack developer</span>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <Link href="/" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#45a29e] hover:border-[#45a29e] duration-500 hover:text-black ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
