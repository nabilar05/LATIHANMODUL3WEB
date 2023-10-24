import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/hero";
import Home from "./Pages/home";
import AboutUs from "./Pages/about";
import Contact from "./Pages/contact";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      <Footer />
    </Router>
  );
};

export default App