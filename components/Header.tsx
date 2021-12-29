import { Twitter, GitHub, Linkedin } from 'react-feather'
import data from '../data/base.json'

const Header = () => {
  return (
    <header className="bg-black h-screen w-screen">
      <nav className="flex items-center text-white px-20 py-5 justify-between">
        <h1 className="text-xl font-black">NIEMAND</h1>

        <div className="flex items-center gap-x-4 uppercase">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
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

      <section className="text-center h-full">
        <h1 className="text-5xl text-white font-black">Ok</h1>
      </section>
    </header>
  )
}

export default Header
