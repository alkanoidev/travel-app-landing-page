import "./App.css";
import { useState } from "react";
import FeaturedDestinations from "./sections/FeaturedDestinations/FeaturedDestinations";
import Footer from "./sections/Footer/Footer";
import Main from "./sections/Main/Main";
import Navbar from "./sections/Navbar/Navbar";
import Section2 from "./sections/Section2/Section2";
import Section4 from "./sections/Section4/Section4";
import Testimonials from "./sections/Testimonials/Testimonials";
import TrendingStories from "./sections/TrendingStories/TrendingStories";
import { ReactComponent as Element1 } from "./element1.svg";
import { ReactComponent as Element2 } from "./element2.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Section2 />
      <FeaturedDestinations />
      <Section4 />
      <Testimonials />
      <TrendingStories />
      <Footer />
    </div>
  );
}

export default App;
