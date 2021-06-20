import 'tailwindcss/tailwind.css'

import Menu from '../components/navBar'
import Abaut from '../components/index/Abaut'
import Cover from '../components/index/Cover'
import Projects from '../components/index/projects'


export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Cover />
      <Abaut />
      <Projects />
    </div>
  )
}
