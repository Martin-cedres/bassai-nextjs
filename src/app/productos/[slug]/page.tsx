"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { productos } from "@/lib/productos";

export default function ProductoDetallePage() {
  const { slug } = useParams();
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    return <div className="container py-5"><h2>Producto no encontrado</h2></div>;
  }

  return (
    <main className="container py-5">
      <article className="row">
        {/* Imagen: primero en móviles y notebooks */}
        <div className="col-12 col-md-6 order-md-1">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={600}
            height={400}
            className="img-fluid rounded"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Descripción: segundo en móviles, lado derecho en notebooks */}
        <div className="col-12 col-md-6 order-md-2 mt-4 mt-md-0">
          <h1 className="fs-1 fw-bold">{producto.nombre}</h1>
          <p className="fs-4">{producto.descripcion}</p>
        </div>
      </article>
    </main>
  );
}
