import { motion } from 'framer-motion'
import Link from 'next/link'
import useParallaxEffect from '../hooks/useParallaxEffect'

const Blogs = () => {
  const card1 = useParallaxEffect({
    yOffset: 100,
    triggerPoint: 0.3,
    fadeOut: true,
  })

  const card2 = useParallaxEffect({
    yOffset: 100,
    triggerPoint: 0.3,
    fadeOut: true,
  })

  const card3 = useParallaxEffect({
    yOffset: 100,
    triggerPoint: 1,
    fadeOut: true,
  })

  return (
    <div
      className="h-screen flex items-center justify-evenly"
      id="blog-section"
    >
      <div className="text-center">
        <motion.div
          ref={card1.ref}
          initial={card1.initial}
          style={card1.style}
          className="h-32 relative z-20  bg-contain bg-no-repeat bg-center w-96 shadow-2xl p-10 rounded-md"
        >
          <h1 className="font-black text-5xl"></h1>
        </motion.div>

        <motion.div
          ref={card2.ref}
          initial={card2.initial}
          style={card2.style}
          className="h-32 z-20 relative -top-5 left-10 bg-contain bg-no-repeat bg-center w-96 shadow-2xl p-10 rounded-md"
        >
          <h1 className="font-black text-5xl"></h1>
        </motion.div>

        <motion.div
          ref={card3.ref}
          initial={card3.initial}
          style={card3.style}
          className="h-32 z-30 relative -top-5 left-20 bg-contain bg-no-repeat bg-center w-96 shadow-2xl p-10 rounded-md"
        >
          <h1 className="font-black text-5xl"></h1>
        </motion.div>
      </div>

      <div>
        <h2
          className="
        top-3 text-center text-xl italic  text-white max-w-xs relative skew-y-2
        before:block before:w-full before:h-8 before:absolute before:left-0 before:top-0 before:bg-primary before:-z-10  
        "
        >
          I do write some stuFFs
        </h2>
        <h1
          className="
      relative font-black text-7xl 
      before:block before:w-20 before:h-1/2 before:bg-black before:absolute before:-left-32 before:top-0
      after:block after:w-20 after:h-1/2 after:bg-black after:border-2 after:border-white after:absolute after:-left-28 after:top-4
      "
        >
          My Blog
        </h1>

        <div className="mt-14 w-full flex justify-end">
          <Link href="/blog">
            <a className="hover:scale-110 duration-150 bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow">
              Go to Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blogs
