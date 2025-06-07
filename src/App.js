
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import OurUSP from './components/OurUSP/OurUSP';
import Testimonials from './components/Testimonials/Testimonials';
import WhyUs from './components/WhyUs/WhyUs';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AboutUs/>
   <OurUSP/>
   <WhyUs/>
   
   <Gallery/>
   <Testimonials/>
   <ContactSection/>
    <FAQ />
   <Footer/>
   </>
  );
}

export default App;
