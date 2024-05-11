import React from 'react'
import {FaRegFileAlt} from 'react-icons/fa'
import { FaDownload } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion"
const Card = ({data, reference}) => {
  return (
  
       <motion.div drag dragConstraints={reference} dragTransition={{bounceStiffness: 600, bounceDamping: .1}} whileDrag={{scale: 1.2}} drafElastic={.2} className='relative w-52 h-64 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-md mt-5 leading-tight font-semibold'>{data.desc}</p> 
        <div className='footer absolute bottom-0  w-full left-0'>
            <div className='flex items-center justify-between py-1 px-8  mb-3'>
               <h5>
               {data.fileSize}
                </h5>
                <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                  {data.close ? <GrFormClose /> : <FaDownload  size=".8em" color='#fff' /> }
              
                </span>
      </div>
      {
        data.tag.isOpen &&  <div className='tag w-full py-4 bg-${data.tag.tagColor}-600 bg-sky-200 flex items-center justify-center'>
        <h3 className='text-md '>
        {data.tag.tagTitle}
          </h3>
      </div>
      }
     
          
        </div>
       
     
       </motion.div>

  )
}

export default Card