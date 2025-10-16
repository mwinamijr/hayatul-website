import React from "react";
import { Button } from "@/components/ui/button";

const Nursery: React.FC = () => {
  return (
    <div id="apppage" className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in-left">
            <h1 className="text-4xl font-bold mb-4">
              Make purchases with our app
            </h1>
            <hr className="border-white mb-4" />
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              repellendus quasi fuga nesciunt dolorum nulla magnam veniam
              sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button className="bg-white text-black hover:bg-gray-100">
                Download
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 xl:w-5/12 animate-fade-in-right">
            <img
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
              alt="App Preview"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default Nursery;
