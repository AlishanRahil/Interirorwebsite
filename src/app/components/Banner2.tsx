import React from 'react'

import Image from 'next/image'

import Banner3 from '../Bannerassets/banner2-Bd17gWH8.png'
const Banner2 = () => {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
             <div className='order-1 sm:order-2'>
                <Image alt='banner1' src={Banner3} data-aos='fade-left' />
             </div>

             <div className='  md:mt-32 md:mx-0 mx-auto'>
                <h1 className=' text-center md:text-start  text-2xl md:text-4xl  font-bold' data-aos='fade-up'>Simple way to make  stylish living room  </h1>
                <p className=' text-center mt-5 md:text-start' data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum, quisquam voluptatibus blanditiis, saepe tenetur qui magnam ab nihil tempore ipsam porro, veniam eum quibusdam expedita dolores aspernatur incidunt obcaecati.</p>
               
             
               <div className=' flex flex-col mt-10  md:gap-10   md:flex-row md:text-start text-center'>
               <div className="mb-5 sm:mb-0">
          <h1 className="text-4xl font-bold" data-aos='fade-up'>15</h1>
          <p className="mt-2 text-gray-600" data-aos='fade-up'>Years Of <br /> Experience</p>
        </div>
        <div className="mb-5 sm:mb-0">
          <h1 className="text-4xl font-bold" data-aos='fade-up'>50+</h1>
          <p className="mt-2 text-gray-600" data-aos='fade-up'>Projects <br /> Completed</p>
        </div>

        <div className="mb-5 sm:mb-0">
          <h1 className="text-4xl font-bold" data-aos='fade-up'>350+</h1>
          <p className="mt-2 text-gray-600" data-aos='fade-up'> Happy <br />Client&apos;s  </p>
        </div>

               </div>
                
               <div className=' flex justify-center md:justify-start'>
               <button data-aos='zoom-up' className=' mt-5 bg-black px-5 py-2 rounded-lg text-white md:text-xl shadow-[5px_5px_10px_0px_rgba(255,255,255,0.2)] hover:bg-white hover:text-black'>Discover More</button>
               </div>
        

                
               
             </div>

        </div>
      </div>
    </div>




  )
}

export default Banner2
