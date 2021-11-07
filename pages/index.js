import 'tailwindcss/tailwind.css'

import About from '../components/index/About'
import Cover from '../components/index/Cover'
import Projects from '../components/index/projects'
import Contact from '../components/index/contact'
import ImportantProject from '../components/index/importantProject'
import Technologies from '../components/index/technologies'

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Cover />
      <About />
      <Technologies />
      <ImportantProject />
      <Projects />
<<<<<<< HEAD
      <Contact/>
      <About/>
=======
>>>>>>> 71475fb72b3442e1840574410c5496b89d3ca3f5
    </div>
  )
}
