
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
        
        <img className='relativ rounded-full h-32 w-32 mx-auto object-cover' src="https://images.unsplash.com/flagged/photo-1577614742608-393919945ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="foto" />
         
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
