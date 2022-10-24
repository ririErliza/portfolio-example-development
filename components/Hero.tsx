
import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'


type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, my name is Lula",
            "I am a web developer",
            "I am a web designer"
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle/>
        
        <img className='relativ rounded-full h-32 w-32 mx-auto object-cover' src="data:image/jpeg;base64,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" alt="foto" />
         
        <div className='z-20'>
          <h2 className='text-sm text-gray-500 pb-3 tracking-[15px]'>Fullstack Developer</h2>
          <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
            <span className='mr-3 z-10'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
          </h1>
        
        
          <div className='pt-5'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>

            <Link href='#experience'>
              <button className='heroButton'>Experience</button>
            </Link>

            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>

            <Link href='#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          
          </div>

        </div>
        
    </div>
  )
}
