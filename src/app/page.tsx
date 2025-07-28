"use client";

// app/page.tsx o HomePage.tsx
import Link from "next/link";
import Image from "next/image";
import { productos } from "@/lib/productos";
import Carousel from './components/Carousel';
import SeoHead from "./components/SeoHead"; 







export default function HomePage() {
  return (
    <main className="container py-5">
       <SeoHead />

      <Carousel />


      <div className="row justify-content-center">
        {productos.map((producto) => (
          <div key={producto.slug} className="col-6 col-md-4 col-lg-3 mb-4">
            <Link href={`/productos/${producto.slug}`} className="text-decoration-none text-dark">
              <div className="card h-100 border-0">
                <div className="image-wrapper">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    style={{ objectFit: "cover" }}
                    className="card-img-top rounded"
                  />
                </div>
                <button className="w-100 mt-1 btn btn-primary">
                  Ver más detalles
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

