import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Skills />
                <Project />
                <Footer />
              </>
            } 
          />
          
         
          <Route path="/Hero" element={<Hero/>} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
