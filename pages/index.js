import 'tailwindcss/tailwind.css'

import About from '../components/index/About'
import Cover from '../components/index/Cover'
import Projects from '../components/index/projects'


export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Cover />
      <About />
      <Projects />
    </div>
  )
}
