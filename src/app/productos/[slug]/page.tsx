// src/app/productos/[slug]/page.tsx

import { notFound } from "next/navigation";
import { productos } from "@/lib/productos";
import Image from "next/image";

// ✅ Asegurate que este tipo NO esté definido como `Promise<any>`
type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) return notFound();

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={600}
            height={400}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          {producto.video && (
            <div className="mt-4">
              <h5>Video:</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src={producto.video}
                  title={producto.nombre}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}