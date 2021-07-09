import 'tailwindcss/tailwind.css'

import About from '../components/index/About'
import Cover from '../components/index/Cover'
import Projects from '../components/index/projects'
import Contact from '../components/index/contact'

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Cover />
      <About />
      <Projects />
      <Contact/>
    </div>
  )
}
