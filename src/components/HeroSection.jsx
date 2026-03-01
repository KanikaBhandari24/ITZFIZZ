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

    const container = containerRef.current;
    const containerWidth = container.clientWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, 
      },
    });

    tl.to(cycleRef.current, {
      x: containerWidth - 250,
      ease: "none",
    })

      .to(
        coverRef.current,
        {
          width: 0,
          ease: "none",
        },
        0
      )

      .to(
        ".stat",
        {
          opacity: 1,
          y: -20,
          stagger: 0.08, 
          duration: 0.3,
        },
        0.05
      );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-gray-50 overflow-hidden"
    >
      <div className="relative w-full h-screen flex flex-col justify-between">
        {/* TOP STATS */}
        <div className="flex justify-start gap-10 px-16 pt-16">
          <div className="stat opacity-0 bg-purple-300 shadow-xl rounded-2xl px-8 py-6 text-center w-64 border border-purple-400 transition duration-300 hover:scale-105">
            <h2 className="text-5xl font-extrabold text-white">95%</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium">
              Client Satisfaction
            </p>
          </div>

          <div className="stat opacity-0 bg-green-300 shadow-xl rounded-2xl px-8 py-6 text-center w-64 border border-green-400 transition duration-300 hover:scale-105">
            <h2 className="text-5xl font-extrabold text-white">120+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium">
              Projects Delivered
            </p>
          </div>
        </div>

        {/* HEADLINE STRIP */}
        <div className="relative bg-blue-300 w-full h-[230px] flex items-center justify-center overflow-hidden">
          <div
            ref={coverRef}
            className="absolute right-0 top-0 h-full bg-green-400 z-10"
            style={{ width: "100%" }}
          />

          <h1 className="text-white text-[150px] font-bold whitespace-nowrap relative z-0">
            WELCOME ITZFIZZ
          </h1>
        </div>

        {/* BOTTOM STATS */}
        <div className="flex justify-end gap-10 px-16 pb-16">
          <div className="stat opacity-0 bg-pink-300 shadow-xl rounded-2xl px-8 py-6 text-center w-64 border border-pink-400 transition duration-300 hover:scale-105">
            <h2 className="text-5xl font-extrabold text-white">3+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium">
              Years Experience
            </p>
          </div>

          <div className="stat opacity-0 bg-gray-400 shadow-xl rounded-2xl px-8 py-6 text-center w-64 border border-gray-500 transition duration-300 hover:scale-105">
            <h2 className="text-5xl font-extrabold text-white">50+</h2>
            <p className="mt-3 text-lg text-gray-700 font-medium">
              Happy Clients
            </p>
          </div>
        </div>

        {/* 🚲 Cycle */}
        <img
          ref={cycleRef}
          src={cycleImg}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-auto z-20"
          alt="cycle"
        />
      </div>
    </section>
  );
};

export default HeroSection;