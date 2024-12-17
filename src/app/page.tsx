'use client'
import { useEffect } from "react";
import Lenis from "lenis";
import About from "./Components/About";
import EmailComponent from "./Components/Email";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import AchievementsSection from "./Components/Achievement";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add event listeners to navbar links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            lenis.scrollTo(targetElement);
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] w-auto">
      <Navbar />
      <div className="">
        <HeroSection />
        <AchievementsSection />
        <div id="about" className="mt-12">
          <About />
        </div>
        <div id="project" className="flex justify-center pt-[4%]">
          <Project />
        </div>
        <div id="contact">
          <EmailComponent />
        </div>
        <Footer />
      </div>
    </main>
  );
}