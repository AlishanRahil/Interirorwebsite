import React from 'react'
import { BiSolidCircle } from 'react-icons/bi'
import { FaVectorSquare } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
const Services = () => {
  return (
    <div className=' py-28'>
      <div className="container mx-auto  " data-aos='fade-right'>

        <h1 className=' text-center  md:text-3xl text-2xl font-bold '>What We Provided</h1>
       <p className=' text-lg font-semibold text-center mt-5 '> Bring your dream home to life with  one-on-one design help hand picked products</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto mt-20">
          <div className=' space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white transfor-transition hover:scale-100 duration-300'>
          <div className=' inline-block text-3xl border-2 border-black p-4 rounded-full'>
          <FaVectorSquare />
          </div>
           <h1 className=' text-2xl font-bold'>Luxury Facilities</h1>
           <p className=' text-xs mb-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur</p>
           <button>Learn More</button>
          </div>
          <div className=' space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white transfor-transition hover:scale-100 duration-300'>
          <div className=' inline-block text-3xl border-2 border-black p-4 rounded-full'>
          <FaPenToSquare />
          </div>
           <h1 className=' text-2xl font-bold'>Quality Products</h1>
           <p className=' text-xs mb-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur</p>
           <button>Learn More</button>
          </div>
          <div className=' space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white transfor-transition hover:scale-100 duration-300'>
          <div className=' inline-block text-3xl border-2 border-black p-4 rounded-full'>
          <BiSolidCircle />
          </div>
           <h1 className=' text-2xl font-bold'>Affordable Price</h1>
           <p className=' text-xs mb-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur</p>
           <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
