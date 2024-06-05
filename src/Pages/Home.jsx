import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
// import Why from '../Components/Why'
import Footer from '../Components/Footer'
import Section2 from '../Components/MidComponents/Section2'
import Section3 from '../Components/MidComponents/Section3'
import About from '../Components/About'
import FeedbackSlider from '../Components/MidComponents/Testimonial'




const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/> 
      <Section2/>
      <Section3/>
      
      <About/>
      <FeedbackSlider/>
      <Banner/>
      {/* <Why/> */}
      <Footer/>
      
    </div>
  )
}

export default Home
