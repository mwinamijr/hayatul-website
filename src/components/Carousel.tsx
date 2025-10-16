import React, { useState } from "react";

interface Slide {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=1170",
    alt: "Students learning",
    title: "Interactive Learning",
    caption: "Engaging lessons in a modern classroom.",
  },
  {
    src: "https://images.pexels.com/photos/256657/pexels-photo-256657.jpeg?auto=compress&cs=tinysrgb&w=1170",
    alt: "Children playing",
    title: "Fun & Safe Environment",
    caption: "Students thrive in a safe and enjoyable space.",
  },
  {
    src: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1170",
    alt: "Science experiment",
    title: "Hands-on Experience",
    caption: "Experimental learning to spark curiosity.",
  },
];

const Carousel: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const prevSlide = () => {
    setActive(active === 0 ? slides.length - 1 : active - 1);
  };

  const nextSlide = () => {
    setActive(active === slides.length - 1 ? 0 : active + 1);
  };

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
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-md max-w-xs">
                <h3 className="text-lg md:text-xl font-semibold">{slide.title}</h3>
                <p className="text-sm md:text-base">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
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
                active === idx ? "bg-white" : "bg-gray-400"
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
