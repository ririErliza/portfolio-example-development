import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white'>
      <Head>
        <title >Portfolio Example using NextJS and TailwindCSS</title>
        <meta name="description" content="portfolio example developed using next js, tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className=''>
        <Hero />
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
