import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Introduction from "./utangulizi";
import Ujenzi from "./ujenzi";
import { Loader } from "../Loader";

const steps = [
  {
    title: "Utangulizi",
    content: <Introduction />,
  },
  {
    title: "Vifaa na maandalizi",
    content: <Ujenzi />,
  },
  {
    title: "Ujenzi awamu ya kwanza",
    content: <Loader />,
  },
  {
    title: "Ujenzi awamu ya pili",
    content: <Loader />,
  },
];

const Health: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <div className="space-y-6">
      {/* Step Titles */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
              current === index ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrent(index)}
          >
            {step.title}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="steps-content p-4 border rounded shadow-sm bg-white">
        {steps[current].content}
      </div>

      {/* Step Actions */}
      <div className="flex justify-end space-x-2 mt-4">
        {current > 0 && (
          <Button variant="outline" onClick={prev}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 ? (
          <Button onClick={next}>Next</Button>
        ) : (
          <Button onClick={() => alert("Processing complete!")}>Done</Button>
        )}
      </div>
    </div>
  );
};

export default Health;
