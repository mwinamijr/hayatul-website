import React from "react";
import { Button } from "@/components/ui/button";

const Nursery: React.FC = () => {
  return (
    <div id="apppage" className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 animate-fade-in-left">
            <h1 className="text-5xl font-extrabold mb-4">Make Purchases with Our App</h1>
            <hr className="border-white w-20 mb-6" />
            <p className="mb-6 text-lg">
              Enjoy a seamless shopping experience with our mobile application. 
              Browse, select, and purchase your favorite products anytime, anywhere.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
                Download
              </Button>
              <Button variant="outline" className="border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 xl:w-5/12 animate-fade-in-right">
            <img
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
              alt="App Preview"
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Our app is designed to give you the ultimate convenience in managing purchases.
          With a clean interface, fast performance, and secure transactions, you can shop with
          confidence. Explore features, discover new products, and stay updated with exclusive
          offers—all from the palm of your hand.
        </p>
      </section>
    </div>
  );
};

export default Nursery;
