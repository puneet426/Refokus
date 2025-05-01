import React from 'react'
import {motion} from "framer-motion"

function Marquee({imagesurls,direction}) {
  return (
    <div className='flex w-full  py-1 gap-10 whitespace-nowrap  overflow-hidden'>
      <motion.div initial={{x:direction ==='left'?"0" : "-100%"}} animate={{x:direction ==='left'?"-100%" : "0"}} transition={{ease:"linear", duration:15,repeat:Infinity}} className='flex flex-shrink-0 gap-20 py-8 pr-24'>
      {imagesurls.map((url,index) =>  <img key={index} src={url} className='w-[8vw] flex-shrink-0 ' /> )}
      </motion.div>
      <motion.div initial={{x:direction ==='left'?"0" : "-100%"}} animate={{x:direction ==='left'?"-100%" : "0"}} transition={{ease:"linear", duration:15,repeat:Infinity}} className='flex flex-shrink-0 gap-20 py-10 pr-24'>
      {imagesurls.map((url,index) =>  <img key={index} src={url} className='w-[8vw] flex-shrink-0 ' /> )}
      </motion.div>
        
       
       
    </div>
  )
}

export default Marquee