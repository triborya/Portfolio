import React from "react";
import "../assets/css/App.css";
import "../assets/css/index.css";
import Header from "./Header";
import Competences from "./Competences";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Competences />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
