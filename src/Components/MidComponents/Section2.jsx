import React from 'react';
import '../../styles/Section2.css';
import imgs1 from '../../assets/images/img/requirements-img.png';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Added import

const Section2 = () => {
  return (
    <section className='section2 flex justify-center p-5 md:p-20' id='adot'>
      <div className="grid md:grid-cols-2 place-content-center place-items-center gap-10">
        <div>
          <div>
            <h1 className='text-2xl md:text-4xl font-bold my-5'>PET ADOPTION PROCESS</h1>
            <div className="flex flex-col gap-4">
             <div className="">
             <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#fffc86] p-1 rounded-full text-gray-800'>
                  <SearchIcon />
                </span>
                Research the perfect pet for your lifestyle needs.
              </p>
             </div>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#7cff7a] p-1 rounded-full'>
                  <PetsIcon />
                </span>
                Visit local shelters to meet available pets for adoption.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#34fee6] p-1 rounded-full'>
                  <ChatIcon />
                </span>
                Talk to shelter staff about the pet's history and behavior.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#ffb086] p-1 rounded-full'>
                  <DescriptionIcon />
                </span>
                Complete an adoption application with necessary personal and contact details.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#8fbeff] p-1 rounded-full'>
                  <HomeIcon />
                </span>
                Schedule a home visit to ensure your environment is suitable.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#f786ff] p-1 rounded-full'>
                  <ShoppingCartIcon />
                </span>
                Prepare your home with necessary supplies for your new pet.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#ffc8dd] p-1 rounded-full'>
                  <GroupIcon />
                </span>
                Meet the pet again to ensure compatibility with family members.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#9039ee] p-1 rounded-full'>
                  <PaymentIcon />
                </span>
                Pay the adoption fee to finalize the adoption process.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#e6b900] p-1 rounded-full'>
                  <DriveEtaIcon />
                </span>
                Take your new pet home and help them acclimate slowly.
              </p>
              <p className='text-xl flex gap-3 items-center'>
                <span className='bg-[#ff99c8] p-1 rounded-full'>
                  <FavoriteIcon />
                </span>
                Provide continuous care, love, and regular veterinary check-ups.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={imgs1} alt="Pet adoption process" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
