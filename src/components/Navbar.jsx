import React, { useEffect, useState } from "react";
import logo from "../assets/image.webp";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? "flex absolute top-0 md:h-[16vh] items-center justify-center left-0 right-0 opacity-100 z-50 blur-effect-dark w-full"
            : "fixed top-0 left-0 right-0 h-[16vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme w-full"
        }
      >
        <nav className="flex items-center justify-between chain-container ">
          <div className="flex items-center w-full md:justify-start justify-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-96 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
