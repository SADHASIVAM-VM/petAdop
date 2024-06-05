import React from 'react'
import logo from '../assets/images/logoWhi.png'
import { Facebook, Twitter, YouTube } from '../Data/AllSvg'

const Footer = () => {
  return (
    <section className='bg-black text-white'>
        <div className="c">
            <div className="grid md:grid-cols-3  md:place-items-center ml-10 gap-4 spac" >
                <div className="logo">
                    <img src={logo} alt="" className='w-36'/>
                </div>
                <div className="contact">
                    <p>sadha4545@gmail.com</p>
                    <p>8248586299</p>

                </div>
                <div className="social flex gap-3">
                    <YouTube fill="white" width={"20px"}/>
                    <Twitter fill="white" width={"20px"}/>
                    <Facebook fill="white" width={"20px"}/>
                </div>
            </div>
            <hr className='md:mx-10 mx-5 my-3'/>
            <h5 className="text-center py-2">Copyright by Adopet @ 2024</h5>
        </div>
      
    </section>
  )
}

export default Footer
