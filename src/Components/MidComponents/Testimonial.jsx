import React from 'react'
import { Testimonials } from '../../Data/CommonData'

const Testimonial = () => {
  return (
    <div className='mx-5 md:mx-20 my-10'>
        <h1 className='text-2xl md:text-4xl font-bold my-2'>TESTIMONIALS</h1>
      <div className=" grid md:grid-cols-3 gap-5  ">
        {
            Testimonials.map((itms)=>(
                <div className="border  p-5 rounded-md" key={itms.id}>
                    <div className="flex justify-between ">
                    <img src={itms.img} alt="" className='h-10'/>
                    <h1 className='text-6xl font-bold text-green-300'>"</h1>
                    </div>
                    <p>{itms.desc}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Testimonial
