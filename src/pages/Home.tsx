import React from "react";
import NavBar from "../containers/navbar/NavBar";
import Hero from "../containers/hero/Hero";

import Footer from "../containers/footer/Footer";
import Work from "../containers/work/Work";
import Skills from "../containers/skills/Skills";
import Contact from "../containers/contact/Contact";

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
