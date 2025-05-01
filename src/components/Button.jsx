import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title ="Get Started"}) {
  return (
    <div className='w-fit px-4 py-2 bg-zinc-100 text-black flex  items-center justify-between  rounded-full '>
        <span className='text-sm font-medium '>{title}
       
        </span>
        <IoIosReturnRight/>
       
    </div>
  )
}

export default Button