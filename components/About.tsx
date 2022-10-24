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
        alt="foto"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] object-cover' />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio corrupti quo neque praesentium explicabo consequatur sit sunt! Quam natus iste quasi perspiciatis enim, veritatis qui laboriosam, officiis magni quisquam earum
          </p>
        </div>
        
    </div>
  )
}