// src/app/productos/[slug]/page.tsx

import { productos } from "@/lib/productos";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductoPage({ params }: Props) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-center">{producto.nombre}</h1>
          <div className="card shadow">
            <div className="image-wrapper" style={{ position: "relative", height: "400px" }}>
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                style={{ objectFit: "cover" }}
                className="card-img-top rounded"
              />
            </div>
            <div className="card-body">
              <p className="card-text">{producto.descripcion}</p>
              <Link href="/" className="btn btn-outline-primary mt-3">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
