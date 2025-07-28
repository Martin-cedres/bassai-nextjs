"use client";

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInstance = useRef<any>(null); // para evitar error de tipo complicado

  useEffect(() => {
    async function loadBootstrapCarousel() {
      const { Carousel } = await import("bootstrap");
      if (carouselRef.current) {
        carouselInstance.current = new Carousel(carouselRef.current, {
          interval: 3000,
          ride: "carousel",
        });
      }
    }
    loadBootstrapCarousel();

    return () => {
      if (carouselInstance.current) {
        carouselInstance.current.dispose();
      }
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
          <Image
            src="/carousel0.jpg"
            alt="Imagen 1"
            width={800}
            height={400}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/carousel1.jpg"
            alt="Imagen 2"
            width={800}
            height={400}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/carousel2.jpg"
            alt="Imagen 3"
            width={800}
            height={400}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
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
