import React from "react";
import { Characters, Comic, Hero } from "./pages";
import "./App.css";
import { Footer, Navbar } from "./components";

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

        <section className="snap-center">
          <Comic />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;
