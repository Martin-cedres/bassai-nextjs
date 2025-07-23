// app/productos/[slug]/page.tsx
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
      <div className="row">
        <div className="col-md-6">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={600}
            height={400}
            className="img-fluid rounded"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          {/* Agregá más detalles si querés, como video, otras imágenes, etc */}
        </div>
      </div>
    </main>
  );
}
