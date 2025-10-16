import React from "react";
import Carousel from "@/components/Carousel";
import Services from "@/components/Features";

const Home: React.FC = () => {
  return (
    <div className="space-y-10">
      <Carousel />
      <Services />
    </div>
  );
};

export default Home;
