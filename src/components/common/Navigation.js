import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaPaypal } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navigation() {
    const location = useLocation()
    const [open,setOpen]=useState(false)
    const toggle=()=>{
        if(open) setOpen(false)
        else setOpen(true)
    }

  return (
    <nav className='bg-gray-50 '>
        <div className={` ${!open?("bg-transparent"):("h-[100vh]")} block lg:hidden text-2xl w-[45%] sm:w-[30%] md:w-[25%] fixed bg-blue-800`} onClick={toggle}>{!open?(<IoReorderThreeOutline/>):(<RxCross2 />) }</div>
        <div className='w-full hidden lg:block fixed top-0'>
                        <div className=' bg-blue-800 text-white'>
                            <div className=' flex flex-row justify-around items-center w-11/12 h-[5rem] mx-auto'>
                                <div className='flex flex-row'>
                                    <ul className=' flex flex-row gap-5 lg:gap-9'>
                                        <li className=' flex justify-center items-center'>
                                            <Link to="/">
                                                <p className='text-2xl '>
                                                    <FaPaypal/>
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Dashboard
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Finances
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Send and Request
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Deals
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Wallet
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Activity
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Help
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row justify-center items-center'>
                                    <ul className=' flex flex-row justify-center items-center gap-4'>
                                        <li>
                                            <Link to="/">
                                                <FaBell/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <IoIosSettings/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p className='uppercase text-sm font-semibold'>Log out</p>
                                            </Link>
                                        </li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-white shadow-gray-300 shadow-md'>
                            <div className=' w-full flex flex-row h-[5rem] justify-center items-center'>
                                        <ul className=' flex flex-row gap-5 lg:gap-9 font-semibold'>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Account
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
                                                        Data & Privacy
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Payments
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Notifications
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sellertools">
                                                    <p className={`${location.pathname==="/sellertools"?("text-blue-800 font-semibold bg-blue-100 px-2 py-1 rounded-full"):("")}`}>
                                                        Seller Tools
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Statements & taxes
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                            </div>
                        </div>
        </div>
                
        
            {    open &&<div className=' bg-blue-800  text-white min-h-[100vh] w-[45%] sm:w-[30%] md:w-[25%] fixed top-10 block lg:hidden'>
                            <div className=' flex flex-col justify-center items-start pl-4 mx-auto'>
                                <div className='flex flex-col'>
                                    <ul className=' flex flex-col gap-2'>
                                        <li className=' flex justify-start items-start'>
                                            <Link to="/">
                                                <p className='text-2xl '>
                                                    <FaPaypal/>
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Dashboard
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Finances
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Send and Request
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Deals
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Wallet
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <p>
                                                    Activity
                                                </p>
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
                                                <p className='uppercase text-sm font-semibold'>Log out</p>
                                            </Link>
                                        </li>  
                                        <div className='border border-white'></div>
                                        <li>
                                                <Link to="/">
                                                    <p>
                                                        Account
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
                                                        Data & Privacy
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Payments
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Notifications
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sellertools">
                                                    <p className={`${location.pathname==="/sellertools"?("text-blue-800 font-semibold bg-blue-100 px-2 py-1 rounded-full"):("")}`}>
                                                        Seller Tools
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <p>
                                                        Statements & taxes
                                                    </p>
                                                </Link>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                </div>
            
            }
    </nav>

  );
}

export default Navigation;