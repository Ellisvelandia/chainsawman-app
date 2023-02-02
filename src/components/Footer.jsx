import React from "react";
import pochita from "../assets/pochita.json";
import Lottie from "lottie-react";
import footer from "../assets/footer_bnr.jpg";

const Footer = () => {
  return (
    <>
      <footer className="relative h-auto w-full p-8">
        <div className="flex flex-col justify-center items-center my-8">
          <a href="https://shonenjumpplus.com/" target="_blank">
          <img src={footer} alt="footer-brn" />
          </a>
          <span className="mt-2">© 藤本タツキ/集英社・MAPPA</span>
        </div>
        <Lottie
          animationData={pochita}
          className="absolute bottom-2 right-5  w-20 h-20"
        />
      </footer>
    </>
  );
};

export default Footer;
