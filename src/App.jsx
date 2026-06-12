import { useState, useEffect } from "react";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      // Get the current hash from location
      const hash = window.location.hash.replace("#/", "");
      if (["home", "work", "experience", "skills", "contact"].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === "") {
        // Redirect empty hash to home
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // run on initial load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Navbar currentPage={currentPage} />
      <main className="pt-24 min-h-[80vh]">
        {currentPage === "home" && (
          <>
            <Hero />
            <FeatureCards />
          </>
        )}
        {currentPage === "work" && <ShowcaseSection />}
        {currentPage === "experience" && <Experience />}
        {currentPage === "skills" && <TechStack />}
        {currentPage === "contact" && <Contact />}
      </main>
      <Footer />
    </>
  );
};

export default App;
