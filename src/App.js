import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Webapp from "./components/Webapp";
import Mobileapp from "./components/Mobileapp";
import Digitalmarketing from "./components/Digitalmarketing";
import Cloudservices from "./components/Cloudservices";
import CareerDetails from "./components/CareerDetails";
import Career from "./components/Carrer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-application" element={<Webapp/>} />        
        <Route path="/mobile-application" element={<Mobileapp/>} />
        <Route path="/digital-marketing" element={<Digitalmarketing/>}/>
        <Route path="/cloud-services" element={<Cloudservices/>}/>
        <Route path="/careerdetails" element={<CareerDetails/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
