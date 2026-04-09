import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Verify from "./pages/Verify";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import DemoEndedOverlay from "./components/DemoEnd";

function App() {
  return (
    <BrowserRouter >
    <ScrollToTop />
        <Routes >
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Contact />} />
        </Routes>
        <DemoEndedOverlay/>
    </BrowserRouter>
  );
}

export default App;