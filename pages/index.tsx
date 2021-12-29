import Header from '../components/Header'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="font-code-next">
      <Header />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  )
}
