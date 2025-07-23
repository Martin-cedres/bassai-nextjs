// src/components/ProductoImagen.tsx
import Image from "next/image";

export default function ProductoImagen({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        className="rounded"
      />
    </div>
  );
}
