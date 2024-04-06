import React from 'react'
import Item from './Item';
import { PiMonitorThin } from "react-icons/pi";
import { FaPaypal } from "react-icons/fa";
import { TbBellRinging2Filled } from "react-icons/tb";
import { BiNotepad } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";

const data = [
    {
      heading: "Selling online",
      para: "Grow your business by making it easier for your customers to pay you.",
      boxdata:[
        {
            image:<FaPaypal/>,
            heading:"PayPal buttons",
            para:"Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.",
            function:"Manage"
        },
        {
            image:<PiMonitorThin/>,
            heading:"Website preferences",
            para:"Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.",
            function:"Update"
        },
        {
            image:<TbBellRinging2Filled />,
            heading:"Instant Payment Notifications",
            para:"Stay informed by turning on notifications for payments made on your website.",
            function:"Update"
        },
      ]
    },
    {
      heading: "Getting paid",
      para: "Choose from various payment tools to attract your customers.",
      boxdata:[
        {
            image:<BiNotepad />,
            heading:"Invoices",
            para:"Create professional invoices and customize it as per your requirements.",
            function:"Manage"
        },
      ]
    },
    {
      heading: "More selling tools",
      para: "Check out the other tools that we have for you to help you sell online.",
      boxdata:[
        {
            image:<MdLocalShipping />,
            heading:"Shipping preferrences",
            para:"Create your shipping labels for hassle-free returns.",
            function:"Create"
        },
      ]
    },
  ];

const SellerBody = () => {
  return (
    <div className=' w-11/12 mx-auto pt-5 lg:pt-44'>
        <div className='w-10/12 mx-auto'>
          <h1 className='font-semibold text-2xl pb-2'>Seller tools</h1>
          <p className='w-[50%] text-lg leading-5'>Sell online easy and grow your business with Seller Tools. Create PayPal buttons, get instant payment notifications and do much more.</p>
          {
              data.map((i,index)=>(
                  <Item key={index} heading={i.heading} para={i.para} boxdata={i.boxdata}/>
              ))
          }
        </div>
    </div>
  )
}

export default SellerBody