import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaypal } from "react-icons/fa";

function Footer() {
  return (
    <footer className='w-full  shadow-gray-600 shadow-xl'>
        <div className=' w-11/12 mx-auto'>
            <div className=' w-10/12 mx-auto flex flex-col md:flex-row justify-start items-center md:h-[4.5rem]'>
                <ul className=' flex flex-col md:flex-row gap-7 justify-center items-center font-semibold'>
                    <li>
                        <Link to="/">
                            <div className=' flex flex-row items-center justify-center'>
                                <p className=' flex items-center justify-center text-2xl text-blue-600'><FaPaypal /></p>
                                <p className=' text-xl italic font-bold text-blue-900'>Pay<span className=' text-blue-600'>Pal</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>
                                Help
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>
                                Contact Us
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>
                                Security
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>
                                Fees
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='h-1 bg-gray-50 border w-full'></div>
        <div className=' w-11/12 mx-auto md:h-[4.5rem] flex flex-col md:flex-row justify-start items-center'>
          <div className='w-10/12 mx-auto flex flex-col md:flex-row gap-7 justify-start items-center font-semibold'>
            <p className=' font-normal text-gray-400 text-center'>1999-2022 Paypal. Inc. All rights reserved.</p>
            <p>Privacy</p>
            <p>Legal</p>
            <p>Policy Updates</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;