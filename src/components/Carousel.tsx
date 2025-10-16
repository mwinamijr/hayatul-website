import React, { useState } from "react";

interface Slide {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "http://127.0.0.1:8000/media/carousel/20200921_093334.jpg",
    alt: "First slide",
    title: "Slight Mast",
    caption: "Third text",
  },
  {
    src: "http://127.0.0.1:8000/media/primary/20201128_092423.jpg",
    alt: "Second slide",
    title: "Slight Mast",
    caption: "Third text",
  },
  {
    src: "http://127.0.0.1:8000/media/nursery/20201128_091608.jpg",
    alt: "Third slide",
    title: "Slight Mast",
    caption: "Third text",
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
    <div className="w-full relative">
      <hr className="mb-4" />

      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="flex-shrink-0 w-full relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.caption}</p>
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
              className={`w-3 h-3 rounded-full ${
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
