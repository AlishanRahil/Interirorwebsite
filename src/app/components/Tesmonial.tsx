import React from 'react'
import Image from 'next/image'
import pic1 from '../Bannerassets/300 (1).jpeg'
import pic2 from '../Bannerassets/300 (2).jpeg'
import pic3 from '../Bannerassets/300.jpeg'

const Tesmonial = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <h1 className=' text-3xl  font-serif font-bold'>Word From Our Customer&apos;s</h1>

        <p className='  mt-5 text-gray-800'>Bring your dream home to life with one-on-one design help & hand picked products</p>
        </div>
        <div className=' bg-black' data-aos='fade-up'>
       <div className=' grid grid-cols-1 md:grid-cols-3 mx-auto  p-10  gap-16  ' data-aos='fade-up'>
        <div className=' flex flex-row items-center justify-center gap-5 mx-auto p-14  border rounded-lg shadow-lg '>
            <Image alt='imag1' src={pic1} width={80}  className=' rounded-full' data-aos='fade-up'/>
           
             <div className='  ' data-aos='fade-up' >
             <h1 className=' text-start  text-white'>Alishan Rahil</h1>
             <p className=' text-sm text-white'>Developer</p>
             <p className=' text-sm'>⭐⭐⭐⭐⭐</p>
             <div className=' text-sm  border-t-2 text-white mt-3'>
             <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, dolor.</p>
             </div>
             </div>
        </div>
        <div className=' mx-auto  flex flex-row items-center justify-center gap-5 p-10 border rounded-lg shadow-lg '>
            <Image alt='imag1' src={pic2} width={80} className=' rounded-full' data-aos='fade-up'/>
            <div data-aos='fade-up'>
             <h1 className=' text-start text-white'>Alishan Rahil</h1>
             <p className=' text-sm text-white'>Developer</p>
             <p className=' text-sm'>⭐⭐⭐⭐⭐</p>
             <div className=' text-sm  border-t-2 text-white mt-3'>
             <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, dolor.</p>
             </div>
             </div>
        </div>
        <div className=' mx-auto  flex flex-row items-center justify-center gap-5  p-10 border rounded-lg shadow-lg '>
            <Image alt='imag1' src={pic3} width={80} className=' rounded-full' data-aos='fade-up'/>
            <div data-aos='fade-up'>
             <h1 className=' text-start text-white '>Alishan Rahil</h1>
             <p className=' text-sm text-white '>Developer</p>
             <p className=' text-sm'>⭐⭐⭐⭐⭐</p>
             <div className=' text-sm  border-t-2 text-white mt-3 '>
             <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, dolor.</p>
             </div>
             </div>
        </div>
        </div> 
       </div>
      </div>
    </div>
  )
}

export default Tesmonial



