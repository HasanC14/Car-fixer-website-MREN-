import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Hero from "../Swiper/Hero";

const Home = () => {
  return (
    <div>
      <div className="mt-10">
        <Hero></Hero>
        <About></About>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
