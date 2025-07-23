// src/app/productos/[slug]/page.tsx

import { notFound } from "next/navigation";
import { productos } from "@/lib/productos";
import Image from "next/image";

// Esta es la forma correcta de tipar los props en un segmento dinámico
interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductoPage({ params }: PageProps) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">{producto.nombre}</h1>
      <div className="card shadow-sm">
        <div className="image-wrapper position-relative" style={{ height: "400px" }}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-top"
          />
        </div>
        <div className="card-body">
          <p className="card-text">{producto.descripcion}</p>
        </div>
      </div>
    </main>
  );
}
