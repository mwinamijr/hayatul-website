import React, { useState, useEffect } from "react";
import carousel1 from "../assets/images/carousel001.png";
import carousel2 from "../assets/images/carousel002.png";
import carousel3 from "../assets/images/carousel003.png";

interface Slide {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: carousel1,
    alt: "Science experiment",
    title: "Hands-on Experience",
    caption: "Experimental learning to spark curiosity.",
  },
  {
    src: carousel2,
    alt: "Children playing",
    title: "Fun & Safe Environment",
    caption: "Students thrive in a safe and enjoyable space.",
  },
  {
    src: carousel3,
    alt: "Good school facilities",
    title: "Great Environment",
    caption: "Our environment supports learning all the time.",
  },
];

const Carousel: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative my-8">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="flex-shrink-0 w-full relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#2CA3DB] bg-[#2CA3DB]/60 text-white p-4 rounded-md max-w-xs">
                <h3 className="text-lg md:text-xl font-semibold">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        {/* Controls */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 
             bg-[#2CA3DB]/30 text-white p-2 rounded-full 
             hover:bg-[#2CA3DB]/70 transition-colors duration-300"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 
             bg-[#2CA3DB]/30 text-white p-2 rounded-full 
             hover:bg-[#2CA3DB]/70 transition-colors duration-300"
          onClick={nextSlide}
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                active === idx ? "bg-[#2CA3DB]" : "bg-[#2CA3DB]/40"
              }`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
