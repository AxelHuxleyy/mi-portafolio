import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ParticleField from '../components/ParticleField';
import Navbar from '../components/temp';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <Analytics />
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
