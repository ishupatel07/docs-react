import React from 'react'
import {FaRegFileAlt} from 'react-icons/fa'
const Card = () => {
  return (
    <>
       <div className='relative w-52 h-64 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-md mt-5 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p> 
        <div className='footer absolute bottom-0 bg-sky-200 w-full h-10 left-0'> </div>
       
        data
        tag

       </div>
    </>
  )
}

export default Card