import Navbar from './components/Navbar/Navbar';


import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


{
/*
const App =()=> {
  return(
    <div>
       
            <Navbar />
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
    </div>
  )


}
*/
}
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
      <Footer/>
    </Router>
  );
};
export default App;