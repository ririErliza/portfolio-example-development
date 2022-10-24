import { motion} from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-width-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute text-gray-500 top-24 uppercase tracking-[20px] text-2xl pb-10'>About</h3>

        <motion.img

        initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{once:true}}
        src="https://img.okezone.com/okz/500/library/images/2019/05/07/p7olvqf6t28kw4may1xw_13671.jpg"
        alt="" />
        
    </div>
  )
}