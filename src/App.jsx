import Navbar from "./Components/Navbar";
import "./app.scss"
import Test from "./Test";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
const App = () => {
  return <div>
     <Cursor />
    <section id="HomePage"><Navbar/>
    <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section id="Order"><Services /></section>
    
   <section id="Portfolio"><Parallax  type="portfolio"/></section>
    <Portfolio  />
    <section id="Contact"><Contact /></section>
  {/* <Test /> */}
  </div>;
};

export default App;
