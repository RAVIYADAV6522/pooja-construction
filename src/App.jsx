import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import ClientHomes from "./components/ClientHomes";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="materials">
        <Materials />
      </section>

      <section id="homes">
        <ClientHomes />
      </section>

      <Stats />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

