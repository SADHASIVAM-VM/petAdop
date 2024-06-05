import React from 'react'
import '../styles/Hero.css'
import hero1 from '../assets/images/img/hero-img-1.png';
import hero2 from '../assets/images/img/hero-img-2.png';
import hero3 from '../assets/images/img/hero-img-3.png';
const Hero = () => {
  return (
    <>
    <section className="hero my-20" id='home'>
       <div className="box flex justify-center flex-col items-center">
        <div className="b1 md:w-[600px] m-2 ">
            <h1 className='text-4xl my-2 text-center'>WELCOME TO <span className='text-red-500 font-bold '>ADOPET</span></h1>
            <p className='text-xl'>
            At Adopet, we believe that every animal deserves a loving home. Our mission is to connect caring individuals with pets in need, providing a seamless adoption process that ensures the right match for both pet and owner. Explore our site to meet our adorable, adoptable pets and take the first step towards welcoming a new furry friend into your life.
            </p>
            <div className="btn flex gap-2 my-2">
                <button className='px-3 py-2  bg-orange-400 text-white rounded-md '>Get Start</button>
                <button className='px-3 py-2 border border-black rounded-md '>Explore</button>
            </div>
        </div>
        <div className="b2 my-20 ">
            <div className="imgs flex md:flex-row ">
                <img src={hero1} alt="" className='md:w-[200px] w-[100px]'/>
                <img src={hero2} alt="" className='md:w-[200px] w-[100px]'/>
                <img src={hero3} alt="" className='md:w-[200px] w-[100px]'/>
            </div>
        </div>
       </div>
    </section></>
  )
}

export default Hero
