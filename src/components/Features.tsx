import React from "react";
import { Icons } from "@/components/icons"; // Your icon mapping

const featuresLeft = [
  {
    title: "International",
    description:
      "Experience a global learning environment with exposure to diverse cultures and ideas.",
    icon: <Icons.flag className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Experimental",
    description:
      "Hands-on activities and innovative teaching methods to spark curiosity.",
    icon: <Icons.flask className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Relaxing",
    description:
      "Safe and calm spaces for students to thrive academically and emotionally.",
    icon: <Icons.cocktail className="text-teal-500 w-10 h-10" />,
  },
];

const featuresRight = [
  {
    title: "Beloved",
    description:
      "Students love learning here, and parents trust us for holistic education.",
    icon: <Icons.heart className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Rapid",
    description:
      "Fast-paced learning with modern resources to accelerate student growth.",
    icon: <Icons.bolt className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Magical",
    description:
      "An inspiring environment where creativity and imagination come alive.",
    icon: <Icons.magic className="text-teal-500 w-10 h-10" />,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <section className="my-16 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
        Why Our School is Special
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg md:text-xl">
        Discover the unique features that make our school an outstanding place for learning and growth. Our holistic approach ensures every student thrives academically and personally.
      </p>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-6">
          {featuresLeft.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h5 className="font-semibold text-lg text-gray-800 mb-1">
                  {feature.title}
                </h5>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            className="max-w-full h-auto rounded-xl shadow-lg"
            src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
            alt="App Preview"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-6">
          {featuresRight.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h5 className="font-semibold text-lg text-gray-800 mb-1">
                  {feature.title}
                </h5>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
