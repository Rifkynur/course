import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponen";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/Homepage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";
import TestimonialPage from "./pages/TestimonialPage";
import "./dist/css/style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavbarComponent />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/testimonial" Component={TestimonialPage} />
          <Route path="/faq" Component={FaqPage} />
          <Route path="/syarat" Component={SyaratPage} />
        </Routes>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
