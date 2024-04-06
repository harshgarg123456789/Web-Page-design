import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineQrCode2, MdVerified } from "react-icons/md";

const Card = () => {
  return (
    <div className='w-[40%] xl:w-[26%] h-full  mx-auto flex flex-col gap-6 justify-start items-center bg-white border px-4 pb-6 shadow shadow-slate-100 rounded-md'>
        <p className='text-5xl text-green-500 '><MdVerified /></p>
        <p className=' text-3xl font-light text-center'>Your product link is ready</p>
        <p className=' text-lg text-center'>You can spread the word by sharing this link on - email, social media, chat, whatsapp and more</p>
        <div className=' flex flex-row items-center gap-4 text-2xl md:text-4xl text-blue-600'>
          <FaFacebook />
          <FaTwitter />
          <MdOutlineQrCode2 />
        </div>
        <button className=' bg-blue-600 rounded-full h-9 text-white w-full'>Get Link</button>
        <button className=' bg-white rounded-full h-9 text-blue-600 w-full md:border md:border-blue-600'>Return to Dashboard</button>
    </div>
  )
}

export default Card