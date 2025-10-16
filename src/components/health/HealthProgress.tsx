import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Introduction from "./utangulizi";
import Ujenzi from "./ujenzi";
import { Loader } from "../Loader";

const steps = [
  { title: "Utangulizi", content: <Introduction /> },
  { title: "Vifaa na maandalizi", content: <Ujenzi /> },
  { title: "Ujenzi awamu ya kwanza", content: <Loader /> },
  { title: "Ujenzi awamu ya pili", content: <Loader /> },
];

const Health: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 0, 0));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      
      {/* Step Indicators */}
      <div className="flex flex-wrap justify-start gap-3 mb-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            onClick={() => setCurrent(index)}
            className={`
              cursor-pointer px-4 py-2 rounded-full font-semibold text-sm flex items-center justify-center transition-all duration-300
              ${current === index 
                ? "bg-teal-500 text-white shadow-lg scale-105" 
                : "bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-500"
              }
              min-w-[100px] text-center
            `}
          >
            {step.title}
          </div>
        ))}
      </div>

      {/* Step Progress Bar */}
      <div className="relative h-2 w-full bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-teal-500 rounded-full transition-all duration-500"
          style={{ width: `${((current + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-2xl">
        {steps[current].content}
      </div>

      {/* Step Actions */}
      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
        <Button
          variant="outline"
          onClick={prev}
          disabled={current === 0}
          className="px-6 py-2 rounded-full hover:bg-teal-50 hover:text-teal-500 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          Previous
        </Button>
        {current < steps.length - 1 ? (
          <Button
            onClick={next}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-white hover:from-teal-500 hover:to-teal-600 transition-colors w-full sm:w-auto"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={() => alert("Processing complete!")}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-colors w-full sm:w-auto"
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

export default Health;
