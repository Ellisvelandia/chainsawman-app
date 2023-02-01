import React from "react";
import { Hero } from "./pages";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="text-white h-screen snap-y snap-mandatory z-0 ">
        <Navbar />
        <section className="snap-start aspect-video">
          <Hero />
        </section>
      </div>
    </>
  );
};

export default App;
