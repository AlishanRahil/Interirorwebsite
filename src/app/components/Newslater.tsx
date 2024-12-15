import React from 'react'

const Newslater = () => {
  return (
    <div className='max-w-[400px] mx-auto py-12' data-aos='fade-up'>    
        <h1 className=' text-center text-3xl font-bold'>Subcribe Our News Letter</h1>
        <p className=' mxa-w-[300px] mx-auto text-center font-semibold w-full mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='  flex   justify-center mt-8'>
          <input type="text"  placeholder=' enter your email' className=' px-6 py-4 border-[1px] border-black'/>
          <button className=' bg-black px-6 py-4 text-white'>Subscribe</button>
        </div>
      </div>
   
  )
}

export default Newslater
