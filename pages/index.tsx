import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title >Portfolio Example using NextJS and TailwindCSS</title>
        <meta name="description" content="portfolio example developed using next js, tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>


      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

      {/* Footer */}
    
    </div>
  )
}

export default Home
