"use client";

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let carouselInstance: any;

    async function loadBootstrapCarousel() {
      const { Carousel } = await import("bootstrap");
      if (carouselRef.current) {
        carouselInstance = new Carousel(carouselRef.current, {
          interval: 3000,
          ride: "carousel",
        });
      }
    }

    loadBootstrapCarousel();

    return () => {
      if (carouselInstance) carouselInstance.dispose();
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      id="carouselExampleIndicators"
      className="carousel slide mb-5 carousel-rounded"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/carousel0.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/carousel1.jpg" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/carousel2.jpg" className="d-block w-100" alt="Imagen 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
