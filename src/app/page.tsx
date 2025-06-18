import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
