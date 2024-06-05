import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/images/logoBlk.png'
import { NavbarData } from '../Data/CommonData'
import { Link } from 'react-scroll'
import { UserContext } from '../Contexts/MyContext'
import NavBarDrawer from '../Components/NavBarDrawer'

const Navbar = () => {
    const {setIsOpend} = useContext(UserContext);
    const [scroll, setScroll] = useState(false);
 
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scroll]);
  return (
   <>
   <div className={`containers  px-5  fixed top-0 w-full z-50 md:px-52  
   ${
          scroll
            ? " transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : ""}`}>
    <div className="nav flex justify-between mx-5 items-center  ">
        <div className="logo">
            <img src={logo} alt="" className='w-20'/>
        </div>
        <div className="menu "> 
        <NavBarDrawer/>
          <div className="horizontal hidden md:block">
            <ul className="flex gap-5 ">
              {NavbarData.map((itm) => (
                <li key={itm.id} className="cursor-pointer hover:text-blue-400">
                  <Link to={itm.link}>{itm.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div
          className="icon flex flex-col md:hidden cursor-pointer "
          onClick={() => {
            setIsOpend(true);
          }}
        >
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              key="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
