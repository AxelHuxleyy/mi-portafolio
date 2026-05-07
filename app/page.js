import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ParticleField from '../components/ParticleField';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
