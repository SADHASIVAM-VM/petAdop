import React from 'react'

const Why = () => {
  return (
    <section className="my-5">
        <div className=" flex flex-col md:flex-row p-5 gap-5">
            <div className="left md:w-1/2">
            <h1 className='text-2xl my-2'>Why Adopt?</h1>
                <p className='bg-violet-300 p-5 rounded-md  py-10  min-h-[300px] text-md md:text-xl'>
                Adopting a pet is a rewarding experience that saves lives. When you adopt from a shelter or rescue, you are giving an animal a second chance and freeing up space for another pet in need. Adoption also helps combat the issues of pet overpopulation and reduces the demand for commercial breeding. Our pets are health-checked, vaccinated, and spayed or neutered, ensuring they are ready for their forever homes.
                </p>
            </div>
            <div className="md:w-1/2">
                <h1 className='text-2xl my-2'>Meet Our Pets</h1>

                <p className=' bg-purple-200 p-5 rounded-md  py-10 min-h-[300px] text-md md:text-xl'>
                Each of our adoptable pets has a unique story and personality. Our dedicated team works hard to get to know each animal, providing detailed profiles to help you find the perfect fit for your lifestyle. Browse through our online gallery, attend one of our adoption events, or visit us in person to meet your potential new family member. We are here to guide you through the adoption process, answer any questions, and support you every step of the way.
                </p>
            </div>
        </div>
        <div className="mx-5 ">
            <div className="">
                <h1 className='text-2xl md:text-4xl my-2'>The Adoption Process..</h1>

                <p className='bg-pink-200 p-5 rounded-md text-md md:text-xl min-h-[300px] items-center flex'>
                Adopting a pet is a commitment, and we want to make sure it's the right fit for both you and the animal. Our adoption process is designed to be thorough but straightforward. Start by filling out our online adoption application, which helps us understand your preferences and living situation. Next, our team will contact you to discuss your application and arrange a meet-and-greet with the pet you're interested in. Once everything is set, you'll sign an adoption agreement, pay the adoption fee, and take your new friend home. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Why
