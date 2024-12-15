import React from 'react'
import Image from 'next/image'
import logo1 from  '../Brandslogo/1-BbyzZQdv.png'
import logo2 from '../Brandslogo/2-DT82Xd_g.png'
import logo3 from '../Brandslogo/3-BQPOEnkg.png'
import logo4 from '../Brandslogo/4-CylwYEJG.png'
const Brandssup = () => {
  return (
    <div className='  mt-24 md:mt-32  py-10'>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 items-center justify-center gap-2">
        <div className='flex items-center justify-center md:mx-20 mx-auto'>
         <Image alt='logo1' src={logo1} className=' w-[100px] md:w-[200px]' data-aos='fade-up'/>
        </div>
        <div className='flex  items-center justify-center md:mx-20 mx-auto'>
         <Image alt='logo1' src={logo2} className=' w-[100px] md:w-[200px]' data-aos='fade-up'/>
        </div>
        <div className='flex items-center justify-center md:mx-20 mx-auto'>
         <Image alt='logo1' src={logo3} className=' w-[100px] md:w-[200px]' data-aos='fade-up'/>
        </div>
        <div className='flex items-center justify-center md:mx-20 mx-auto'>
         <Image alt='logo1' src={logo4} className=' w-[100px] md:w-[200px]' data-aos='fade-up'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Brandssup
