import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Blog from './pages/Blog';
import Contacto from './pages/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contacto />}/>
      </Routes>
    </>
  );
}

export default App;
