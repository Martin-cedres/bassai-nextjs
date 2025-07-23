"use client";

import Link from "next/link";
import Image from "next/image";
import { productos } from "@/lib/productos";
import Carousel from "./components/Carousel";

export default function HomePage() {
  return (
    <main className="container py-5">
      <Carousel />

      <div className="row">
        {productos.map((producto) => (
          <div key={producto.slug} className="col-6 col-md-4 col-lg-3 mb-4">
            <Link href={`/productos/${producto.slug}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <div className="image-wrapper">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    priority
                    style={{ objectFit: "cover" }}
                    className="card-img-top rounded"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
