import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

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
        {text}
        <Cursor cursorColor='#F7AB0A'/>
    </div>
  )
}
