import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/Testimonials';
import Freelance from '@/components/Freelance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-gray-50 overflow-x-hidden selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workflow />
      <Testimonials />
      <Freelance />
      <Contact />
      <Footer />
    </main>
  );
}
