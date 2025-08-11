import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ParticleBackground from "./Components/ParticleBackground";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Preloader from "./Components/Preloader";
import GithubPopup from "./Components/GithubPopup";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Toaster position="top-right" />
          <GithubPopup />
          <ParticleBackground />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
