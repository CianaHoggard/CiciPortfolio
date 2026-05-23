import { useEffect, useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="imageCarousel">
      <div
        className="carouselTrack"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="carouselImage"
          />
        ))}
      </div>

      <button className="carouselBtn left" onClick={prev}>
        ‹
      </button>

      <button className="carouselBtn right" onClick={next}>
        ›
      </button>
    </div>
  );
}
