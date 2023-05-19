import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import {ImArrowUpRight } from 'react-icons/im';

const Work = () => {


  return (
    <div name='work' className='w-full bg-[#1f2731]'>
      <div className='w-[95%] md:w-[90%] lg:w-[60%] xl:w-[50%] mx-auto py-5'> 
      <h1 className='text-4xl font-semibold py-5 text-white  '>Projects</h1>
      <div className='flex flex-col gap-5'>


      <div className='grid grid-cols-12'>
          <div className='row-span-full col-start-2 md:col-start-6 col-end-12 md:col-end-13 col-span-7 flex flex-col justify-center gap-2 py-2 z-10'>
            <h3 className='md:text-end text-sm font-semibold text-primary'>Featured Project #1</h3>
            <h2 className='text-2xl md:text-4xl font-bold md:text-end text-white'>Pro-Lab</h2>
            <p className='md:text-lg rounded-md text-white md:text-end md:bg-gray-400 py-2 px-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eum odit impedit autem quo quisquam quidem dolorum, temporibus enim similique nemo sapiente ratione nesciunt maiores vero. Sed natus nihil facere!</p>
            <ul className='flex md:justify-end gap-2 mb-5 text-white'>
                <li className='border border-primary rounded-md p-2'>NextJS </li>
                <li className='border border-primary rounded-md p-2'>Tailwind </li>
                <li className='border border-primary rounded-md p-2'>JavaScript </li>
            </ul>
            <div className='flex md:justify-end gap-2'>
                <Link href="/"><BsGithub size={35} className='bg-primary text-white rounded-md p-1 hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
                <Link href="/"> <ImArrowUpRight size={35} className='bg-primary text-white p-2 rounded-md hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
            </div>
          </div>

          <div className='row-span-full col-span-7 col-start-1 col-end-13 md:col-end-8 bg-project2 bg-cover md:bg-contain bg-center md:bg-left bg-no-repeat  opacity-25 md:opacity-100 md:min-h-[525px]'>
           
          </div>
        </div>


      
        <div className='grid grid-cols-12'>
          <div className='row-span-full col-start-2 md:col-start-1 col-end-13 md:col-end-8 col-span-7 flex flex-col justify-center gap-2 py-2 z-10'>
            <h3 className='text-sm font-semibold text-primary'>Featured Project #2</h3>
            <h2 className='text-2xl md:text-4xl text-white font-bold '>Pro-Lab</h2>
            <p className='md:text-lg rounded-md text-white  md:bg-gray-400 py-2 px-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eum odit impedit autem quo quisquam quidem dolorum, temporibus enim similique nemo sapiente ratione nesciunt maiores vero. Sed natus nihil facere!</p>
            <ul className='flex mb-5 text-white'>
                <li className='border border-primary rounded-md p-2'>NextJS </li>
                <li className='border border-primary rounded-md p-2'>Tailwind </li>
                <li className='border border-primary rounded-md p-2'>JavaScript </li>
            </ul>
            <div className='flex gap-2'>
                <Link href="/"><BsGithub size={35} className='bg-primary text-white rounded-md p-1 hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
                <Link href="/"> <ImArrowUpRight size={35} className='bg-primary text-white p-2 rounded-md hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
            </div>
          </div>

          <div className='row-span-full col-span-7 col-start-1 md:col-start-6 col-end-13 md:col-end-13 bg-project3 bg-cover md:bg-contain bg-center md:bg-right bg-no-repeat  opacity-25 md:opacity-100 md:min-h-[525px]'>
           
          </div>
        </div>


  
        <div className='grid grid-cols-12'>
          <div className='row-span-full col-start-2 md:col-start-6 col-end-12 md:col-end-13 col-span-7 flex flex-col justify-center gap-2 py-2 z-10'>
            <h3 className='md:text-end text-sm font-semibold text-primary'>Featured Project #1</h3>
            <h2 className='text-2xl md:text-4xl text-white font-bold md:text-end'>Pro-Lab</h2>
            <p className='md:text-lg rounded-md text-white md:text-end md:bg-gray-400 py-2 px-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eum odit impedit autem quo quisquam quidem dolorum, temporibus enim similique nemo sapiente ratione nesciunt maiores vero. Sed natus nihil facere!</p>
            <ul className='flex md:justify-end  text-white gap-2 mb-5'>
                <li className='border border-primary rounded-md p-2'>NextJS </li>
                <li className='border border-primary rounded-md p-2'>Tailwind </li>
                <li className='border border-primary rounded-md p-2'>JavaScript </li>
            </ul>
            <div className='flex md:justify-end gap-2'>
                <Link href="/"><BsGithub size={35} className='bg-primary text-white rounded-md p-1 hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
                <Link href="/"> <ImArrowUpRight size={35} className='bg-primary text-white p-2 rounded-md hover:bg-white hover:text-primary hover:scale-110 duration-500'/> </Link>
            </div>
          </div>

          <div className='row-span-full col-span-7 col-start-1 col-end-13 md:col-end-8 bg-project1 bg-cover md:bg-contain bg-center md:bg-left bg-no-repeat  opacity-25 md:opacity-100 md:min-h-[525px]'>
           
          </div>
        </div>






      </div>
      </div>
  </div>
  );
};

export default Work;