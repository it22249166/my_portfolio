
import Contact from "@/components/Contact";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Skills from "@/src/components/Skills";
import About from "@/src/components/About"; 
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}