import React from 'react'
import {ImgData} from "../../Data/CommonData"

const Section3 = () => {
  return (
    <div className='my-10 mx-5 md:mx-20' id='pets'>
      <h1 className='text-2xl md:text-4xl font-bold my-5'>FEAUTRED </h1>
      <div className="flex justify-center flex-col items-center">
        
        <div className="grid md:grid-cols-3  gap-10 ">
            {
                ImgData.map((itms)=>(
                    <div key={itms.id} className="">
                        <img src={itms.img} alt="" className='w-[300px]'/>
                        <h4 className='text-xl font-bold text-center'>{itms.name}</h4>
                    </div>
                ))
            }
          <button className='bg-orange-400 text-white p-2 rounded-md'>GET MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Section3
