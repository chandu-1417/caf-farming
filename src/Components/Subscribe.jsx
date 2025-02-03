import React from 'react';
import subscribeImg from './Images/subscribe.png';
import { IoIosSend } from "react-icons/io";

const Subscribe = () => {
  return (
    <div>
      <div className='w-[90%] h-[400px] absolute rounded-2xl top-[5700px] left-[75px]'>
        <div className='w-full h-full bg-green-500 relative rounded-2xl'>
            <div className='w-full h-full bg-gray-200 absolute rounded-2xl mt-1 flex'>
                <div>
                    <img src={subscribeImg} alt="" className='absolute bottom-0 left-[50px]'/>
                </div>
                <div className=' absolute right-[200px] top-[80px] w-[30%] flex flex-col gap-4'>
                    <h5 className='text-5xl font-serif text-[#1F4E3D]'>Subscribe to our <br /> newsletter</h5>
                    <p className='text-lg text-[#1F4E3D]'>Stay updated with the latest farmland listings and tips. Subscribe to our newsletter today!</p>
                    <input type="email" placeholder='Enter Your Email' className='border-[2px] border-gray-500 text-lg h-[55px] w-[350px] px-8 rounded-full outline-none'/>
                    <div className='w-[50px] h-[50px] bg-[#FDD61F] rounded-full absolute bottom-[2.5px] right-[44px] flex justify-center items-center text-3xl'><IoIosSend/></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
