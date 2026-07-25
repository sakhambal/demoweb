import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Teams from "./Components/Teams";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import { ReactLenis } from 'lenis/react'


const App = () => {



  return (
    <div>
      <ReactLenis root >
      <Navbar />
      <Hero />
      <Services />
      <Teams />
      <Testimonials />
      <Footer />
      </ReactLenis>
    </div>
  );
};

export default App;
