import NavBar from "../containers/navbar/NavBar";
import Hero from "../containers/hero/Hero";
import Footer from "../containers/footer/Footer";
import Work from "../containers/work/Work";
import Skills from "../containers/skills/Skills";
import Contact from "../containers/contact/Contact";
import Resume from "../containers/resume/Resume";

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
