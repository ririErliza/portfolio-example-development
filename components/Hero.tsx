import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, my name is Lula",
            "I am web developer",
            "I am web designer"
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div>
        <BackgroundCircle/>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        
    </div>
  )
}
