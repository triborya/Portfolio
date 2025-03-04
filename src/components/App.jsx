import React, { useRef } from "react";
import "../assets/css/App.css";
import "../assets/css/index.css";
import Header from "./Header";
import Competences from "./Competences";
import Projects from "./Projects";
import Footer from "./Footer";
import ParticlesBG from "./Particles";

function App() {
  const senderRef = useRef(null);

  return (
    <>
      <ParticlesBG />
      <Header senderRef={senderRef} />
      <Competences />
      <Projects />
      <Footer senderRef={senderRef} />
    </>
  );
}

export default App;
