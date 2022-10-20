import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title >Portfolio Example using NextJS and TailwindCSS</title>
        <meta name="description" content="portfolio example developed using next js, tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

    {/* Hero */}
    <section id="hero" className='snap-center'>
    <Hero/>
    </section>

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}

    {/* Footer */}
    
    </div>
  )
}

export default Home
