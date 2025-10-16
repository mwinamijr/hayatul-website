import React from "react";
import { Icons } from "@/components/icons"; // Map your icons here

const featuresLeft = [
  {
    title: "International",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.flag className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "Experimental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.flask className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "Relaxing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.cocktail className="text-purple-600 w-8 h-8" />,
  },
];

const featuresRight = [
  {
    title: "Beloved",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.heart className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "Rapid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.bolt className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "Magical",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    icon: <Icons.magic className="text-purple-600 w-8 h-8" />,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Why is it so great?</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-6">
          {featuresLeft.map((feature) => (
            <div className="flex items-start gap-4" key={feature.title}>
              <div>{feature.icon}</div>
              <div>
                <h5 className="font-bold mb-1">{feature.title}</h5>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            className="max-w-full h-auto"
            src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
            alt="App Preview"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-6">
          {featuresRight.map((feature) => (
            <div className="flex items-start gap-4" key={feature.title}>
              <div>{feature.icon}</div>
              <div>
                <h5 className="font-bold mb-1">{feature.title}</h5>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
