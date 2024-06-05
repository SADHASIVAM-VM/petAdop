import React from 'react'
import baner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div className='mx-5' id='event'>
      <div className=" bg-gray-100 rounded-md flex justify-center ">
       <div className=" bg-gray-100 p-5 rounded-md ">
       <img src={baner} alt="" className='rounded-md w-[md:w-[700px]]'/>
       </div>
      </div>
    </div>
  )
}

export default Banner
