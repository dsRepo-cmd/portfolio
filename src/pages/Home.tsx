import NavBar from "../containers/NavBar";
import Hero from "../containers/Hero";
import Footer from "../containers/Footer";
import Skills from "../containers/Skills";
import Resume from "../containers/Resume";
import Contact from "../containers/Contact";
import Work from "../containers/Work";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
