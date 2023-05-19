import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className=''>
        <div className=' pb-5  '><Image src="/sclogosmall.png" alt="" className='mx-auto' width={50} height={50} /></div>
        <div className='flex justify-center border-b-[1px] border-t-[1px] border-primary  md:w-[90%] mx-auto'>
          <nav className='flex text-white gap-5 py-5'>
            <Link href="/">About</Link>
            <Link href="/">Skills</Link>
            <Link href="/">Work</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
        <p className='text-slate-400 w-[90%] text-center mx-auto pt-5 pb-2'>Copyright &copy; 2023 Shalom Castro All Rights Reserved.</p>
    </div>
  )
}

export default Footer