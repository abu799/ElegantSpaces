import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Inspiration from "@/components/Inspiration";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  
  // Handle hash navigation when coming to home page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80 // Header offset
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Inspiration />
      <Testimonials />
      <Contact />
    </>
  );
}
