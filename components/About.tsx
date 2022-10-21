import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-width-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute text-gray-500 top-24 uppercase tracking-[20px]'>About</h3>
        
    </div>
  )
}