import React from 'react'
import { TbBellRinging2Filled } from 'react-icons/tb'

const Item = ({heading,para,boxdata}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col justify-center items-center md:items-start mt-8 mb-11'>
        <h2 className=' text-2xl font-semibold'>{heading}</h2>
        <p className='w-[60%] md:w-[100%] text-center md:text-start'>{para}</p>
        {
            boxdata.map((i,index)=>(
                <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 mt-3 py-3 px-2 border shadow rounded-md shadow-slate-300 w-[60%]' key={index}>
                    <p className='text-blue-600 text-xl bg-gray-100 rounded-full p-2 ml-2'>{i.image}</p>
                    <div className='flex flex-col items-center md:items-start  w-full'>
                        <h3 className='font-semibold'>{i.heading}</h3>
                        <p className='w-[100%] text-sm text-center md:text-start'>{i.para}</p>
                    </div>
                    <p className=' text-blue-600  font-semibold mr-2'>{i.function}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Item