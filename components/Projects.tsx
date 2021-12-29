import Project from './Project'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useParallaxEffect from '../hooks/useParallaxEffect'

const Projects = () => {
  const { ref, initial, style } = useParallaxEffect({
    yOffset: 100,
    triggerPoint: 0.3,
    fadeOut: true,
  })

  return (
    <div>
      <div
        className="h-screen flex items-center justify-evenly"
        id="project-section"
      >
        <div>
          <h2
            className="
            top-3 text-center text-xl italic  text-white max-w-xs relative skew-y-2
            before:block before:w-full before:h-8 before:absolute before:left-0 before:top-0 before:bg-primary before:-z-10  
            "
          >
            What I have been working on
          </h2>
          <h1
            className="
          relative font-black text-7xl 
          before:block before:w-10 before:h-full before:bg-black before:absolute before:-left-20 before:top-0
          after:block after:w-10 after:h-1/2 after:bg-black after:absolute after:-left-32 after:top-0
          "
          >
            My Projects
          </h1>

          <div className="mt-14 w-full flex justify-end">
            <Link href="#projects">
              <a className="hover:scale-110 duration-150 bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow">
                Check Them Out
              </a>
            </Link>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={initial}
          style={{ ...style, backgroundImage: 'url(/worker.png)' }}
          className="h-full bg-contain bg-no-repeat  bg-center w-60 "
          title="https://cdn.dribbble.com/users/2837665/screenshots/11470856/media/4804692a4b6ac2e3bf2a96dff9caeab7.png"
        ></motion.div>
      </div>

      <div id="projects">
        <Project
          image="https://cdn.dribbble.com/users/3604979/screenshots/15874424/media/093c0379549f8018de61c6c4e211d29b.png"
          title="IT Rocket"
          intro="Where Good StuFFs are likely good"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        atque, consequatur quibusdam corrupti perferendis, explicabo sed
        nihil dignissimos dolore dolores modi nobis doloremque laboriosam
        qui voluptatibus voluptatum nemo illum dolorum?.. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eveniet atque,
        consequatur quibusdam corrupti perferendis, explicabo sed nihil
        dignissimos dolore dolores modi nobis doloremque laboriosam qui
        voluptatibus voluptatum nemo illum dolorum?.."
          tech={['aws', 'docker', 'flutter', 'firebase', 'vue']}
          demo="#"
          github="#"
        />

        <Project
          dark={false}
          image="https://cdn.dribbble.com/users/859312/screenshots/10971982/media/fedb6b14d3656af0b494078825931d21.png"
          title="Orpalis"
          intro="Where Good StuFFs are likely good"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        atque, consequatur quibusdam corrupti perferendis, explicabo sed
        nihil dignissimos dolore dolores modi nobis doloremque laboriosam
        qui voluptatibus voluptatum nemo illum dolorum?.. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eveniet atque,
        consequatur quibusdam corrupti perferendis, explicabo sed nihil
        dignissimos dolore dolores modi nobis doloremque laboriosam qui
        voluptatibus voluptatum nemo illum dolorum?.."
          tech={['rust', 'solana', 'solidity', 'etherium', 'react']}
          demo="#"
          github="#"
        />

        <Project
          image="https://cdn.dribbble.com/users/3604979/screenshots/6826959/thur_1.png"
          title="Thur"
          intro="Where Good StuFFs are likely good"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        atque, consequatur quibusdam corrupti perferendis, explicabo sed
        nihil dignissimos dolore dolores modi nobis doloremque laboriosam
        qui voluptatibus voluptatum nemo illum dolorum?.. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eveniet atque,
        consequatur quibusdam corrupti perferendis, explicabo sed nihil
        dignissimos dolore dolores modi nobis doloremque laboriosam qui
        voluptatibus voluptatum nemo illum dolorum?.."
          tech={['gitlab', 'azure', 'angular', 'tailwind', 'pwa']}
          demo="#"
        />
      </div>
    </div>
  )
}

export default Projects
