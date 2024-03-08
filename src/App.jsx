import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="首頁">
        <Navbar />
        <Hero />
      </section>
      <section id="關於我">
        <Parallax type={"about"} />
      </section>
      <section>
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type={"Portfolio"} />
      </section>
      <Portfolio />

      <section id="聯絡方式">
        <Contact />
      </section>
    </div>
  );
};

export default App;
