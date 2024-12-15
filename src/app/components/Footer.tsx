import React from 'react'
import desing from '../Assets/download (8).png'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <div className=' ' data-aos='zoom-in-out'>
      <div className="container py-11 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            <div className='space-y-4 '>
         <div className=' flex  items-center space-x-3'>
            <Image src={desing} alt='image' className=' w-10'/>
          <p className=' text-2xl font-bold'>  Interior</p>

        
            </div>
            <p>Greater Karachi, Bufferzone , Karachi</p>
            <p>@ 2024 TCJ All rights reserved</p>
         </div>

         <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className=' space-x-4 font-bold '>
            <h1 className=' text-2xl font-bold mb-3'>About Me</h1>
            <ul className='space-y-1 mb-2'> 
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Services</li>
            </ul>
           </div>
         </div>

         <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className=' space-x-4 font-bold '>
            <h1 className=' text-2xl font-bold mb-3'>Support</h1>
            <ul className='space-y-1 mb-2'> 
                <li>Faq</li>
                <li>Shipping & Returns</li>
                <li>Care Guide</li>
                <li>Quality</li>
            </ul>
           </div>
         </div>

        
         <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className=' space-x-4 font-bold '>
            <h1 className=' text-2xl font-bold mb-3'>Support</h1>
            <ul className='space-y-1 mb-2'> 
              <div className=' flex items-center  gap-2'>
              <FaPhoneAlt  /> 
              <p>923132571346</p>
              </div>
              <div className=' flex items-center gap-2'>
              <MdEmail  color='black'/> 
              <p>alishanrahil407@gmail.com</p>
              </div>
            </ul>
           </div>
         </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
