import React from "react";
import { Characters, Hero } from "./pages";
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

        <section className="snap-center">
          <Characters />
        </section>
      </div>
    </>
  );
};

export default App;
