import React, { useEffect } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { scrollTop } from "../utils/CommonUtils";

function Home() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <Hero
        cName="hero"
        heroImg="icon-banner3jpg.jpg"
        title="Find your next stay"
        text="Search low prices on hotels, homes and much more..."
      />
      <Card />
    </>
  );
}

export default Home;
