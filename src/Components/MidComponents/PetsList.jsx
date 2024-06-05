import React from 'react';

const divetsList = () => {
  return (
    <>
     <div className="">
        <h1 className='text-2xl font-bold '>FEAUTRED PETS.</h1>
     <div className="flex justify-center my-10 ">

        <div className='grid xs-grid-cols-1 sm-grid-cols-2 md:grid-cols-4 gap-4 '>
       {[...Array(10)].map((itm, index)=>(

<div key={index} className='border-2 h-[200px] w-[200px] bg-slate-300'>
    <p>pet{index+1}</p>
</div>
       ))

       }
      
        </div>
        
      </div>
      <div className="grid mx-5 mb-5 md:flex md:justify-center items-center">
        <button className='px-3 py-2 bg-orange-400 rounded-md flex justify-center items-center  md:w-52'>Find More</button>
      </div>
        
     </div>
    </>
  )
}

export default divetsList;
