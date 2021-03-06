import "./scss/style.scss";
import Header from "./components/header";
import React, { useState, useEffect } from "react";
import Home from "./components/home";
import About from "./components/about";
import Contagion from "./components/contagion";
import Symtoms from "./components/symtoms";
import Solutions from "./components/solutions";
import Map from "./components/map";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? <></> : <div className="preloader"></div>}
      <div className="scrollToTop"></div>
      <Header />
      <Home />
      <About />
      <Contagion />
      <Symtoms />
      <Solutions />
      <Map />
      <Contact />
      <Footer />
      <span className="copyright">
        2021 &copy; All rights reserved by The Bigger
      </span>
    </div>
  );
}

export default App;
