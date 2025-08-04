import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ParticleBackground from "./Components/ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar></Navbar>
      <Hero/>
      <About />
    </>
  );
}

export default App;
