import { useEffect } from "react";
import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import WhatWeDo from "../components/WhatWeDo.jsx";
import HomeGallery from "../components/HomeGallery.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Process from "../components/Process.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "Epoxy podovi | BKX Epoxy";
  }, []);

  return (
    <>
      <Navigation />

      <Hero />
      <WhatWeDo />

      <HomeGallery />

      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
