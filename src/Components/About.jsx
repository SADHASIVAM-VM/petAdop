import React from 'react'
import imgs from '../assets/images/img/about-img.png'

const About = () => {
  return (
   <div className="" id='about'>
    <div className="mx-5 md:mx-20 my-5">
      <h1 className='text-2xl md:text-4xl font-bold my-2'>ABOUT</h1>

      <div className="flex md:flex-row flex-col items-center gap-5">
        <div className="md:3/4 flex items-start flex-col gap-5">
          <p className='text-xl'>Find your furry soulmate! Browse adoptable pets near you, from playful pups to cuddly kittens. Change a life, adopt today.</p>
          <div className="flex gap-5 justify-center my-3">
          <p className='border-r-4 border-black px-2 flex flex-col md:text-4xl '><span className='text-xl font-bold md:text-4xl'>100+</span> Saved Pets </p>
          <p className='border-r-4 border-black px-2 flex flex-col md:text-4xl'><span className='text-xl font-bold md:text-4xl'>100%</span> Adoption Rate </p>
          <p className=' px-1 flex flex-col md:text-4xl'><span className='text-xl font-bold md:text-4xl'>10+</span> Community Rate</p>
          
        </div>
        </div>
       

        <div className="md:w-2/4">
          <img src={imgs} alt="" className='w-[250px]'/>
        </div>
      </div>
    </div>
    
   </div>
 
  )
}

export default About
