import Image from 'next/image'
import { GitHub } from 'react-feather'
import Technology from './Technology'

const Project = () => {
  return (
    <div className="flex">
      <div className="bg-pink-600 w-1/2 h-screen flex flex-col items-center justify-center">
        <Image
          width={400}
          height={300}
          src="/project-image.png"
          alt="project"
          className="z-10"
        />
      </div>

      <div className="flex flex-col w-1/2 bg-black">
        <div className="absoulte z-20 grid place-content-center  p-20 relative top-0 left-0 h-screen">
          <div className="flex flex-col items-baseline gap-y-5  text-white">
            <h1 className="text-5xl font-black uppercase">Projects Logo</h1>

            <div className="w-full mb-10">
              <div className="text-3xl text-pink-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-400 text-center px-5">
                Where Everything would just work out
              </p>
              <div className="text-3xl text-pink-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>

            <p className="indent-8 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              atque, consequatur quibusdam corrupti perferendis, explicabo sed
              nihil dignissimos dolore dolores modi nobis doloremque laboriosam
              qui voluptatibus voluptatum nemo illum dolorum?.. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eveniet atque,
              consequatur quibusdam corrupti perferendis, explicabo sed nihil
              dignissimos dolore dolores modi nobis doloremque laboriosam qui
              voluptatibus voluptatum nemo illum dolorum?..
            </p>

            <div className="flex items-center justify-end ml-auto gap-x-2">
              <a
                href="#"
                className="border-2 border-white text-white p-[0.4rem] rounded-xl shadow"
              >
                <GitHub />
              </a>

              <a
                href="#"
                className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
              >
                Check it Out
              </a>
            </div>

            <div className="mt-20">
              <i className="font-thin text-sm block text-center ">
                Built with:
              </i>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-5 w-full ">
                <Technology what="react" className="w-8 h-8" />
                <Technology what="nextjs" className="w-12 h-8" />
                <Technology what="redux" className="w-8 h-8" />
                <Technology what="angular" className="w-8 h-8" />
                <Technology what="express-js" className="w-14 h-8" />

                <Technology what="mongo-db" className="w-8 h-8" />
                <Technology what="cockroach_db" className="w-8 h-8" />
                <Technology what="gh_actions" className="w-8 h-8" />
                <Technology what="azure" className="w-8 h-8" />
                <Technology what="aws" className="w-8 h-8" />
                <Technology what="tailwind" className="w-8 h-8" />
                <Technology what="graphql" className="w-8 h-8" />

                <Technology what="golang" className="w-8 h-8" />
                <Technology what="postgres" className="w-8 h-8" />
                <Technology what="etherium" className="w-8 h-8" />
                <Technology what="solana" className="w-8 h-8" />
                <Technology what="rust" className="w-8 h-8" />
                <Technology what="vue" className="w-8 h-8" />
                <Technology what="solidity" className="w-8 h-8" />
                <Technology what="redis" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative -top-[100vh] right-0 z-10 h-screen flex flex-col justify-center gap-y-10 text-[6.5rem] leading-[90px] font-black uppercase text-slate-900/60">
          Where Everything would just work out
        </div>
      </div>
    </div>
  )
}

export default Project
