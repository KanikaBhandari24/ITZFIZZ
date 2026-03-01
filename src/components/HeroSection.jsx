import React, { useRef, useEffect } from "react";
import cycleImg from "../assets/cycle.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const containerRef = useRef(null);
  const cycleRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerWidth = containerRef.current.offsetWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(cycleRef.current, {
      x: containerWidth - 150,
      ease: "none",
    }).to(
      coverRef.current,
      {
        width: 0,
        ease: "none",
      },
      0,
    ); // Stats animation
    tl.to(
      ".stat",
      {
        opacity: 1,
        y: -20,
        stagger: 0.1,
        duration: 0.4,
      },
      0.05,
    );

    return () => {
      tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="montserrat relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
    >
      <div className="relative w-full  flex justify-center items-center h-full">


        {/* TOP STATS */}
        <div className="absolute top-[10%] w-full flex justify-start gap-26 px-20">
          <div
            className="stat opacity-0 bg-purple-300 backdrop-blur-md 
                  shadow-xl rounded-2xl px-10 py-8 
                  text-center w-65 
                  border border-purple-400 
                  hover:scale-105 transition duration-300"
          >
            <h2 className="text-6xl font-extrabold text-white">95%</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium tracking-wide">
              Client Satisfaction
            </p>
          </div>

          <div
            className="stat opacity-0 bg-green-300 backdrop-blur-md 
                  shadow-xl rounded-2xl px-10 py-8 
                  text-center w-65
                  border border-green-400 
                  hover:scale-105 transition duration-300"
          >
            <h2 className="text-5xl font-extrabold text-white">120+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium tracking-wide">
              Projects Delivered
            </p>
          </div>
        </div>

        {/* 🎯 HEADLINE */}
        <div className="relative bg-blue-300 w-full flex justify-center items-center py-2 overflow-hidden">
          <div
            ref={coverRef}
            className="absolute right-0 top-0 h-full bg-green-400 z-10"
            style={{ width: "100%" }}
          ></div>

          <h1 className="text-white text-[160px] tracking-wide font-bold text-center whitespace-nowrap relative z-0">
            WELCOME ITZFIZZ
          </h1>
        </div>

        {/* 🔽 BOTTOM STATS */}
        <div className="absolute bottom-[7%] w-full flex justify-end gap-26 px-30">
          <div
            className="stat opacity-0 bg-pink-300 backdrop-blur-md 
                  shadow-xl rounded-2xl px-10 py-8 
                  text-center w-65
                  border border-pink-400 
                  hover:scale-105 transition duration-300"
          >
            <h2 className="text-5xl font-extrabold text-white">3+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium tracking-wide">
              Years Experience
            </p>
          </div>

          <div
            className="stat opacity-0 bg-gray-400 backdrop-blur-md 
                  shadow-xl rounded-2xl px-10 py-8 
                  text-center w-65 
                  border border-gray-500 
                  hover:scale-105 transition duration-300"
          >
            <h2 className="text-5xl font-extrabold text-white">50+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium tracking-wide">
              Happy Clients
            </p>
          </div>
        </div>

        {/* Cycle */}
        <img
          ref={cycleRef}
          src={cycleImg}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-105 h-auto z-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
