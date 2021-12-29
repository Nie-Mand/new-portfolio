import { Twitter, GitHub, Linkedin } from 'react-feather'
import data from '../data/base.json'

const Contact = () => {
  return (
    <div
      className="h-screen flex items-center justify-evenly text-white bg-black"
      id="contact"
    >
      <div>
        <h2
          className="
          top-3 text-center text-xl italic  text-white max-w-xs relative skew-y-2
          before:block before:w-full before:h-8 before:absolute before:left-0 before:top-0 before:bg-primary before:-z-10  
          "
        >
          Wanna discuss something important?
        </h2>
        <h1
          className="
          relative font-black text-7xl 
          before:block before:w-20 before:h-1/4 before:bg-white before:absolute before:-left-32 before:top-0
          after:block after:w-20 after:h-1/2 after:bg-white after:absolute after:-left-32 after:top-8
          "
        >
          <a href="mailto:chill.out.x19@gmail.com">Click Me</a>
        </h1>
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
    </div>
  )
}

export default Contact
