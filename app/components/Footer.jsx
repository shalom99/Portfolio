import Image from 'next/image';

import React from 'react';


const Footer = () => {
  return (
    <div className='mt-10'>
        <div className='pb-5 border-b-2 border-primary'><Image src="/sclogosmall.webp" alt="" className='mx-auto' width={50} height={50} /></div>

        <p className='text-slate-400 w-[90%] text-center mx-auto pt-5 pb-2'>Copyright &copy; 2023 Shalom Castro All Rights Reserved.</p>
    </div>
  )
}

export default Footer