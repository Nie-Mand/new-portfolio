import { Twitter, GitHub, Linkedin } from 'react-feather'
import data from '../data/base.json'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center px-20 py-5 justify-between">
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
    </nav>
  )
}

export default Navbar
