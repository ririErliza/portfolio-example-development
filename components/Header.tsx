import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return  (
    <header>
    <div>
      {/* social icons */}
      <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />
    </div>
    </header>
  );
}