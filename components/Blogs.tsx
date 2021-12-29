import { motion } from 'framer-motion'
import Link from 'next/link'
import useParallaxEffect from '../hooks/useParallaxEffect'

const Blogs = () => {
  const { ref, initial, style } = useParallaxEffect({
    yOffset: 100,
    triggerPoint: 0.3,
    fadeOut: true,
  })

  return (
    <div
      className="h-screen flex items-center justify-evenly"
      id="blog-section"
    >
      <motion.div
        ref={ref}
        initial={initial}
        style={{ ...style, backgroundImage: 'url(/worker.png)' }}
        className="h-full bg-contain bg-no-repeat  bg-center w-60 "
        title="https://cdn.dribbble.com/users/2837665/screenshots/11470856/media/4804692a4b6ac2e3bf2a96dff9caeab7.png"
      ></motion.div>

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
          My Blog Posts
        </h1>

        <div className="mt-14 w-full flex justify-end">
          <Link href="#projects">
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
