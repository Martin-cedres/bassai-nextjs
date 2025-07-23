import { productos } from "@/lib/productos";
import Image from "next/image";

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export default function ProductoPage({ params }: { params: { slug: string } }) {
  const producto = productos.find((p) => p.slug === params.slug);
  if (!producto) return <div className="container py-5 text-center">Producto no encontrado</div>;

  return (
    <main className="container py-5">
      <h1 className="mb-4 text-center">{producto.nombre}</h1>

      {/* Galería */}
      <div className="d-flex gap-3 overflow-auto mb-4">
        {producto.imagenes.map((img, idx) => (
          <div key={idx} className="flex-shrink-0" style={{ width: 300, height: 225 }}>
            <Image
              src={img}
              alt={`Imagen ${idx + 1}`}
              width={300}
              height={200}
              className="rounded shadow object-fit-contain"
            />
          </div>
        ))}
      </div>

      {/* Descripción */}
      <p className="mb-4 text-center">{producto.descripcion}</p>

      {/* Video embebido */}
      {producto.video && (
        <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: 800 }}>
          <iframe
            src={producto.video}
            title={`Video de ${producto.nombre}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded"
          />
        </div>
      )}
    </main>
  );
}
