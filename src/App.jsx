import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="首頁">
        <Navbar />
        <Hero />
      </section>
      <section id="關於我">
        <Parallax />
      </section>
      <section>關於我</section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="聯絡方式">聯絡方式</section>
    </div>
  );
};

export default App;
