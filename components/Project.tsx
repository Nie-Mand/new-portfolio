import { GitHub } from 'react-feather'
import Technology, { tech } from './Technology'
import { motion } from 'framer-motion'
import useParallaxEffect from '../hooks/useParallaxEffect'

type Props = {
  dark?: boolean
  title: string
  image: string
  description: string
  intro: string
  tech: tech[]
  demo: string
  github?: string
}

const Project = (props: Props) => {
  const { dark = true } = props

  const { ref, initial, style } = useParallaxEffect({
    fadeOut: true,
  })

  return (
    <div className={`flex ${dark ? '' : 'flex-row-reverse'}`}>
      <div className="w-2/3 h-screen grid">
        <div
          className="z-10 h-full w-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>

      <div
        className={`flex flex-col w-1/2 ${
          dark ? 'bg-black' : 'bg-white'
        } h-screen`}
      >
        <motion.div
          ref={ref}
          initial={initial}
          style={style}
          className="absoulte z-20 grid place-content-center  p-20 relative top-0 left-0 h-screen"
        >
          <div
            className={`flex flex-col items-baseline gap-y-5  ${
              dark ? 'text-white' : 'text-black'
            }`}
          >
            <h1 className="text-5xl font-black uppercase">{props.title}</h1>

            <div className="w-full mb-10">
              <div className="text-3xl text-primary text-left leading-tight h-3">
                “
              </div>
              <p
                className={`text-sm ${
                  dark ? 'text-gray-400' : 'text-gray-700'
                } text-center px-5`}
              >
                {props.intro}
              </p>
              <div className="text-3xl text-primary text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>

            <p className="indent-8 font-light">{props.description}</p>

            <div className="flex items-center justify-end ml-auto gap-x-3">
              {props.github && (
                <a
                  href={props.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`hover:border-[#6e5494] hover:text-[#6e5494] hover:scale-110 duration-150 border-2  p-[0.4rem] rounded-xl shadow ${
                    dark ? 'border-white text-white' : 'border-black text-black'
                  }`}
                >
                  <GitHub />
                </a>
              )}

              <a
                href={props.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow hover:scale-110 duration-150"
              >
                Check it Out
              </a>
            </div>

            <div className="mt-20 w-full">
              <i className="font-thin text-sm block text-center ">
                Built with:
              </i>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-5 w-full ">
                {props.tech.map(t => (
                  <Technology key={t} what={t} className="w-8 h-8" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <div
          className={`max-w-sm relative -top-[100vh] right-0 z-10 h-screen flex flex-col justify-center gap-y-10 text-[6.5rem] leading-[90px] font-black uppercase ${
            dark ? 'text-slate-900/80' : 'text-slate-300/60'
          }`}
        >
          {props.intro}
        </div>
      </div>
    </div>
  )
}

export default Project
