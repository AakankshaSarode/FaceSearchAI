import React, { useEffect } from "react";
import upBg from "../../assets/AI2.png";
import Navbar from "../Navbar/Navbar";
import "./Hero.css"; // CSS for any additional styles

const Hero = () => {
  // Check when the element is in view to trigger the scroll effect
  const checkScroll = () => {
    const scrollElements = document.querySelectorAll('.scroll-effect');

    scrollElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop <= windowHeight * 0.8) { // Trigger when 80% of the element is visible
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view');
      }
    });
  };

  // Add event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on load

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="hero-container justify-end relative min-h-screen flex flex-col items-center  bg-cover bg-center ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img src={upBg} alt="Hero Background" className="w-full h-full object-cover" />
      </div>

      {/* Navbar */}
      <div className="hero-container h-screen flex flex-col justify-between">
        <Navbar />
      </div>

      {/* Overlay Content */}
      <div className="text-center font-secondary scroll-effect opacity-0 transform translate-y-10 transition duration-700 ease-out  mb-16">
        <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold uppercase leading-tight mb-4 text-white">
          Welcome to FaceSearchAI
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-8">
          FaceSearch AI harnesses advanced AI to precisely scan and match faces, offering a secure, fast, and reliable identification solution.
        </p>
      </div>
    </div>
  );
};

export default Hero;
