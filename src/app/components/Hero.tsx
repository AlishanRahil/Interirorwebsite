import React from 'react'
import Image from 'next/image'
import Herop from '../Assets/hero-BHwWjdU7.png'
const Hero = () => {
  return (
      <div className="container mx-auto mt-10 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
         <div className=' flex flex-col justify-center gap-5 mt-5 '>
         <h1 className=' text-2xl md:text-3xl font-bold text-center md:text-start' data-aos='fade-right'>SKETCH LUXURY  <br />
         INTERIOR DESIGN</h1>

<p className=' text-lg font-semibold text-center md:text-start' data-aos='fade-right'>Bring your dream to life with one-on-one <br /> esign help  hand picked products tailored to your style, space and budget.</p>
        
         <div className=' flex gap-5 mx-auto md:mx-0'>
            
        <button data-aos='fade-right' className=' bg-black px-5 py-2 rounded-lg text-white md:text-xl shadow-[5px_5px_10px_0px_rgba(255,255,255,0.2)] hover:bg-gray-800'>Get Started</button>    <button data-aos='fade-right' className='bg-white px-5 py-2 rounded-lg text-black md:text-xl shadow-[5px_5px_0px_0px] transition-all hover:bg-gray-200'>Get Started</button>
         </div>

         </div>
         <div className=' flex  justify-center flex-col  mt-20 md:mt-0'>
            <Image alt='heroimg' src={Herop} data-aos='fade-left'  className='  w-[350px] md:w-[600px] object-cover mx-auto'/>
         </div>
        </div>
      </div>



  )
}
export default Hero




// import React from 'react';
// import Image from 'next/image';
// import Herop from '../Assets/hero-BHwWjdU7.png';

// const Hero = () => {
//   return (
//     <div className="container mx-auto mt-10 md:mt-0">
//       <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
//         {/* Text Section */}
//         <div className='flex flex-col justify-center gap-5 mt-5'>
//           <h1 className='text-2xl md:text-3xl font-bold text-center md:text-start'>
//             SKETCH LUXURY <br />
//             INTERIOR DESIGN
//           </h1>

//           <p className='text-lg font-semibold text-center md:text-start'>
//             Bring your dream to life with one-on-one <br /> design help & hand-picked products tailored to your style, space, and budget.
//           </p>

//           <div className='flex gap-5 mx-auto md:mx-0'>
//             <button className='bg-black px-5 py-2 rounded-lg text-white md:text-xl shadow-[5px_5px_10px_0px_rgba(255,255,255,0.2)] transition-all hover:bg-gray-800'>
//               Get Started
//             </button>
//             <button className='bg-white px-5 py-2 rounded-lg text-black md:text-xl shadow-[5px_5px_10px_0px_rgba(0,0,0,0.1)] transition-all hover:bg-gray-200'>
//               Get Started
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className='flex justify-center flex-col mt-10 md:mt-0'>
//           <Image
//             alt='heroimg'
//             src={Herop}
//             className='w-full md:w-[600px] h-auto object-cover mx-auto'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
