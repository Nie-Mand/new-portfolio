import { Twitter, GitHub, Linkedin } from 'react-feather'
import data from '../data/base.json'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Header = () => {
  return (
    <header className="bg-black h-screen w-screen">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.7, type: 'spring' }}
        className="flex items-center text-white px-20 py-5 justify-between"
      >
        <h1 className="text-xl font-extrabold">NIEMAND</h1>

        <div className="flex items-center gap-x-4 uppercase">
          <Link href="/">
            <a className="hover:text-primary hover:scale-110 duration-150">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-primary hover:scale-110 duration-150">
              Blog
            </a>
          </Link>

          <Link href="/#project-section">
            <a className="hover:text-primary hover:scale-110 duration-150">
              Projects
            </a>
          </Link>
          <Link href="/#contact">
            <a className="hover:text-primary hover:scale-110 duration-150">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <a href={data.socials.twitter} target="_blank" rel="noreferrer">
            <Twitter className="hover:text-[#1da1f2] hover:scale-110 duration-150" />
          </a>
          <a href={data.socials.github} target="_blank" rel="noreferrer">
            <GitHub className="hover:text-[#6e5494] hover:scale-110 duration-150" />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="hover:text-[#0a66c2] hover:scale-110 duration-150" />
          </a>
        </div>
      </motion.nav>

      <section className="text-center h-4/5 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ height: 0 }}
          animate={{ height: 'unset' }}
          transition={{ delay: 1, duration: 0.4, type: 'spring' }}
          className="overflow-y-hidden text-[7rem] text-white font-black"
        >
          H3llo W0rld..
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.7, type: 'spring' }}
          className="text-white"
        >
          My Name is{' '}
          <span className="font-bold text-xl">Muhamed SoFiene Barka</span>, and
          i<span className="text-primary font-bold text-2xl">C</span>ode
        </motion.h2>

        <motion.span
          className="mt-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.7, type: 'spring' }}
        >
          <Link href="/#project-section">
            <a className="hover:scale-110 duration-150 bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow">
              My Projects
            </a>
          </Link>
        </motion.span>
      </section>
    </header>
  )
}

export default Header
