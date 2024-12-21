import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);
  
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-10">
        <NavBar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
      {/* <div
      style={{
        width: "10px",
        height: "10px",
        position: "fixed",
        zIndex: 9999,
        borderRadius: "50%",
        backgroundColor: "#fff",
        top: mousePosition.y - 5, // Center the circle
        left: mousePosition.x - 5, // Center the circle
        transition: "all cubic-bezier(0.19, 1, 0.22, 1) 0s", 
      }}
      /> */}
    </div>
  );
};

export default App;
