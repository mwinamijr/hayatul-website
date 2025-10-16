import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ClassicFormPage: React.FC = () => {
  const [collapseID, setCollapseID] = useState<string>("");

  const toggleCollapse = (id: string) => {
    setCollapseID(prev => (prev !== id ? id : ""));
  };

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    if (nav) nav.style.height = "65px";
    return () => {
      if (nav) nav.style.height = "auto";
    };
  }, []);

  return (
    <div id="classicformpage" className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Overlay */}
      {collapseID && (
        <div
          id="sidenav-overlay"
          className="absolute inset-0 bg-transparent"
          onClick={() => toggleCollapse("navbarCollapse")}
        />
      )}

      <div className="container mx-auto px-4 py-32 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold">Sign up right now!</h1>
            <hr className="border-t border-white w-24 mx-auto md:mx-0" />
            <p className="text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              repellendus quasi fuga nesciunt dolorum nulla magnam veniam
              sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
              quisquam iste, maiores. Nulla.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-md p-6 text-white">
              <h3 className="text-center text-2xl font-bold mb-4">Register:</h3>
              <hr className="border-t border-white mb-4" />
              <div className="space-y-4">
                <Input placeholder="Your name" className="text-white placeholder-white border-white" />
                <Input placeholder="Your email" className="text-white placeholder-white border-white" />
                <Input placeholder="Your password" type="password" className="text-white placeholder-white border-white" />
              </div>
              <div className="text-center mt-6">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">Sign Up</Button>
                <hr className="border-t border-white my-4" />
                <div className="flex justify-center space-x-4 text-white">
                  <a href="#!" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                  <a href="#!" className="hover:text-blue-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#!" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-4 py-20 text-center text-black/80">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ClassicFormPage;
