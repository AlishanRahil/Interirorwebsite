import React from 'react'
import Assets from '../Assets/download (8).png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className=' container py-4 mx-auto  items-center flex justify-between mt-5'>
     {/* Logo Section   */}
   <div className=' flex items-center  gap-2'>
   <Image src={Assets} alt='image'  className=' w-10 md:ml-0 ml-10' data-aos='fade-up'/>
   <span className=' text-xl md:text-3xl font-bold' data-aos='fade-up-right'>
    Interior
    </span>
   </div>
   
   <div className='md:flex hidden' data-aos='zoom-in'>
    <ul className='  flex gap-5 text-xl font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
    </ul>
   </div>
   <div>
    <button data-aos='zoom-in-out' className=' md:mr-0  mr-10 text-sm border-[1px] border-black px-5 py-2 lg:text-base md:text-xl shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white cursor-pointer transform-transition hover:scale-100 duration-300'>Try For Free</button>
   </div>
    </div>
  )
}

export default Navbar
