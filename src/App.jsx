import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ParticleBackground from "./Components/ParticleBackground";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar></Navbar>
      <Hero/>
      <About />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
